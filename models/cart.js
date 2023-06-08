const db = require("../config/db");
class cart {
  static async addNewItem(
    product_name,
    product_cat,
    price,
    photo,
    supplement_id,
    owner_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `cart`(`product_name`, `product_cat`, `price`, `photo`, `supplement_id`, `owner_id`) VALUES (?,?,?,?,?,?)",
        [product_name, product_cat, price, photo, supplement_id, owner_id],
        (err, res) => {
          if (!err) {
            resolve(true);
          } else {
            console.log(err);
            resolve(false);
          }
        }
      );
    });
  }
  static async updateQuantity(supplement_id, owner_id, quantity) {
    console.log(quantity);
    console.log(supplement_id);
    console.log(owner_id);
    return new Promise((resolve) => {
      db.query(
        "UPDATE `cart` SET `quantity`=? WHERE `supplement_id` = ? and `owner_id`= ?;",
        [quantity, supplement_id, owner_id],
        (err, res) => {
          console.log(res);
          console.log(!err);
          if (!err) {
            resolve(true);
          } else {
            console.log(err);
            resolve(false);
          }
        }
      );
    });
  }
  static async getQuantity(supplement_id, owner_id, quantity) {
    return new Promise((resolve) => {
      db.query(
        "SELECT quantity FROM `cart` WHERE `supplement_id` = ? and owner_id = ?",
        [supplement_id, owner_id],
        (err, res) => {
          console.log(res);
          console.log(!err);
          if (!err) {
            resolve(res);
          } else {
            console.log(err);
            resolve(err);
          }
        }
      );
    });
  }
  static async deleteItem(id, owner_id) {
    return new Promise((resolve) => {
      console.log(id);
      db.query(
        "delete from cart where supplement_id=? and owner_id=?",
        [id, owner_id],
        (err, result) => {
          if (err) {
            resolve({
              flag: "Erorr",
              message: "Erorr in delete request",
            });
          } else if (result.affectedRows > 0) {
            resolve({
              flag: "yes",
              message: "delete successfully",
            });
          } else {
            resolve({
              flag: "no",
              message: "this id is not true",
            });
          }
        }
      );
    });
  }
  static async deleteAllItem(owner_id) {
    return new Promise((resolve) => {
      db.query(
        "delete from cart where  owner_id=?",
        [owner_id],
        (err, result) => {
          if (err) {
            resolve({
              flag: "Erorr",
              message: "Erorr in delete request",
            });
          } else if (result.affectedRows > 0) {
            resolve({
              flag: "yes",
              message: "delete successfully",
            });
          } else {
            resolve({
              flag: "no",
              message: "this id is not true",
            });
          }
        }
      );
    });
  }
  static async getCartItems(owner_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `cart` where owner_id = ? ",
        [owner_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            resolve({
              message: err,
            });
          }
        }
      );
    });
  }
}

module.exports = cart;
