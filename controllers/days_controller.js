const DaysModel = require("../models/week_days");
class DaysController {
  static async addweekdays(req, res) {
    const week_id = req.body.week_id;
    const trainee_id = req.body.trainee_id;
    const week_date_day1 = req.body.week_date_day1;
    const week_date_day2 = req.body.week_date_day2;
    const week_date_day3 = req.body.week_date_day3;
    const week_date_day4 = req.body.week_date_day4;
    const week_date_day5 = req.body.week_date_day5;
    const week_date_day6 = req.body.week_date_day6;
    const week_date_day7 = req.body.week_date_day7;
    var result = await DaysModel.addweekdays(
      week_id,
      week_date_day1,
      week_date_day2,
      week_date_day3,
      week_date_day4,
      week_date_day5,
      week_date_day6,
      week_date_day7,
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
  static async getWeekID_Date(req, res) {
    const date = req.body.date;
    const trainee_id = req.body.trainee_id;
    var result = await DaysModel.getWeekID_Date(date, trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async GetallWeekDays(req, res) {
    const week_id = req.body.week_id;
    var result = await DaysModel.GetallWeekDays(week_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async GetDayId(req, res) {
    const day_name = req.body.day_name;
    const trainee_id = req.body.trainee_id;
    var result = await DaysModel.GetDayId(day_name, trainee_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
}
module.exports = DaysController;
