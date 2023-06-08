const db = require("../config/db");
class group_muscle_subModel {
    static add_All_Exercise_id_to_the_WorkoutID(workout_id,Exercise_id)
    {
        return new Promise((resolve) => {
          db.query(
            "INSERT INTO `group_muscle_sub`( `workout_id`, `Exercise_id`) VALUES (? , ?)",
            [
                workout_id,Exercise_id
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
module.exports = group_muscle_subModel;