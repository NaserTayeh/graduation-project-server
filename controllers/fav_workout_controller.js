const FavWorkoutModel = require("../models/fav_workout");
class FavWorkoutController {
  static async RemoveFavWorkout(req, res) {
    const trainee_id = req.body.trainee_id;
    const workout_id = req.body.workout_id;
    var result = await FavWorkoutModel.RemoveFavWorkout(trainee_id, workout_id);
    if (result.flag == "yes") {
      res.send({
        message: "delete successfully",
        status: 200,
      });
    } else if (result.flag == "no") {
      res.send({
        message: "failed to delete id not true ",
        status: 400,
      });
    }
  }

  static async addNewItem(req, res) {
    const trainee_id = req.body.trainee_id;
    const workout_id = req.body.workout_id;
    var result = await FavWorkoutModel.addNewItem(trainee_id, workout_id);
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

  static async GetFavWorkout(req, res) {
    const trainee_id = req.body.trainee_id;
    var result = await FavWorkoutModel.GetFavWorkout(trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
}

module.exports = FavWorkoutController;
