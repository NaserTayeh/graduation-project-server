const group_muscleModel = require("../models/group_muscle");
class group_muscleController {
  static async add_Muscle_Group_For_Day(req, res) {
    const day_id = req.body.day_id;
    const target_muscle = req.body.target_muscle;
    var result = await group_muscleModel.add_Muscle_Group_For_Day(
      target_muscle,
      day_id
    );
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
  static async Get_All_booked_data(req, res) {
    var result = await group_muscleModel.Get_All_booked_data();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async GetWorkout_ID_Based_On_day_id(req, res) {
    const day_id = req.body.day_id;
    var result = await group_muscleModel.GetWorkout_ID_Based_On_day_id(day_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async Check_day_booked(req, res) {
    const day_id = req.body.day_id;
    var result = await group_muscleModel.Check_day_booked(day_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
}
module.exports = group_muscleController;
