const MonthModel = require("../models/month");
class MonthController {
  static async GetMonthData(req, res) {
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.GetMonthData(trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async GetPlanWeeks(req, res) {
    const traineeid = req.body.Trainee_id;
    var result = await MonthModel.GetPlanWeeks(traineeid);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async subscription(req, res) {
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.subscription(trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }

  static async Check_if_has_plan(req, res) {
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.Check_if_has_plan(trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async add1month(req, res) {
    const Month_Name = req.body.Month_1_Name;
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add1month(Month_Name, trainee_id);
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
  static async add2month(req, res) {
    const Month_1_Name = req.body.Month_1_Name;
    const Month_2_Name = req.body.Month_2_Name;
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add2month(
      Month_1_Name,
      Month_2_Name,
      trainee_id
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
  static async add3month(req, res) {
    const Month_1_Name = req.body.Month_1_Name;
    const Month_2_Name = req.body.Month_2_Name;
    const Month_3_Name = req.body.Month_3_Name;
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add3month(
      Month_1_Name,
      Month_2_Name,
      Month_3_Name,
      trainee_id
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
  static async add4month(req, res) {
    const Month_1_Name = req.body.Month_1_Name;
    const Month_2_Name = req.body.Month_2_Name;
    const Month_3_Name = req.body.Month_3_Name;
    const Month_4_Name = req.body.Month_4_Name;
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add4month(
      Month_1_Name,
      Month_2_Name,
      Month_3_Name,
      Month_4_Name,
      trainee_id
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
  static async add5month(req, res) {
    const Month_1_Name = req.body.Month_1_Name;
    const Month_2_Name = req.body.Month_2_Name;
    const Month_3_Name = req.body.Month_3_Name;
    const Month_4_Name = req.body.Month_4_Name;
    const Month_5_Name = req.body.Month_5_Name;

    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add5month(
      Month_1_Name,
      Month_2_Name,
      Month_3_Name,
      Month_4_Name,
      Month_5_Name,
      trainee_id
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
  static async add6month(req, res) {
    const Month_1_Name = req.body.Month_1_Name;
    const Month_2_Name = req.body.Month_2_Name;
    const Month_3_Name = req.body.Month_3_Name;
    const Month_4_Name = req.body.Month_4_Name;
    const Month_5_Name = req.body.Month_5_Name;
    const Month_6_Name = req.body.Month_6_Name;
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add6month(
      Month_1_Name,
      Month_2_Name,
      Month_3_Name,
      Month_4_Name,
      Month_5_Name,
      Month_6_Name,
      trainee_id
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
  static async add7month(req, res) {
    const Month_1_Name = req.body.Month_1_Name;
    const Month_2_Name = req.body.Month_2_Name;
    const Month_3_Name = req.body.Month_3_Name;
    const Month_4_Name = req.body.Month_4_Name;
    const Month_5_Name = req.body.Month_5_Name;
    const Month_6_Name = req.body.Month_6_Name;
    const Month_7_Name = req.body.Month_7_Name;
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add7month(
      Month_1_Name,
      Month_2_Name,
      Month_3_Name,
      Month_4_Name,
      Month_5_Name,
      Month_6_Name,
      Month_7_Name,
      trainee_id
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
  static async add8month(req, res) {
    const Month_1_Name = req.body.Month_1_Name;
    const Month_2_Name = req.body.Month_2_Name;
    const Month_3_Name = req.body.Month_3_Name;
    const Month_4_Name = req.body.Month_4_Name;
    const Month_5_Name = req.body.Month_5_Name;
    const Month_6_Name = req.body.Month_6_Name;
    const Month_7_Name = req.body.Month_7_Name;
    const Month_8_Name = req.body.Month_8_Name;
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add8month(
      Month_1_Name,
      Month_2_Name,
      Month_3_Name,
      Month_4_Name,
      Month_5_Name,
      Month_6_Name,
      Month_7_Name,
      Month_8_Name,
      trainee_id
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
  static async add9month(req, res) {
    const Month_1_Name = req.body.Month_1_Name;
    const Month_2_Name = req.body.Month_2_Name;
    const Month_3_Name = req.body.Month_3_Name;
    const Month_4_Name = req.body.Month_4_Name;
    const Month_5_Name = req.body.Month_5_Name;
    const Month_6_Name = req.body.Month_6_Name;
    const Month_7_Name = req.body.Month_7_Name;
    const Month_8_Name = req.body.Month_8_Name;
    const Month_9_Name = req.body.Month_9_Name;
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add9month(
      Month_1_Name,
      Month_2_Name,
      Month_3_Name,
      Month_4_Name,
      Month_5_Name,
      Month_6_Name,
      Month_7_Name,
      Month_8_Name,
      Month_9_Name,
      trainee_id
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
  static async add10month(req, res) {
    const Month_1_Name = req.body.Month_1_Name;
    const Month_2_Name = req.body.Month_2_Name;
    const Month_3_Name = req.body.Month_3_Name;
    const Month_4_Name = req.body.Month_4_Name;
    const Month_5_Name = req.body.Month_5_Name;
    const Month_6_Name = req.body.Month_6_Name;
    const Month_7_Name = req.body.Month_7_Name;
    const Month_8_Name = req.body.Month_8_Name;
    const Month_9_Name = req.body.Month_9_Name;
    const Month_10_Name = req.body.Month_10_Name;
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add10month(
      Month_1_Name,
      Month_2_Name,
      Month_3_Name,
      Month_4_Name,
      Month_5_Name,
      Month_6_Name,
      Month_7_Name,
      Month_8_Name,
      Month_9_Name,
      Month_10_Name,
      trainee_id
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
  static async add11month(req, res) {
    const Month_1_Name = req.body.Month_1_Name;
    const Month_2_Name = req.body.Month_2_Name;
    const Month_3_Name = req.body.Month_3_Name;
    const Month_4_Name = req.body.Month_4_Name;
    const Month_5_Name = req.body.Month_5_Name;
    const Month_6_Name = req.body.Month_6_Name;
    const Month_7_Name = req.body.Month_7_Name;
    const Month_8_Name = req.body.Month_8_Name;
    const Month_9_Name = req.body.Month_9_Name;
    const Month_10_Name = req.body.Month_10_Name;
    const Month_11_Name = req.body.Month_11_Name;
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add11month(
      Month_1_Name,
      Month_2_Name,
      Month_3_Name,
      Month_4_Name,
      Month_5_Name,
      Month_6_Name,
      Month_7_Name,
      Month_8_Name,
      Month_9_Name,
      Month_10_Name,
      Month_11_Name,
      trainee_id
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
  static async add12month(req, res) {
    const Month_1_Name = req.body.Month_1_Name;
    const Month_2_Name = req.body.Month_2_Name;
    const Month_3_Name = req.body.Month_3_Name;
    const Month_4_Name = req.body.Month_4_Name;
    const Month_5_Name = req.body.Month_5_Name;
    const Month_6_Name = req.body.Month_6_Name;
    const Month_7_Name = req.body.Month_7_Name;
    const Month_8_Name = req.body.Month_8_Name;
    const Month_9_Name = req.body.Month_9_Name;
    const Month_10_Name = req.body.Month_10_Name;
    const Month_11_Name = req.body.Month_11_Name;
    const Month_12_Name = req.body.Month_12_Name;
    const trainee_id = req.body.trainee_id;
    var result = await MonthModel.add12month(
      Month_1_Name,
      Month_2_Name,
      Month_3_Name,
      Month_4_Name,
      Month_5_Name,
      Month_6_Name,
      Month_7_Name,
      Month_8_Name,
      Month_9_Name,
      Month_10_Name,
      Month_11_Name,
      Month_12_Name,
      trainee_id
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
module.exports = MonthController;
