const { log } = require("console");
const subscribtion_module = require("../models/subscribtion");
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

class cart {
  static async addNewItem(req, res) {
    const owner_id = req.body.owner_id;
    const price = req.body.price;
    const period = req.body.period;
    const start_data = req.body.start_data;
    const end_data = req.body.end_data;

    var result = await subscribtion_module.addNewItem(
      owner_id,
      price,
      period,
      start_data,
      end_data
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
  }
  static async getprofit(req, res) {
    var result = await subscribtion_module.getprofit();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
}
module.exports = cart;
