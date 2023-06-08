const db = require("../config/db");
class NotificationModel {
  static async sendNotifcation(content, destination_id, date) {
    return new Promise((resolve) => {
      db.query(
        "insert into notification (content, destination_id,date) values(?,?,?)",
        [content, destination_id, date],
        (err, res) => {
          if (!err) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static async deleteNotifcation(not_id, destination_id) {
    return new Promise((resolve) => {
      db.query(
        "DELETE FROM `notification` WHERE not_id =? and destination_id =?",
        [not_id, destination_id],
        (err, res) => {
          if (!err) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static async getNotifcation(destination_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM `notification` WHERE destination_id= ?  ",
        [destination_id],
        (err, res) => {
          if (!err) {
            resolve(res);
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

module.exports = NotificationModel;
