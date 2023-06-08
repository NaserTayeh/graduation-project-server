const db = require("../config/db");
class Subscription {
  static async addNewItem(owner_id, price, period, start_data, end_data) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `subscribtions`(`owner_id`, `price`, `period`, `start_date`, `end_date`) VALUES (?,?,?,?,?)",
        [owner_id, price, period, start_data, end_data],
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
        " SELECT `price` FROM `subscribtions` WHERE 1",
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
}

module.exports = Subscription;
