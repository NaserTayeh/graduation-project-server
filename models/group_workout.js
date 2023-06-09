const db = require("../config/db");
class group_workout {
  static async getWorkoutCat(categorie_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `group_workout` WHERE `categorie` = ? ",
        [categorie_id],
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
  static async Get_All_booked_data_exercise() {
    return new Promise((resolve) => {
      db.query(
        "SELECT week_days.trainee_id , group_muscle.target_muscle ,week_days.day_name, group_muscle.day_id ,group_muscle_sub.Exercise_id ," +
          "group_workout.excersie_name,group_workout.Cal,group_workout.Fav,group_workout.workout_level,group_workout.Reps," +
          "group_workout.Round,group_workout.Time,group_workout.Tutorial,group_workout.categorie,group_workout.workout_img FROM" +
          " group_muscle JOIN week_days ON group_muscle.day_id = week_days.day_id JOIN group_muscle_sub ON group_muscle_sub.workout_id = group_muscle.workout_id" +
          " JOIN group_workout ON group_workout.exercise_id = group_muscle_sub.Exercise_id;",
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
  static async getAllWorkout() {
    return new Promise((resolve) => {
      db.query("SELECT  *  FROM `group_workout`", [], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          resolve({
            message: err,
          });
        }
      });
    });
  }

  static async updateWorkoutwithoutphoto(
    exercise_id,
    excersie_name,
    Cal,
    Fav,
    workout_level,
    Reps,
    Round,
    Time,
    Tutorial,
    Video,
    categorie
  ) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE `group_workout` SET `excersie_name`= ?,`Cal`= ?,`Fav`=?,`workout_level`=?,`Reps`=?,`Round`=?,`Time`=?,`Tutorial`=?,`Video`=?,`categorie`=? WHERE `exercise_id`=?",
        [
          excersie_name,
          Cal,
          Fav,
          workout_level,
          Reps,
          Round,
          Time,
          Tutorial,
          Video,
          categorie,
          exercise_id,
        ],
        (err, res) => {
          if (!err) {
            if (res.affectedRows > 0) {
              resolve(true);
            } else {
              console.log(res);
              resolve(false);
            }
          } else {
            console.log(err);
            resolve(false);
          }
        }
      );
    });
  }
  static async UpdateWorkout(
    exercise_id,
    excersie_name,
    Cal,
    Fav,
    workout_level,
    Reps,
    Round,
    Time,
    Tutorial,
    Video,
    categorie,
    filePath
  ) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE `group_workout` SET `excersie_name`= ?,`Cal`= ?,`Fav`=?,`workout_level`=?,`Reps`=?,`Round`=?,`Time`=?,`Tutorial`=?,`Video`=?,`workout_img`=?,`categorie`=? WHERE `exercise_id`=?",
        [
          excersie_name,
          Cal,
          Fav,
          workout_level,
          Reps,
          Round,
          Time,
          Tutorial,
          Video,
          filePath,
          categorie,
          exercise_id,
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
  static async getWorkoutData(exercise_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT `excersie_name`, `Cal`, `Fav`, `workout_level`, `Reps`, `Round`, `Time`, `Tutorial`, `Video`, `workout_img`, `categorie` FROM `group_workout` WHERE `exercise_id`= ?",
        [exercise_id],
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

  static async deleteWorkout(id) {
    return new Promise((resolve) => {
      db.query(
        "delete from group_workout where exercise_id=?",
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

  static async save_workout_photo(filePath, exercise_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE group_workout SET workout_img = ? WHERE exercise_id = ? ",
        [filePath, exercise_id],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve({
                message: "Added",
              });
            }
            resolve({
              message: "Not Added",
            });
          } else {
            resolve({
              message: err,
            });
          }
        }
      );
    });
  }
  static async addNewWorkout(
    excersie_name,
    Cal,
    Fav,
    workout_level,
    Reps,
    Round,
    Time,
    Tutorial,
    Video,
    categorie,
    filePath
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `group_workout`(  `excersie_name`, `Cal`, `Fav`, `workout_level`, `Reps`, `Round`, `Time`, `Tutorial`, `Video`,   `categorie` , `workout_img`) VALUES (?,?,?,?,?,  ?,?,?,?,? , ?)",
        [
          excersie_name,
          Cal,
          Fav,
          workout_level,
          Reps,
          Round,
          Time,
          Tutorial,
          Video,
          categorie,
          filePath,
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
module.exports = group_workout;
