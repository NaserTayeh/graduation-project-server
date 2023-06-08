const nutritionModel = require("../models/nutrition");
class NutritionController {
  static async getNutrition(req, res) {
    var result = await nutritionModel.getData();
    if (result) {
      res.send(result);
    }
  }
  static async getNutritionPlan(req, res) {
    var id = req.body.id;
    var result = await nutritionModel.getDataID(id);
    if (result) {
      res.send(result[0]);
    }
  }
  static async getWaterNeed(req, res) {
    const id = req.body.nutrients_plan_id;
    var result = await nutritionModel.getWaterNeed(id);
    console.log(result);
    if (result) {
      res.send(result[0]);
    }
  }
  static async getWaterTaken(req, res) {
    const id = req.body.nutrients_plan_id;
    var result = await nutritionModel.getWaterTaken(id);
    console.log(result);
    if (result) {
      res.send(result[0]);
    }
  }
  static async sub_cal(req, res) {
    const nutrients_plan_id = req.body.nutrients_plan_id;
    const amount = req.body.amount;
    var result = await nutritionModel.getcal(nutrients_plan_id);
    //console.log(result[0]['Vitamins_taken']);
    var end_amount = parseInt(result[0]["Calories_taken"]);
    end_amount = end_amount - amount;
    var result = await nutritionModel.setcal(nutrients_plan_id, end_amount);
    if (result) {
      res.send({
        message: "Cal update successfully",
        status: 200,
      });
    } else {
      res.send({
        message: "failed to update ",
        status: 400,
      });
    }
  }
  static async add_cal(req, res) {
    const nutrients_plan_id = req.body.nutrients_plan_id;
    const amount = req.body.amount;
    var result = await nutritionModel.getcal(nutrients_plan_id);
    //console.log(result[0]['Vitamins_taken']);
    var end_amount = parseInt(result[0]["Calories_taken"]);
    end_amount = end_amount + amount;
    var result = await nutritionModel.setcal(nutrients_plan_id, end_amount);
    if (result) {
      res.send({
        message: "Cal update successfully",
        status: 200,
      });
    } else {
      res.send({
        message: "failed to update ",
        status: 400,
      });
    }
  }

  static async SetWaterTaken(req, res) {
    const id = req.body.nutrients_plan_id;
    const water = req.body.Water_taken;
    var result = await nutritionModel.SetWaterTaken(id, water);
    if (result) {
      res.send({
        message: "update successfully",
        status: 200,
      });
    } else {
      res.send({
        message: "failed to update ",
        status: 400,
      });
    }
  }

  static async addNutrition(req, res) {
    var Vitamins_need = req.body.Vitamins_need;
    var Water_need = req.body.Water_need;
    var Proteins_need = req.body.Proteins_need;
    var Carbohydrates_need = req.body.Carbohydrates_need;
    var ntrition_plan_name = req.body.ntrition_plan_name;
    var Calories_need = req.body.Calories_need;

    var result = await nutritionModel.addNutritonPlan(
      Vitamins_need,
      Water_need,
      Proteins_need,
      Carbohydrates_need,
      ntrition_plan_name,
      Calories_need
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
  static async deleteNutrition(req, res) {
    const id = req.body.nutrients_plan_id;
    if (id) {
      var result = await nutritionModel.deleteNutritonPlan(id);
      if (result) {
        res.send({
          message: "delete successfully",
          status: 200,
        });
      } else {
        res.send({
          message: "failed to delete ",
          status: 400,
        });
      }
    }
  }
  static async updateNutrition(req, res) {
    const id = req.body.nutrients_plan_id;
    var Vitamins_need = req.body.Vitamins_need;
    var Water_need = req.body.Water_need;
    var Proteins_need = req.body.Proteins_need;
    var Carbohydrates_need = req.body.Carbohydrates_need;
    var ntrition_plan_name = req.body.ntrition_plan_name;

    if (id) {
      var result = await nutritionModel.updateNutritonPlan(
        id,
        Vitamins_need,
        Water_need,
        Proteins_need,
        Carbohydrates_need,
        ntrition_plan_name
      );
      if (result) {
        res.send({
          message: "update successfully",
          status: 200,
        });
      } else {
        res.send({
          message: "failed to update ",
          status: 400,
        });
      }
    }
  }
}
module.exports = NutritionController;
