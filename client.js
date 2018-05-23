const ipc = require('node-ipc');

const onConnect = () => {
    ipc.log('connected')
    ipc.of.ipc_node_socket.emit('message', 'my message');
};

ipc.connectTo('ipc_node_socket','/tmp/ipc_node_socket', onConnect);
