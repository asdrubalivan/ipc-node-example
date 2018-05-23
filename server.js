const ipc = require('node-ipc');

const onStart = () => {
    ipc.server.on('message', (data, socket) => {
        const myData = JSON.stringify(data);
        ipc.log(`We have a message ${myData}`);
        ipc.server.emit(socket, 'message', `We received ${myData}`);
    })
    ipc.server.on('socket.disconnected', (socket, destroyedID) => {
        ipc.log(`Client ${destroyedID} disconnected`)
    })
};

ipc.serve('/tmp/ipc_node_socket', onStart);

ipc.server.start();
