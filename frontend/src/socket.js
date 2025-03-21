import {io} from 'socket.io-client';

export const socketInit = async () => {
   
    const options = {
        forceNew : true,
        reconnectionAttempts: Infinity,
        timeout: 10000,
        transports: ['websocket'],
    };

    return io(import.meta.env.VITE_BACKEND_URL, options);

};