const food_countingModel = require("../models/food_counting");
class food_counting_Controller {
  static async remove_food_index(req, res) {
    const index = req.body.index;
    var result = await food_countingModel.remove_food_index(index);
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

  static async remove_food(req, res) {
    const Trainee_id = req.body.Trainee_id;
    const food_id = req.body.food_id;
    var result = await food_countingModel.remove_food(Trainee_id, food_id);
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
  static async count_eaten(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await food_countingModel.count_eaten(Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send([{ message: "empty" }]);
    }
  }

  static async get_food(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await food_countingModel.get_food(Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "failed",
        status: 400,
      });
    }
  }
  static async get_specific_food(req, res) {
    const Trainee_id = req.body.Trainee_id;
    const food_id = req.body.food_id;
    var result = await food_countingModel.get_specific_food(
      Trainee_id,
      food_id
    );
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "failed",
        status: 400,
      });
    }
  }

  static async increment_amount(req, res) {
    const amount = req.body.amount;
    const id = req.body.id;
    const food_id = req.body.food_id;
    var original_amount = await food_countingModel.get_original_amount(
      id,
      food_id
    );
    console.log(original_amount[0]["Quantity"]);
    var total = original_amount[0]["Quantity"] + amount;
    var result = await food_countingModel.change_amount(total, id, food_id);
    if (result == true) {
      res.send({
        message: "incremented successfully",
        status: 200,
      });
    } else {
      res.send({
        message: "failed",
        status: 400,
      });
    }
  }
  static async dec_amount(req, res) {
    const amount = req.body.amount;
    const id = req.body.id;
    const food_id = req.body.food_id;
    var original_amount = await food_countingModel.get_original_amount(
      id,
      food_id
    );
    console.log(original_amount[0]["Quantity"]);
    var total;
    if (original_amount[0]["Quantity"] < amount) {
      total = 0;
    } else {
      total = original_amount[0]["Quantity"] - amount;
    }
    var result = await food_countingModel.change_amount(total, id, food_id);
    if (result == true) {
      res.send({
        message: "dec successfully",
        status: 200,
      });
    } else {
      res.send({
        message: "failed",
        status: 400,
      });
    }
  }

  static async addfood(req, res) {
    const food_name = req.body.food_name;
    const photo = req.body.photo;
    const Trainee_id = req.body.Trainee_id;
    const Quantity = req.body.Quantity;
    const Calories = req.body.Calories;
    const food_id = req.body.food_id;
    var result = await food_countingModel.addfood(
      food_name,
      photo,
      Trainee_id,
      Quantity,
      Calories,
      food_id
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
}

module.exports = food_counting_Controller;
