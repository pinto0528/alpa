import { io } from 'socket.io-client'

export default function useWebSocket() {
  const socket = io({ transports: ['websocket', 'polling'] })
  return socket
}
