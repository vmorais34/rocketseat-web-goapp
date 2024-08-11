interface createMessageReaction {
  roomId: string
  messageId: string
}

/**
 * Creates a reaction to a message in a room.
 *
 * @param {createMessageReaction} params - An object containing the roomId and messageId.
 * @param {string} params.roomId - The ID of the room.
 * @param {string} params.messageId - The ID of the message.
 * @return {Promise<void>} A promise that resolves when the reaction is created.
 */
export async function createMessageReaction({ messageId, roomId} : createMessageReaction){
   await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages/${messageId}/react`, {
    method: 'PATCH',
  })
}