const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const {makeAlbum} = require("./utils/make-album");
const {albumStorage} = require("./utils/sound-storage");
const {SERVER_PORT} = require("./constants/server-port");
const {makeSoundStream} = require("./utils/make-sound-stream");

const app = express();

const router = express.Router();

const soundStorage = albumStorage();

app.use(cors());

app.get("/album", (req, res) => {
  const album = makeAlbum();
  setTimeout(() => res.json({album}), 0);
});

soundStorage.forEach(({route, url}) => {
  router.get(`/sound/${route}`, (req, res) => {
    const stream = fs.createReadStream(url);
    const {range} = req.headers;
    const fileRange = range ? range.replace("bytes=", "").split("-") : [];

    stream.on("open", () => makeSoundStream({fileRange, url, res}));
    stream.pipe(res);
  });
});

app.use("/album", router);

app.listen(SERVER_PORT, () => {
  console.log(`Server started on port ${SERVER_PORT}`);
});

const pathToImages = path.join(__dirname, './disc/sonic-mania/images');

app.use('/static/sonic-mania', express.static(pathToImages));
