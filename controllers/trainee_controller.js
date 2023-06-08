const traineeModel = require("../models/trainee");
class traineeController {
  static async getData(req, res) {
    var Email = req.body.Email;
    var Password = req.body.Password;
    console.log(Email, Password);
    var result = await traineeModel.getData(Email, Password);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async set_coache_to_trainee(req, res) {
    const Trainee_id = req.body.Trainee_id;
    const coach_id = req.body.coach_id;
    var result = await traineeModel.set_coache_to_trainee(Trainee_id, coach_id);
    if (result) {
      res.send({ message: "Subscriptions Successfully" });
    } else {
      res.send({
        message: "Erorr cant complete subscriptions",
      });
    }
  }
  static async count_trainee(req, res) {
    var result = await traineeModel.count_trainee();
    if (result) {
      res.send(result);
    } else {
      res.send({ message: "empty" });
    }
  }
  static async getpayment(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.getpayment(Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async get_all_trainee(req, res) {
    var result = await traineeModel.get_all_trainee();
    if (result) {
      res.send(result);
    } else {
      res.send({ message: "empty" });
    }
  }
  static async setprim(req, res) {
    const Trainee_id = req.body.Trainee_id;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const period = req.body.period;
    const montly_sub_pay = req.body.montly_sub_pay;
    var result = await traineeModel.primpick(
      Trainee_id,
      start_date,
      end_date,
      period,
      montly_sub_pay
    );
    if (result) {
      res.send({ message: "Subscriptions Successfully" });
    } else {
      res.send({
        message: "Erorr cant complete subscriptions",
      });
    }
  }
  static async getNutritionPlanID(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.getNutritionPlanID(Trainee_id);
    if (result) {
      res.send(result[0]);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async getCurrentTrainee(req, res) {
    var Email = req.body.Email;

    var result = await traineeModel.getCurrentTrainee(Email);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async getCurrentTrainee_id(req, res) {
    var Email = req.body.id;

    var result = await traineeModel.getCurrentTrainee_id(Email);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async AssignNutPlan(req, res) {
    const nutrients_plan_id = req.body.nutrients_plan_id;
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.AssignNutPlan(
      nutrients_plan_id,
      Trainee_id
    );
    console.log(result);
    if (result) {
      res.send({ message: "Edited Successfully" });
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async updateBMI(req, res) {
    const bmi = req.body.bmi;
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.updateBMI(bmi, Trainee_id);
    console.log(result);
    if (result) {
      res.send({ message: "Edited Successfully" });
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async updateBodyLevel(req, res) {
    const bodylevel = req.body.bodylevel;
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.updateBodyLevel(bodylevel, Trainee_id);
    console.log(result);
    if (result) {
      res.send({ message: "Edited Successfully" });
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async updateGoal(req, res) {
    const goal = req.body.goal;
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.updateGoal(goal, Trainee_id);
    console.log(result);
    if (result) {
      res.send({ message: "Edited Successfully" });
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async updateActivityLevel(req, res) {
    const activitylevel = req.body.activitylevel;
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.updateActivityLevel(
      activitylevel,
      Trainee_id
    );
    console.log(result);
    if (result) {
      res.send({ message: "Edited Successfully" });
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async updateBasicInfo(req, res) {
    const age = req.body.age;
    const height = req.body.height;
    const weight = req.body.weight;
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.updateBasicInfo(
      age,
      height,
      weight,
      Trainee_id
    );
    console.log(result);
    if (result) {
      res.send({ message: "Edited Successfully" });
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async GetEndPay(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.GetEndPay(Trainee_id);
    if (result) {
      res.send(result[0]);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async GetStartPay(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.GetStartPay(Trainee_id);
    if (result) {
      res.send(result[0]);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async GetStartDate(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.GetStartDate(Trainee_id);
    if (result) {
      res.send(result[0]);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async GetEndDate(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.GetEndDate(Trainee_id);
    if (result) {
      res.send(result[0]);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async SetEndDate(req, res) {
    var date = req.body.End_date;
    var Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.SetEndDate(date, Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async SetStartDate(req, res) {
    var date = req.body.start_date;
    var Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.SetStartDate(date, Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async SetStartPay(req, res) {
    var date = req.body.start_pay;
    var Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.SetStartPay(date, Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async SetEndPay(req, res) {
    var date = req.body.end_pay;
    var Trainee_id = req.body.Trainee_id;
    var result = await traineeModel.SetEndPay(date, Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }

  static async getCurrentTraineeAllInfo(req, res) {
    var Trainee_id = req.body.Trainee_id;

    var result = await traineeModel.getCurrentTraineeAllInfo(Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }

  static async getAllTrainee(req, res) {
    var result = await traineeModel.getAllTrainee();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async addtrainee_id_from_person(req, res) {
    var id = req.body.id;
    var result = await traineeModel.addID(id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async Sign_trainee(req, res) {
    var Trainee_id = req.body.Trainee_id;
    var Height = req.body.Height;
    var Weight = req.body.Weight;
    var Age = req.body.Age;
    var FullName = req.body.FullName;
    var Gender = req.body.Gender;
    var medical_conditions = req.body.medical_conditions;
    var Fitness_level = req.body.Fitness_level;
    var result = await traineeModel.Signtrainee(
      Trainee_id,
      Height,
      Weight,
      Age,
      FullName,
      Gender,
      medical_conditions,
      Fitness_level
    );
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "Error Id does not Exist",
        status: 400,
      });
    }
  }
  static async addtrainee(req, res) {
    var Trainee_id = req.body.Trainee_id;

    var Height = req.body.Height;

    var Weight = req.body.Weight;

    var Age = req.body.Age;

    var FullName = req.body.FullName;

    var Gender = req.body.Gender;

    var medical_conditions = req.body.medical_conditions;

    var Fitness_level = req.body.Fitness_level;

    var result = await traineeModel.addtrainee(
      Trainee_id,
      Height,
      Weight,
      Age,
      FullName,
      Gender,
      medical_conditions,
      Fitness_level
    );
    if (result.errno != 1062) {
      res.send({
        message: "Added to Trainee",
        status: true,
      });
    } else {
      res.send({
        message: "ERORR Not Added",
      });
    }
  }
}

module.exports = traineeController;
