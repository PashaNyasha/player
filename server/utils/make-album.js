const fs = require("fs");
const path = require("path");
const {albumStorage} = require("./sound-storage");
const { checkIsCover } = require('./check-is-cover');

module.exports.makeAlbum = () => {
  const dirPath = path.join(__dirname, "../../server/disc");
  const filesNames = fs.readdirSync(dirPath);
  const urls = albumStorage();

  const foundCover = filesNames.find((fileName) => checkIsCover(fileName));
  const cover = `/album/disc/${foundCover}`;

  const withoutCover = filesNames.filter((fileName) => {
    const isCover = checkIsCover(fileName)

    return !isCover;
  });

  const trackList = withoutCover.map((fileName, index) => {
    const filePath = path.join(dirPath, "/", fileName);

    const {size} = fs.statSync(filePath);

    const [name, extension] = fileName.split(".");

    return {
      name,
      extension,
      size,
      url: urls[index].route,
      id: index,
    };
  });

  return {
    trackList,
    cover,
  }
};
