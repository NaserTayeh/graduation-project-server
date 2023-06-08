const exersies_countingModel = require("../models/exersies_counting");
class exersies_counting_Controller {
  static async remove_exersies_index(req, res) {
    const index = req.body.index;
    var result = await exersies_countingModel.remove_exersies_index(index);
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
  static async count_excersise(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await exersies_countingModel.count_excersise(Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send([{ message: "empty" }]);
    }
  }
  static async remove_exersies(req, res) {
    const Trainee_id = req.body.Trainee_id;
    const exersies_id = req.body.exersies_id;
    var result = await exersies_countingModel.remove_exersies(
      Trainee_id,
      exersies_id
    );
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

  static async get_exersies(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await exersies_countingModel.get_exersies(Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "failed",
        status: 400,
      });
    }
  }
  static async get_burn_cal(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await exersies_countingModel.get_burn_cal(Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "failed",
        status: 400,
      });
    }
  }
  static async addexersies(req, res) {
    const exersies_name = req.body.exersies_name;
    const photo = req.body.photo;
    const Trainee_id = req.body.Trainee_id;
    const Quantity = req.body.Quantity;
    const Calories = req.body.Calories;
    const exersies_id = req.body.exersies_id;
    const time = req.body.time;
    var result = await exersies_countingModel.addexersies(
      exersies_name,
      photo,
      Trainee_id,
      Quantity,
      Calories,
      exersies_id,
      time
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
  static async increment_amount(req, res) {
    const amount = req.body.amount;
    const id = req.body.id;
    const exersies_id = req.body.exersies_id;
    var original_amount = await exersies_countingModel.get_original_amount(
      id,
      exersies_id
    );
    console.log(original_amount[0]["Quantity"]);
    var total = original_amount[0]["Quantity"] + amount;
    var result = await exersies_countingModel.change_amount(
      total,
      id,
      exersies_id
    );
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
  static async get_specific_excercise(req, res) {
    const Trainee_id = req.body.Trainee_id;
    const exersies_id = req.body.exersies_id;
    var result = await exersies_countingModel.get_specific_excercise(
      Trainee_id,
      exersies_id
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
  static async getExcersiseTime(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await exersies_countingModel.getExcersiseTime(Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send([{ time: "0" }]);
    }
  }
  static async dec_amount(req, res) {
    const amount = req.body.amount;
    const id = req.body.id;
    const exersies_id = req.body.exersies_id;
    var original_amount = await exersies_countingModel.get_original_amount(
      id,
      exersies_id
    );
    console.log(original_amount[0]["Quantity"]);
    var total;
    if (original_amount[0]["Quantity"] < amount) {
      total = 0;
    } else {
      total = original_amount[0]["Quantity"] - amount;
    }
    var result = await exersies_countingModel.change_amount(
      total,
      id,
      exersies_id
    );
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
}
module.exports = exersies_counting_Controller;
