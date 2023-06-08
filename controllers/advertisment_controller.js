const advertismentModel = require("../models/advertisment");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = req.params.folderName;

    cb(null, "./Upload/" + folderName);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

class Advertisment {
  static async getDate(req, res) {
    var email = req.body.email;
    var result = await advertismentModel.getData();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async addNewItem(req, res) {
    upload.single("photo")(req, res, async function (err) {
      const title = req.body.title;
      const describtion = req.body.describtion;
      const date = req.body.date;

      const folderName = req.params.folderName;
      const photo = `/Upload/${folderName}/${req.file.filename}`;
      var result = await advertismentModel.addNewItem(
        title,
        photo,
        describtion,
        date
      );
      if (result == true) {
        res.send({
          message: "add successfully",
          status: 200,
        });
      } else {
        res.send({
          message: "add failed",
          status: 400,
        });
      }
      if (err) {
        console.log(err);
        return res.status(400).json({ error: "Error uploading file" });
      }
      if (!req.file) {
        return res.status(400).json({ error: "No file found in request" });
      }
    });
  }
}
module.exports = Advertisment;
