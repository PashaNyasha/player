const fs = require("fs");
const path = require("path");
const {albumStorage} = require("./sound-storage");
const {SERVER_PORT} = require("../constants/server-port");

module.exports.makeAlbum = () => {
  const dirPath = path.join(__dirname, "../../server/disc/sonic-mania/sound/");
  const filesNames = fs.readdirSync(dirPath);
  const urls = albumStorage();

  const trackList = filesNames.map((fileName, index) => {
    const filePath = path.join(dirPath, "/", fileName);
    const {size} = fs.statSync(filePath);
    const [name, extension] = fileName.split(".");

    let url = `http://localhost:${SERVER_PORT}/album/sound/${urls[index].route}`;


    return {
      name,
      extension,
      size,
      url,
      id: index,
    };
  });

  return {
    trackList,
    cover: 'http://localhost:8082/static/sonic-mania/cover.png',
    background: 'http://localhost:8082/static/sonic-mania/bg.png',
  };
};
