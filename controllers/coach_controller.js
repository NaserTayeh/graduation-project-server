const { log } = require("console");
const coachModel = require("../models/coach");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = req.params.folderName;

    cb(null, "./Upload/" + folderName);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

class coachController {
  static async addcoach(req, res) {
    upload.single("photo")(req, res, async function (err) {
      var Coach_id = req.body.Coach_id;
      var Height = req.body.Height;
      var Weight = req.body.Weight;
      var Year_of_exp = req.body.Year_of_exp;
      var Age = req.body.Age;
      var coaching_Foucs = req.body.coaching_Foucs;
      var Gender = req.body.Gender;
      var Full_name = req.body.Full_name;
      var Qualifications = req.body.Qualifications;
      var Nationality = req.body.Nationality;
      var Skills_id = req.body.Skills_id;
      var capacity = req.body.capacity;
      var subscription_tax = req.body.subscription_tax;
      var Salary = req.body.Salary;
      var Language = req.body.Language;
      const folderName = req.params.folderName;
      var Personal_pic = `/Upload/${folderName}/${req.file.filename}`;
      var result = await coachModel.addcoach(
        Coach_id,
        Height,
        Weight,
        Year_of_exp,
        Age,
        coaching_Foucs,
        Gender,
        Full_name,
        Personal_pic,
        Qualifications,
        Nationality,
        Skills_id,
        capacity,
        subscription_tax,
        Salary,
        Language
      );
      if (result) {
        res.send({
          message: "Added to coach",
          status: true,
        });
      } else {
        res.send({
          message: "ERORR Not Added",
        });
      }
      if (err) {
        console.log(err);
        return res.status(400).json({ error: "Error uploading file" });
      }
      if (!req.file) {
        return res.status(400).json({ error: "No file found in request" });
      }
    });
  }
  static async get_avilable_coaches(req, res) {
    var result = await coachModel.get_avilable_coaches();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async IncTraineeCoach(req, res) {
    const coach_id = req.body.coach_id;
    var result = await coachModel.getCounter(coach_id);
    var end_amount = parseInt(result[0]["Number_trainee"]);
    end_amount = end_amount + 1;
    var result = await coachModel.setCounter(coach_id, end_amount);
    if (result) {
      res.send({
        message: "Coach Inc successfully",
        status: 200,
      });
    } else {
      res.send({
        message: "failed to update ",
        status: 400,
      });
    }
  }
  static async addcoach_withoutphoto(req, res) {
    var Coach_id = req.body.Coach_id;
    var Height = req.body.Height;
    var Weight = req.body.Weight;
    var Year_of_exp = req.body.Year_of_exp;
    var Age = req.body.Age;
    var coaching_Foucs = req.body.coaching_Foucs;
    var Gender = req.body.Gender;
    var Full_name = req.body.Full_name;
    var Qualifications = req.body.Qualifications;
    var Nationality = req.body.Nationality;
    var Skills_id = req.body.Skills_id;
    var capacity = req.body.capacity;
    var subscription_tax = req.body.subscription_tax;
    var Salary = req.body.Salary;
    var Language = req.body.Language;
    var result = await coachModel.addcoach_withoutphoto(
      Coach_id,
      Height,
      Weight,
      Year_of_exp,
      Age,
      coaching_Foucs,
      Gender,
      Full_name,
      Qualifications,
      Nationality,
      Skills_id,
      capacity,
      subscription_tax,
      Salary,
      Language
    );
    console.log(result);
    if (result) {
      res.send({
        message: "Added to coach",
        status: true,
      });
    } else {
      res.send({
        message: "ERORR Not Added",
      });
    }
  }

  static async get_paired_req(req, res) {
    var result = await coachModel.get_paired_req();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async get_active_req(req, res) {
    var result = await coachModel.get_active_req();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async get_deactivated_req(req, res) {
    var result = await coachModel.get_deactivated_req();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async set_skillList_id(req, res) {
    const Skills_id = req.body.Skills_id;
    const Coach_id = req.body.Coach_id;
    var result = await coachModel.set_skillList_id(Skills_id, Coach_id);
    if (result) {
      res.send({
        message: "Set Successfully",
        status: true,
      });
    } else {
      res.send({
        message: "Not Set",
        status: false,
      });
    }
  }
  static async updateCoachData(req, res) {
    const Weight = req.body.Weight;
    const coach_id = req.body.coach_id;
    const Height = req.body.Height;
    const Age = req.body.Age;
    const YearsOfExp = req.body.YearsOfExp;
    const coachFocus = req.body.coachFocus;
    const SubscribtionTax = req.body.SubscribtionTax;
    const coachCapacity = req.body.coachCapacity;
    var result = await coachModel.updateCoachData(
      Weight,
      Height,
      Age,
      YearsOfExp,
      coachFocus,
      SubscribtionTax,
      coachCapacity,
      coach_id
    );
    console.log(result);
    if (result) {
      res.send({
        message: "Edited",
        status: true,
      });
    } else {
      res.send({
        message: "Not Edited",
      });
    }
  }
  static async un_pend_request(req, res) {
    const coach_id = req.body.Coach_id;
    var result = await coachModel.un_pend_request(coach_id);
    if (result) {
      res.send({
        message: "Edited",
        status: true,
      });
    } else {
      res.send({
        message: "Not Edited",
      });
    }
  }
  static async enable_request(req, res) {
    const coach_id = req.body.Coach_id;
    var result = await coachModel.enable_request(coach_id);
    if (result) {
      res.send({
        message: "Edited",
        status: true,
      });
    } else {
      res.send({
        message: "Not Edited",
      });
    }
  }
  static async delete_request(req, res) {
    const coach_id = req.body.Coach_id;
    var result = await coachModel.delete_request(coach_id);
    if (result) {
      res.send({
        message: "deleted",
        status: true,
      });
    } else {
      res.send({
        message: "Not deleted",
      });
    }
  }
  static async un_enable_request(req, res) {
    const coach_id = req.body.Coach_id;
    var result = await coachModel.un_enable_request(coach_id);
    if (result) {
      res.send({
        message: "Edited",
        status: true,
      });
    } else {
      res.send({
        message: "Not Edited",
      });
    }
  }
  static async get_all_accepted_request(req, res) {
    var result = await coachModel.get_all_accepted_request();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async get_all_coach(req, res) {
    var result = await coachModel.get_all_coach();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async get_all_disaled_request(req, res) {
    var result = await coachModel.get_all_disaled_request();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async get_all_pending_request(req, res) {
    var result = await coachModel.get_all_pending_request();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async count_coach(req, res) {
    var result = await coachModel.count_coach();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }

  static async getData(req, res) {
    var result = await coachModel.getData();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async CoachRetriveData(req, res) {
    var coach_id = req.body.Coach_id;
    var result = await coachModel.CoachRetriveData(coach_id);
    console.log(result);
    if (result) {
      res.send(result[0]);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }

  static async countcoachs(req, res) {
    var result = await coachModel.countcoachs();
    if (result) {
      res.send({
        length: result.length,
      });
    } else {
      res.send({
        message: "empty",
      });
    }
  }
}
module.exports = coachController;
