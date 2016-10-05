var tar = require('tar'),
    fstream = require('fstream'),
    path = require('path'),
    clientPath = path.parse(require.resolve('nitrodata_client')).dir;


function getTarBallStream () {
    var packer = tar.Pack({ noProprietary: true });

    var stream = fstream.Reader({ path: clientPath,
                                type: "Directory" });
    return stream.pipe(packer);
}

module.exports = {
    getTarBallStream: getTarBallStream,
};
