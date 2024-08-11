interface GetRoomMessagesRequest {
  roomId: string
}

export interface GetRoomsMessagesResponse {
  messages: {
    id: string;
    text: string;
    amountOfReactions: number;
    answered: boolean;
  }
}

/**
 * Retrieves a list of messages for a given room.
 *
 * @param {GetRoomMessagesRequest} roomId - The ID of the room to retrieve messages for.
 * @return {Object} An object containing a list of messages for the room.
 */
export async function GetRoomMessages({roomId} : GetRoomMessagesRequest): Promise<GetRoomsMessagesResponse> {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages`)

  const data: Array<{
    id: string
    room_id: string
    message: string
    reaction_count: number
    answered: boolean
  }> = await response.json()


  return { 
    messages: data.map(item => {
      return {
        id: item.id,
        text: item.message,
        amountOfReactions: item.reaction_count,
        answered: item.answered
      }
    })
  }
}