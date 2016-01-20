function pong(num, buffer) {
    if (buffer.byteLength === 0) {
        console.error('Buffer not properly received');
    }

    console.log('Worker now sending '+num+'-th pong');
    self.postMessage({
        num: num,
        command: 'ping',
        buffer: buffer
    }, [buffer]);

    if (buffer.byteLength > 0) {
        console.error('Buffer not properly transferred');
    }
}

self.onmessage = function(event) {
    console.log('Worker received '+event.data.num+'-th ping');
    pong(event.data.num, event.data.buffer);
};

console.log('Worker started');