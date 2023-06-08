const WeekModel = require("../models/week");
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
class WeekController {
  static async SaveWeeklyPhoto(req, res) {
    upload.single("photo")(req, res, async function (err) {
      const folderName = req.params.folderName;
      const photo = `/Upload/${folderName}/${req.file.filename}`;
      const weekid = req.body.weekid;
      var result = await WeekModel.SaveWeeklyPhoto(photo, weekid);
      if (result == true) {
        res.send({
          message: "edited successfully",
          status: 200,
        });
      } else {
        res.send({
          message: "failed",
          status: 400,
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
  static async getPhoto(req, res) {
    const week_id = req.body.week_id;
    var result = await WeekModel.getPhoto(week_id);
    if (result) {
      res.send(result[0]);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async getComment(req, res) {
    const week_id = req.body.week_id;
    var result = await WeekModel.getComment(week_id);
    if (result) {
      res.send(result[0]);
    } else {
      res.send({
        message: "empty",
      });
    }
  }

  static async SetComment(req, res) {
    const comment = req.body.comment;
    const week_id = req.body.week_id;
    var result = await WeekModel.SetComment(comment, week_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "ERORR",
        status: 400,
      });
    }
  }
  static async add1monthweek(req, res) {
    const month_id = req.body.month_id;
    var result = await WeekModel.add1monthweek(month_id);
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
  static async add2monthweek(req, res) {
    const month1_id = req.body.month1_id;
    const month2_id = req.body.month2_id;
    var result = await WeekModel.add2monthweek(month1_id, month2_id);
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
  static async add3monthweek(req, res) {
    const month1_id = req.body.month1_id;
    const month2_id = req.body.month2_id;
    const month3_id = req.body.month3_id;
    var result = await WeekModel.add3monthweek(month1_id, month2_id, month3_id);
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
  static async add4monthweek(req, res) {
    const month1_id = req.body.month1_id;
    const month2_id = req.body.month2_id;
    const month3_id = req.body.month3_id;
    const month4_id = req.body.month4_id;
    var result = await WeekModel.add4monthweek(
      month1_id,
      month2_id,
      month3_id,
      month4_id
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
  static async add5monthweek(req, res) {
    const month1_id = req.body.month1_id;
    const month2_id = req.body.month2_id;
    const month3_id = req.body.month3_id;
    const month4_id = req.body.month4_id;
    const month5_id = req.body.month5_id;
    var result = await WeekModel.add5monthweek(
      month1_id,
      month2_id,
      month3_id,
      month4_id,
      month5_id
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
  static async add6monthweek(req, res) {
    const month1_id = req.body.month1_id;
    const month2_id = req.body.month2_id;
    const month3_id = req.body.month3_id;
    const month4_id = req.body.month4_id;
    const month5_id = req.body.month5_id;
    const month6_id = req.body.month6_id;
    var result = await WeekModel.add6monthweek(
      month1_id,
      month2_id,
      month3_id,
      month4_id,
      month5_id,
      month6_id
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
  static async add7monthweek(req, res) {
    const month1_id = req.body.month1_id;
    const month2_id = req.body.month2_id;
    const month3_id = req.body.month3_id;
    const month4_id = req.body.month4_id;
    const month5_id = req.body.month5_id;
    const month6_id = req.body.month6_id;
    const month7_id = req.body.month7_id;
    var result = await WeekModel.add7monthweek(
      month1_id,
      month2_id,
      month3_id,
      month4_id,
      month5_id,
      month6_id,
      month7_id
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
  static async add8monthweek(req, res) {
    const month1_id = req.body.month1_id;
    const month2_id = req.body.month2_id;
    const month3_id = req.body.month3_id;
    const month4_id = req.body.month4_id;
    const month5_id = req.body.month5_id;
    const month6_id = req.body.month6_id;
    const month7_id = req.body.month7_id;
    const month8_id = req.body.month8_id;
    var result = await WeekModel.add8monthweek(
      month1_id,
      month2_id,
      month3_id,
      month4_id,
      month5_id,
      month6_id,
      month7_id,
      month8_id
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
  static async add9monthweek(req, res) {
    const month1_id = req.body.month1_id;
    const month2_id = req.body.month2_id;
    const month3_id = req.body.month3_id;
    const month4_id = req.body.month4_id;
    const month5_id = req.body.month5_id;
    const month6_id = req.body.month6_id;
    const month7_id = req.body.month7_id;
    const month8_id = req.body.month8_id;
    const month9_id = req.body.month9_id;
    var result = await WeekModel.add9monthweek(
      month1_id,
      month2_id,
      month3_id,
      month4_id,
      month5_id,
      month6_id,
      month7_id,
      month8_id,
      month9_id
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
  static async add10monthweek(req, res) {
    const month1_id = req.body.month1_id;
    const month2_id = req.body.month2_id;
    const month3_id = req.body.month3_id;
    const month4_id = req.body.month4_id;
    const month5_id = req.body.month5_id;
    const month6_id = req.body.month6_id;
    const month7_id = req.body.month7_id;
    const month8_id = req.body.month8_id;
    const month9_id = req.body.month9_id;
    const month10_id = req.body.month10_id;
    var result = await WeekModel.add10monthweek(
      month1_id,
      month2_id,
      month3_id,
      month4_id,
      month5_id,
      month6_id,
      month7_id,
      month8_id,
      month9_id,
      month10_id
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
  static async add11monthweek(req, res) {
    const month1_id = req.body.month1_id;
    const month2_id = req.body.month2_id;
    const month3_id = req.body.month3_id;
    const month4_id = req.body.month4_id;
    const month5_id = req.body.month5_id;
    const month6_id = req.body.month6_id;
    const month7_id = req.body.month7_id;
    const month8_id = req.body.month8_id;
    const month9_id = req.body.month9_id;
    const month10_id = req.body.month10_id;
    const month11_id = req.body.month11_id;
    var result = await WeekModel.add11monthweek(
      month1_id,
      month2_id,
      month3_id,
      month4_id,
      month5_id,
      month6_id,
      month7_id,
      month8_id,
      month9_id,
      month10_id,
      month11_id
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
  static async add12monthweek(req, res) {
    const month1_id = req.body.month1_id;
    const month2_id = req.body.month2_id;
    const month3_id = req.body.month3_id;
    const month4_id = req.body.month4_id;
    const month5_id = req.body.month5_id;
    const month6_id = req.body.month6_id;
    const month7_id = req.body.month7_id;
    const month8_id = req.body.month8_id;
    const month9_id = req.body.month9_id;
    const month10_id = req.body.month10_id;
    const month11_id = req.body.month11_id;
    const month12_id = req.body.month12_id;
    var result = await WeekModel.add12monthweek(
      month1_id,
      month2_id,
      month3_id,
      month4_id,
      month5_id,
      month6_id,
      month7_id,
      month8_id,
      month9_id,
      month10_id,
      month11_id,
      month12_id
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
  static async GetWeekData(req, res) {
    const month_id = req.body.month_id;
    var result = await WeekModel.GetWeekData(month_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
}
module.exports = WeekController;
