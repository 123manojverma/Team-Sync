import { StatusCodes } from "http-status-codes";

import channelRepository from "../repositories/channelRepository.js";
import messageRepository from "../repositories/messageRepository.js";
import ClientError from "../utils/errors/clientError.js";
import { isUserMemberOfWorkspace } from "./workspaceService.js";

export const getMessagesService = async (messageParams, page, limit,userId) => {
    try {
        const channelDetails = await channelRepository.getChannelWithWorkspaceDetails(messageParams.channelId);

        if (!channelDetails) {
            throw new ClientError({
                message:'Channel not found with the provided ID',
                explanation:'Invalid data sent from the client',
                statusCode:StatusCodes.NOT_FOUND
            })
        }

        const workspace=channelDetails.workspaceId;

        const isMember=await isUserMemberOfWorkspace(workspace,userId);

        if(!isMember){
            throw new ClientError({
                explanation:'User is not a member of the workspace',
                message:'User is not a member of the workspace',
                statusCode:StatusCodes.UNAUTHORIZED
            })
        }

        const messages = await messageRepository.getPaginatedMessaged(messageParams, page, limit);
        return messages;
    } catch (error) {
        console.log('Get Message Service error',error);
        throw error;
    }
}