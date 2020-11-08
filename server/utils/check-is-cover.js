module.exports.checkIsCover = (fileName) => {
  const [name] = fileName.split(".");
  return name === "cover";
};
