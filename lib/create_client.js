var tar = require('tar'),
    fstream = require('fstream'),
    path = require('path'),
    npm = require('enpeem');

function getTarBallStream () {
    var clientPath = path.parse(require.resolve('nitrodata_client')).dir;

    var packer = tar.Pack({ noProprietary: true });
    var stream = fstream.Reader({ path: clientPath,
                                type: "Directory" });

    return stream.pipe(packer);
}

// the client has moved to another repo, download it off of npm
function installClient (cb) {
   npm.install({
       'dependencies': ['nitrodata_client'],
//       'ignoreScripts': true,
       loglevel: 'silent'
   }, cb);
}

module.exports = {
    getTarBallStream: getTarBallStream,
    installClient: installClient
};
