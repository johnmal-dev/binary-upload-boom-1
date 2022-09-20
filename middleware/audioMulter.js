<<<<<<< HEAD
const audioMulter = require("multer");
const path = require("path");

module.exports = audioMulter({
  storage: audioMulter.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (file.mimetype !== "audio/mp3" && file.mimetype !== "audio/mpeg" && file.mimetype !== "audio/wav" && file.mimetype !== "audio/mp4") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
=======
const audioMulter = require("multer");
const path = require("path");

module.exports = audioMulter({
  storage: audioMulter.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (file.mimetype !== "audio/mp3" && file.mimetype !== "audio/mpeg" && file.mimetype !== "audio/wav" && file.mimetype !== "audio/mp4") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
>>>>>>> ac686934591dda022baf4734610461a6d06a7d02
