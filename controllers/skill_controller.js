const skillModel = require("../models/skill");
class skillController {
  static async skillshow(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await skillModel.skillshow(Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "Erorr",
        status: 400,
      });
    }
  }
  static async getSkill(req, res) {
    const skill_id = req.body.skill_id;
    var result = await skillModel.getSkill(skill_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "Erorr",
        status: 400,
      });
    }
  }

  static async deletelist(req, res) {
    const Trainee_id = req.body.Trainee_id;
    const Skill_id = req.body.Skill_id;
    var result = await skillModel.deletelist(Trainee_id, Skill_id);
    if (result) {
      console.log(result);
      res.send({
        message: "Deleted Successfully",
      });
    } else {
      res.send({
        message: "Erorr",
      });
    }
  }

  static async skillslist(req, res) {
    const Trainee_id = req.body.Trainee_id;
    var result = await skillModel.get_skills_lists(Trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "Erorr",
        status: 400,
      });
    }
  }

  static async addskilllist(req, res) {
    var Trainee_id = req.body.Trainee_id;
    var Powerlifting = req.body.Powerlifting;
    var Bodyweight = req.body.Bodyweight;
    var Cardiovascular = req.body.Cardiovascular;
    var Yoga = req.body.Yoga;
    var Calisthenics = req.body.Calisthenics;
    var High_Intensity = req.body.High_Intensity;
    var Boxing = req.body.Boxing;
    var Bodybuilding = req.body.Bodybuilding;
    var CrossFit = req.body.CrossFit;
    var result = await skillModel.Add_skill_list(
      Powerlifting,
      Bodyweight,
      Cardiovascular,
      Yoga,
      Calisthenics,
      High_Intensity,
      Boxing,
      Bodybuilding,
      CrossFit,
      Trainee_id
    );
    if (result.errno != 1062) {
      res.send({
        message: "Added to Skills",
        status: true,
      });
    } else {
      res.send({
        message: "ERORR Not Added",
      });
    }
  }
}

module.exports = skillController;
