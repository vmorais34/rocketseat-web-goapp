interface CreateMessage {
  roomId: string
  message: string
}

/**
 * Creates a new message in a room.
 *
 * @param {CreateMessage} messageData - An object containing the room ID and message text.
 * @return {Object} An object containing the ID of the created message.
 */
export async function createMessage({roomId, message} : CreateMessage){
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages}`, {
    method: 'POST',
    body: JSON.stringify({
      message,
    }) 
  })

  const data: {id: string} = await response.json()


  return { messageId: data.id }

}