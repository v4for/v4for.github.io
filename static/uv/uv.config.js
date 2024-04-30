let main = 'https://bare.benrogo.net';

async function isURLReachable(url) {
    try {
        const response = await fetch(url);
        return response.ok;
    } catch (error) {
        return false;
    }
}

isURLReachable('https://bare.benrogo.net')
    .then(online => {
        if (online) {
            console.log('Primary URL is reachable, using it.');
        } else {
            console.log('Primary URL is not reachable, using backup URL.');
            main = 'https://history.about.dansted.org/o/';
        }
    })
    .catch(error => {
        console.error('Error occurred while checking URL:', error);
        console.log('Using backup URL.');
    });

self.__uv$config = {
    prefix: '/static/tiw/',
    bare: main,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
