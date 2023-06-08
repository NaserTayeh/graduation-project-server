const db = require("../config/db");
class Checkout {
  static async addNewItem(
    item_id,
    quantity,
    total_price,
    owner_id,
    owner_name,
    item_name,
    date
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `checkout`(`item_id`, `quantity`, `total_price`, `owner_id`, `owner_name`, `item_name`, `date`) VALUES (?,?,?,?,?,?,?)",
        [item_id, quantity, total_price, owner_id, owner_name, item_name, date],
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
  static async getprofit() {
    return new Promise((resolve) => {
      db.query(
        " SELECT `total_price` FROM `checkout` WHERE 1",
        [],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          resolve(err);
        }
      );
    });
  }
  static async getAllCheckout() {
    return new Promise((resolve) => {
      db.query(" SELECT * FROM `checkout` WHERE 1", [], (err, res) => {
        if (!err) {
          resolve(res);
        }
        resolve(err);
      });
    });
  }

  //   static async getQuantity(supplement_id, owner_id, quantity) {
  //     return new Promise((resolve) => {
  //       db.query(
  //         "SELECT quantity FROM `checkout` WHERE `supplement_id` = ? and owner_id = ?",
  //         [supplement_id, owner_id],
  //         (err, res) => {
  //           console.log(res);
  //           console.log(!err);
  //           if (!err) {
  //             resolve(res);
  //           } else {
  //             console.log(err);
  //             resolve(err);
  //           }
  //         }
  //       );
  //     });
  //   }
  //   static async deleteItem(id, owner_id) {
  //     return new Promise((resolve) => {
  //       console.log(id);
  //       db.query(
  //         "delete from checkout where supplement_id=? and owner_id=?",
  //         [id, owner_id],
  //         (err, result) => {
  //           if (err) {
  //             resolve({
  //               flag: "Erorr",
  //               message: "Erorr in delete request",
  //             });
  //           } else if (result.affectedRows > 0) {
  //             resolve({
  //               flag: "yes",
  //               message: "delete successfully",
  //             });
  //           } else {
  //             resolve({
  //               flag: "no",
  //               message: "this id is not true",
  //             });
  //           }
  //         }
  //       );
  //     });
  //   }
  //   static async getcheckoutItems(owner_id) {
  //     return new Promise((resolve) => {
  //       db.query(
  //         "SELECT  *  FROM `checkout` where owner_id = ? ",
  //         [owner_id],
  //         (err, result) => {
  //           if (!err) {
  //             resolve(result);
  //           } else {
  //             resolve({
  //               message: err,
  //             });
  //           }
  //         }
  //       );
  //     });
  //   }
}

module.exports = Checkout;
