const { log } = require("console");
const cart_module = require("../models/cart");
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
    const product_name = req.body.product_name;
    const product_cat = req.body.product_cat;
    const price = req.body.price;
    const supplement_id = req.body.supplement_id;
    const owner_id = req.body.owner_id;
    const photo = req.body.photo;

    var result = await cart_module.addNewItem(
      product_name,
      product_cat,
      price,
      photo,
      supplement_id,
      owner_id
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
  static async updateQuantity(req, res) {
    const quantity = req.body.quantity;
    const supplement_id = req.body.supplement_id;
    const owner_id = req.body.owner_id;

    var result = await cart_module.updateQuantity(
      supplement_id,
      owner_id,
      quantity
    );
    if (result == true) {
      res.send({
        message: "updated successfully",
        status: 200,
      });
    } else {
      res.send({
        message: "update failed",
        status: 400,
      });
    }
  }
  static async getQuantity(req, res) {
    const supplement_id = req.body.supplement_id;
    const owner_id = req.body.owner_id;

    var result = await cart_module.getQuantity(supplement_id, owner_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "no quantity",
        status: 400,
      });
    }
  }
  static async deleteItem(req, res) {
    const id = req.body.supplement_id;
    const owner_id = req.body.owner_id;
    var result = await cart_module.deleteItem(id, owner_id);
    if (result.flag == "yes") {
      res.send({
        message: "delete successfully",
        status: 200,
      });
    } else if (result.flag == "no") {
      res.send({
        message: "failed to delete id not true ",
        status: 400,
      });
    }
  }
  static async deleteAllItem(req, res) {
    const owner_id = req.body.owner_id;
    var result = await cart_module.deleteAllItem(owner_id);
    if (result.flag == "yes") {
      res.send({
        message: "delete successfully",
        status: 200,
      });
    } else if (result.flag == "no") {
      res.send({
        message: "failed to delete id not true ",
        status: 400,
      });
    }
  }
  static async getCartItems(req, res) {
    const id = req.body.owner_id;

    var result = await cart_module.getCartItems(id);
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
