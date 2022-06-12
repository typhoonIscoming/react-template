const path = require('path');
const os = require('os');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

function getIPAdress() {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

module.exports = {
    getIP: getIPAdress,
    dev: {
        assetsPublicPath: './',
        errorOverlay: true,
        autoOpenBrowser: true,
        host: '0.0.0.0',
        port: '8080',
        proxyTable: {},
        poll: false,
    },
    build: {
        assetsRoot: resolve('dist'),
        assetsPublicPath: './',
        assetsSubDirectory: 'static',
    },
}

