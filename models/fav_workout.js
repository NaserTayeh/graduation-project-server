const db = require("../config/db");
class FavWorkoutModel {
  static async RemoveFavWorkout(trainee_id, workout_id) {
    return new Promise((resolve) => {
      db.query(
        "delete from fav_workout where trainee_id=? and workout_id=?",
        [trainee_id, workout_id],
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

  static async addNewItem(trainee_id, workout_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `fav_workout`(`trainee_id`, `workout_id`) VALUES (?,? )",
        [trainee_id, workout_id],
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
  static async GetFavWorkout(owner_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `fav_workout` where trainee_id = ? ",
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
module.exports = FavWorkoutModel;
