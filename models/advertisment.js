const db = require("../config/db");
class AdvertismentModel {
  static getData() {
    return new Promise((resolve) => {
      //`select Email , Password from person where Email = ${Email} AND Password = ${Password}`
      db.query("SELECT  *   FROM `advertisment` WHERE 1", [], (err, result) => {
        if (!err) {
          resolve(result);
        }

        resolve(err);
      });
    });
  }

  static async addNewItem(title, photo, describtion, date) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `advertisment`(`title`, `describtion`, `photo`, `date`)  VALUES (?,?,?,?)",
        [title, describtion, photo, date],
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
}
module.exports = AdvertismentModel;
