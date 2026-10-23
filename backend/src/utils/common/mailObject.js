import { MAIL_ID } from "../../config/serverConfig.js";

export const workspaceJoinMail = (workspace, email) => {
    return {
        from: MAIL_ID,
        to: email,
        subject: 'You have been added to a workspace',
        text: `Congratulations! You have been added to the workspace ${workspace.name}`
    }
}