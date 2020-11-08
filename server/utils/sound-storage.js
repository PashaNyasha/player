const fs = require("fs");
const path = require("path");

module.exports.albumStorage = () => {
  const dirPath = path.join(__dirname, '../disc');
  const disc = fs.readdirSync(dirPath);

  return disc.map((route) => {
    const lowerName = route.toLocaleLowerCase();
    const withoutSpace = lowerName.replace(/ /g, '-');
    const withoutBrackets = withoutSpace.replace(/[()]/g, '');
    const newRoute = `/disc/${withoutBrackets}`


    const url = path.join(dirPath, '../disc', route);
    
    return {
      route: newRoute,
      url,
    };
  });
};
