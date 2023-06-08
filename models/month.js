const db = require("../config/db");
class MonthModel {
  static GetMonthData(trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `month` where trainee_id = ? ",
        [trainee_id],
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
  static GetPlanWeeks(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT month.Month_id , month.trainee_id , month.Month_Name ,week.week_id , week.week_number , week.weekly_photo , week.comments" +
          " FROM month JOIN week ON month.Month_id = week.month_id WHERE month.trainee_id = ? ",
        [Trainee_id],
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
  static subscription(trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM month JOIN week ON week.month_id = month.Month_id JOIN week_days ON week_days.week_id = week.week_id WHERE month.trainee_id = ? ;",
        [trainee_id],
        (err, result) => {
          if (!err) {
            if (result.length > 0) {
              resolve(result);
            } else resolve([]);
          } else {
            resolve({
              message: err,
            });
          }
        }
      );
    });
  }
  static Check_if_has_plan(trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM month where trainee_id = ? ",
        [trainee_id],
        (err, result) => {
          if (!err) {
            if (result.length > 0) {
              resolve("true");
            } else resolve("false");
          } else {
            resolve({
              message: err,
            });
          }
        }
      );
    });
  }
  static add1month(Month_Name1, trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (?,?)",
        [Month_Name1, trainee_id],
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
  static add2month(Month_1_Name, Month_2_Name, trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (? , ?) ,(? , ?)",
        [Month_1_Name, trainee_id, Month_2_Name, trainee_id],
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
  static add3month(Month_1_Name, Month_2_Name, Month_3_Name, trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (? , ?) ,(? , ?) ,(? , ?) ",
        [
          Month_1_Name,
          trainee_id,
          Month_2_Name,
          trainee_id,
          Month_3_Name,
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
  static add4month(
    Month_1_Name,
    Month_2_Name,
    Month_3_Name,
    Month_4_Name,
    trainee_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (? , ?) ,(? , ?) ,(? , ?),(? , ?) ",
        [
          Month_1_Name,
          trainee_id,
          Month_2_Name,
          trainee_id,
          Month_3_Name,
          trainee_id,
          Month_4_Name,
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
  static add5month(
    Month_1_Name,
    Month_2_Name,
    Month_3_Name,
    Month_4_Name,
    Month_5_Name,
    trainee_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (? , ?) ,(? , ?) ,(? , ?),(? , ?) ,(? , ?)",
        [
          Month_1_Name,
          trainee_id,
          Month_2_Name,
          trainee_id,
          Month_3_Name,
          trainee_id,
          Month_4_Name,
          trainee_id,
          Month_5_Name,
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
  static add6month(
    Month_1_Name,
    Month_2_Name,
    Month_3_Name,
    Month_4_Name,
    Month_5_Name,
    Month_6_Name,
    trainee_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (? , ?) ,(? , ?) ,(? , ?),(? , ?) ,(? , ?), (? , ?)",
        [
          Month_1_Name,
          trainee_id,
          Month_2_Name,
          trainee_id,
          Month_3_Name,
          trainee_id,
          Month_4_Name,
          trainee_id,
          Month_5_Name,
          trainee_id,
          Month_6_Name,
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
  static add7month(
    Month_1_Name,
    Month_2_Name,
    Month_3_Name,
    Month_4_Name,
    Month_5_Name,
    Month_6_Name,
    Month_7_Name,
    trainee_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (? , ?) ,(? , ?) ,(? , ?),(? , ?) ,(? , ?),(? , ?),(? , ?)",
        [
          Month_1_Name,
          trainee_id,
          Month_2_Name,
          trainee_id,
          Month_3_Name,
          trainee_id,
          Month_4_Name,
          trainee_id,
          Month_5_Name,
          trainee_id,
          Month_6_Name,
          trainee_id,
          Month_7_Name,
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
  static add8month(
    Month_1_Name,
    Month_2_Name,
    Month_3_Name,
    Month_4_Name,
    Month_5_Name,
    Month_6_Name,
    Month_7_Name,
    Month_8_Name,
    trainee_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (? , ?) ,(? , ?) ,(? , ?),(? , ?) ,(? , ?),(? , ?),(? , ?),(? , ?)",
        [
          Month_1_Name,
          trainee_id,
          Month_2_Name,
          trainee_id,
          Month_3_Name,
          trainee_id,
          Month_4_Name,
          trainee_id,
          Month_5_Name,
          trainee_id,
          Month_6_Name,
          trainee_id,
          Month_7_Name,
          trainee_id,
          Month_8_Name,
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
  static add9month(
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
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (? , ?) ,(? , ?) ,(? , ?),(? , ?) ,(? , ?),(? , ?),(? , ?),(? , ?),(? , ?)",
        [
          Month_1_Name,
          trainee_id,
          Month_2_Name,
          trainee_id,
          Month_3_Name,
          trainee_id,
          Month_4_Name,
          trainee_id,
          Month_5_Name,
          trainee_id,
          Month_6_Name,
          trainee_id,
          Month_7_Name,
          trainee_id,
          Month_8_Name,
          trainee_id,
          Month_9_Name,
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
  static add10month(
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
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (? , ?) ,(? , ?) ,(? , ?),(? , ?) ,(? , ?),(? , ?),(? , ?),(? , ?),(? , ?),(? , ?)",
        [
          Month_1_Name,
          trainee_id,
          Month_2_Name,
          trainee_id,
          Month_3_Name,
          trainee_id,
          Month_4_Name,
          trainee_id,
          Month_5_Name,
          trainee_id,
          Month_6_Name,
          trainee_id,
          Month_7_Name,
          trainee_id,
          Month_8_Name,
          trainee_id,
          Month_9_Name,
          trainee_id,
          Month_10_Name,
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
  static add11month(
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
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (? , ?) ,(? , ?) ,(? , ?),(? , ?) ,(? , ?),(? , ?),(? , ?),(? , ?),(? , ?),(? , ?),(? , ?)",
        [
          Month_1_Name,
          trainee_id,
          Month_2_Name,
          trainee_id,
          Month_3_Name,
          trainee_id,
          Month_4_Name,
          trainee_id,
          Month_5_Name,
          trainee_id,
          Month_6_Name,
          trainee_id,
          Month_7_Name,
          trainee_id,
          Month_8_Name,
          trainee_id,
          Month_9_Name,
          trainee_id,
          Month_10_Name,
          trainee_id,
          Month_11_Name,
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
  static add12month(
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
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `month`( `Month_Name`, `trainee_id`) VALUES (? , ?) ,(? , ?) ,(? , ?),(? , ?) ,(? , ?),(? , ?),(? , ?),(? , ?),(? , ?),(? , ?),(? , ?),(? , ?)",
        [
          Month_1_Name,
          trainee_id,
          Month_2_Name,
          trainee_id,
          Month_3_Name,
          trainee_id,
          Month_4_Name,
          trainee_id,
          Month_5_Name,
          trainee_id,
          Month_6_Name,
          trainee_id,
          Month_7_Name,
          trainee_id,
          Month_8_Name,
          trainee_id,
          Month_9_Name,
          trainee_id,
          Month_10_Name,
          trainee_id,
          Month_11_Name,
          trainee_id,
          Month_12_Name,
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
}
module.exports = MonthModel;
