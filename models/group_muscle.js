const db = require("../config/db");
class group_muscleModel {
  static add_Muscle_Group_For_Day(target_muscle, day_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `group_muscle`( `target_muscle`, `day_id`) VALUES (? , ?)",
        [target_muscle, day_id],
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
  static Get_All_booked_data() {
    return new Promise((resolve) => {
      db.query(
        "  SELECT week_days.trainee_id, group_muscle.workout_id , group_muscle.target_muscle , week_days.day_name FROM group_muscle JOIN week_days ON group_muscle.day_id = week_days.day_id;",
        [],
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
  static GetWorkout_ID_Based_On_day_id(day_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `group_muscle` where day_id = ? ",
        [day_id],
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
  static Check_day_booked(day_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM group_muscle JOIN week_days ON group_muscle.day_id = ?;",
        [day_id],
        (err, result) => {
          if (!err) {
            if (result.length > 0) {
              resolve("true");
            } else {
              resolve("false");
            }
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
module.exports = group_muscleModel;
