const db = require("../config/db");
class food_countingModel {
  static remove_food_index(id) {
    return new Promise((resolve) => {
      db.query(
        "DELETE FROM `food_counting` WHERE `index` = ?;",
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
  static count_eaten(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM food_counting WHERE Trainee_id=?",
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

  static remove_food(Trainee_id, food_id) {
    return new Promise((resolve) => {
      db.query(
        "delete from food_counting where food_id=? and Trainee_id=?",
        [food_id, Trainee_id],
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

  static get_food(id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT *  FROM `food_counting` WHERE Trainee_id = ? ",
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
  static get_specific_food(id, food_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT *  FROM `food_counting` WHERE Trainee_id = ? and food_id = ? ",
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
  static get_original_amount(id, food_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT `Quantity`  FROM `food_counting` WHERE Trainee_id = ? and food_id = ?",
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
        "UPDATE `food_counting` SET `Quantity` = ? WHERE `Trainee_id` = ? and `food_id` = ?",
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

  static addfood(food_name, photo, Trainee_id, Quantity, Calories, food_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `food_counting`(`food_name`, `photo`, `Trainee_id`, `Quantity`, `Calories`,`food_id`) VALUES (?,?,?,?,?,?)",
        [food_name, photo, Trainee_id, Quantity, Calories, food_id],
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
module.exports = food_countingModel;
