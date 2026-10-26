import { JOIN_CHANNEL } from "../utils/common/eventConstants.js";

export default function channelmessageHandlers(io, socket) {
    socket.on(JOIN_CHANNEL, async function joinChannelHandler(data, cb) {
        const roomId = data.channelId;
        socket.join(roomId);
        console.log(`User ${socket.id} joined the channel: ${roomId}`);
        if (typeof cb === "function") {
            cb({
                success: true,
                message: "Successfully joined the channel",
                data: roomId
            });
        }
    })
}