const group_muscle_subModel = require("../models/group_muscle_sub");
class group_muscle_subController {
    static async add_All_Exercise_id_to_the_WorkoutID(req, res){
        const workout_id = req.body.workout_id;
        const Exercise_id = req.body.Exercise_id;
        var result = await group_muscle_subModel.add_All_Exercise_id_to_the_WorkoutID(workout_id,Exercise_id);
        if (result == true) {
            res.send({
              message: "add successfully",
              status: 200,
            });
          } else {
            res.send({
              message: "add failed",
              status: 400,
            });
          }
    }
}
module.exports = group_muscle_subController