const db = require("../config/db");
class DaysModel {
  static addweekdays(
    week_id,
    week_date_day1,
    week_date_day2,
    week_date_day3,
    week_date_day4,
    week_date_day5,
    week_date_day6,
    week_date_day7,
    trainee_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO week_days( week_id, day_name , trainee_id) VALUES " +
          "(? , ? ,?)," +
          "(? , ? ,?)," +
          "(? , ? ,?)," +
          "(? , ? ,?)," +
          "(? , ? ,?)," +
          "(? , ? ,?)," +
          "(? , ? ,?)",
        [
          week_id,
          week_date_day1,
          trainee_id,
          week_id,
          week_date_day2,
          trainee_id,
          week_id,
          week_date_day3,
          trainee_id,
          week_id,
          week_date_day4,
          trainee_id,
          week_id,
          week_date_day5,
          trainee_id,
          week_id,
          week_date_day6,
          trainee_id,
          week_id,
          week_date_day7,
          trainee_id,
        ],
        (err, res) => {
          if (!err) {
            resolve(true);
          } else {
            console.log(err);
            resolve(false);
          }
        }
      );
    });
  }
  static getWeekID_Date(date, trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT `week_id` FROM `week_days` WHERE trainee_id = ? AND day_name = ?",
        [trainee_id, date],
        (err, res) => {
          console.log(res);
          if (!err) {
            resolve(res);
          } else {
            console.log(err);
            resolve(res);
          }
        }
      );
    });
  }
  static GetallWeekDays(week_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM week_days where week_id = ? ",
        [month_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            resolve({
              message: err,
            });
          }
        }
      );
    });
  }
  static GetDayId(day_name, trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  day_id  FROM week_days where day_name = ? and trainee_id = ?",
        [day_name, trainee_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            resolve({
              message: err,
            });
          }
        }
      );
    });
  }
}
module.exports = DaysModel;
