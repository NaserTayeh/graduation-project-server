const db = require("../config/db");
class exersies_countingModel {
  static remove_exersies_index(id) {
    return new Promise((resolve) => {
      db.query(
        "DELETE FROM `exersies_counting` WHERE `index` = ?;",
        [id],
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
  static get_burn_cal(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT Calories FROM exersies_counting WHERE Trainee_id = ? ",
        [Trainee_id],
        (err, res) => {
          if (!err) {
            var i = 0,
              sum = 0;
            for (i = 0; i < res.length; i++) {
              sum = sum + res[i]["Calories"];
            }
            resolve({ sum });
          } else {
            console.log(err);
            resolve(err);
          }
        }
      );
    });
  }
  static count_excersise(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM exersies_counting WHERE Trainee_id = ?",
        [Trainee_id],
        (err, result) => {
          if (!err) {
            const count = result.length;
            resolve([{ count: count }]);
          }
          resolve(err);
        }
      );
    });
  }
  static getExcersiseTime(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT SUM(`time`) as time   FROM exersies_counting WHERE Trainee_id = ?",
        [Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static get_specific_excercise(id, exersies_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT *  FROM `exersies_counting` WHERE Trainee_id = ? and exersies_id = ? ",
        [id, exersies_id],
        (err, res) => {
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
  static get_original_amount(id, food_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT `Quantity`  FROM `exersies_counting` WHERE Trainee_id = ? and exersies_id = ?",
        [id, food_id],
        (err, res) => {
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
  static change_amount(total, id, food_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE `exersies_counting` SET `Quantity` = ? WHERE `Trainee_id` = ? and `exersies_id` = ?",
        [total, id, food_id],
        (err, res) => {
          if (!err) {
            if (res.affectedRows > 0) {
              resolve(true);
            } else resolve(false);
          } else {
            console.log(err);
            resolve(err);
          }
        }
      );
    });
  }

  static remove_exersies(Trainee_id, exersies_id) {
    return new Promise((resolve) => {
      db.query(
        "delete from exersies_counting where exersies_id=? and Trainee_id=?",
        [exersies_id, Trainee_id],
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
  static get_exersies(id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT *  FROM `exersies_counting` WHERE Trainee_id = ? ",
        [id],
        (err, res) => {
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

  static addexersies(
    exersies_name,
    photo,
    Trainee_id,
    Quantity,
    Calories,
    exersies_id,
    time
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `exersies_counting`(`exersies_name`, `photo`, `Trainee_id`, `Quantity`, `Calories`, `exersies_id`,`time`) VALUES (?,?,?,?,?,?,?)",
        [
          exersies_name,
          photo,
          Trainee_id,
          Quantity,
          Calories,
          exersies_id,
          time,
        ],
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
module.exports = exersies_countingModel;
