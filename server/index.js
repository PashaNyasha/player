const express = require("express");
const fs = require("fs");
const cors = require("cors");
const {makeAlbum} = require("./utils/make-album");
const {albumStorage} = require("./utils/sound-storage");
const { SERVER_PORT } = require("./constants/server-port");

const app = express();

const router = express.Router();

const soundStorage = albumStorage();

app.use(cors());

app.get("/album", (req, res) => {
  const album = makeAlbum();
  setTimeout(() => res.json({album}), 3000)
});

soundStorage.forEach(({route, url}) => {
  router.get(route, (req, res) => {
    fs.createReadStream(url).pipe(res);
  });
});

app.use("/album", router);

app.listen(SERVER_PORT, () => {
  console.log(`Server started on port ${SERVER_PORT}`);
});
