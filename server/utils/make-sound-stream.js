const fs = require('fs');

module.exports.makeSoundStream = ({ fileRange, url, res }) => {
    const {size} = fs.statSync(url);
    const bytesStart = fileRange[0] ? Number(fileRange[0]) : 0;
    const bytesEnd = fileRange[1] ? Number(fileRange[1]) : size;

    const chunkSize = bytesEnd - bytesStart;

    if (chunkSize === size) {
      res.writeHead(200, {
        "Accept-Ranges": "bytes",
        "Content-Type": "audio/mpeg",
        "Content-Length": size,
      });
    } else {
      res.writeHead(206, {
        "Content-Range": `bytes ${bytesStart}-${bytesEnd}/${size}`,
        "Accept-Ranges": "bytes",
        "Content-Type": "audio/mpeg",
        "Content-Length": size,
      });
    }
}