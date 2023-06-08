const { log } = require("console");
const checkout_module = require("../models/checkout");
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
    const item_id = req.body.item_id;
    const quantity = req.body.quantity;
    const total_price = req.body.total_price;
    const owner_id = req.body.owner_id;
    const owner_name = req.body.owner_name;
    const item_name = req.body.item_name;
    const date = req.body.date;

    var result = await checkout_module.addNewItem(
      item_id,
      quantity,
      total_price,
      owner_id,
      owner_name,
      item_name,
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
  }
  static async getprofit(req, res) {
    var result = await checkout_module.getprofit();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async getAllCheckout(req, res) {
    var result = await checkout_module.getAllCheckout();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  //   static async updateQuantity(req, res) {
  //     const quantity = req.body.quantity;
  //     const supplement_id = req.body.supplement_id;
  //     const owner_id = req.body.owner_id;

  //     var result = await cart_module.updateQuantity(
  //       supplement_id,
  //       owner_id,
  //       quantity
  //     );
  //     if (result == true) {
  //       res.send({
  //         message: "updated successfully",
  //         status: 200,
  //       });
  //     } else {
  //       res.send({
  //         message: "update failed",
  //         status: 400,
  //       });
  //     }
  //   }
  //   static async getQuantity(req, res) {
  //     const supplement_id = req.body.supplement_id;
  //     const owner_id = req.body.owner_id;

  //     var result = await cart_module.getQuantity(supplement_id, owner_id);
  //     if (result) {
  //       res.send(result);
  //     } else {
  //       res.send({
  //         message: "no quantity",
  //         status: 400,
  //       });
  //     }
  //   }
  //   static async deleteItem(req, res) {
  //     const id = req.body.supplement_id;
  //     const owner_id = req.body.owner_id;
  //     var result = await cart_module.deleteItem(id, owner_id);
  //     if (result.flag == "yes") {
  //       res.send({
  //         message: "delete successfully",
  //         status: 200,
  //       });
  //     } else if (result.flag == "no") {
  //       res.send({
  //         message: "failed to delete id not true ",
  //         status: 400,
  //       });
  //     }
  //   }
  //   static async getCartItems(req, res) {
  //     const id = req.body.owner_id;

  //     var result = await cart_module.getCartItems(id);
  //     if (result) {
  //       res.send(result);
  //     } else {
  //       res.send({
  //         message: "empty",
  //       });
  //     }
  //   }
}
module.exports = cart;
