interface RemoveMessageReaction {
  roomId: string
  messageId: string
}

/**
 * Removes a reaction from a message in a room.
 *
 * @param {RemoveMessageReaction} RemoveMessageReaction - An object containing the room ID and message ID.
 * @return {void} No return value.
 */
export async function removeMessageReaction({ messageId, roomId} : RemoveMessageReaction){
   await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages/${messageId}/react`, {
    method: 'PATCH',
  })
}