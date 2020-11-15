const fs = require("fs");
const path = require("path");

module.exports.albumStorage = () => {
  const dirPath = path.join(__dirname, "../disc/sonic-mania/sound");
  const disc = fs.readdirSync(dirPath);

  return disc.map((route) => {
    const lowerName = route.toLocaleLowerCase();
    const withoutSpace = lowerName.replace(/ /g, "-");
    const withoutBrackets = withoutSpace.replace(/[()]/g, "");
    const url = path.join(dirPath, route);

    return {
      route: withoutBrackets,
      url,
    };
  });
};
