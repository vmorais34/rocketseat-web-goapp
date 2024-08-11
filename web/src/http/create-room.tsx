interface CreateRoomRequest {
  theme: string
}

/**
 * Creates a new room with the specified theme.
 *
 * @param {CreateRoomRequest} params - The parameters for creating the room.
 * @param {string} params.theme - The theme of the room.
 * @return {Promise<{roomId: string}>} - A promise that resolves to an object containing the ID of the created room.
 */
export async function createRoom({theme} : CreateRoomRequest){
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms`, {
    method: 'POST',
    body: JSON.stringify({
      theme,
    }) 
  })

  const data: {id: string} = await response.json()


  return { roomId: data.id }

}