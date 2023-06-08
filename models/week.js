const db = require("../config/db");
class WeekModel {
  static GetWeekData(month_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  week_id  FROM `week` where month_id = ? ",
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
  static getPhoto(week_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT weekly_photo FROM week WHERE week_id = ?",
        [week_id],
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
  static SetComment(comment, week_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE week SET comments= ? WHERE week_id= ? ",
        [comment, week_id],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve({
                message: "Updated",
              });
            }
            resolve({
              message: "Not Updated",
            });
          } else {
            resolve({
              message: "Erorr",
            });
          }
        }
      );
    });
  }
  static getComment(week_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT comments FROM week WHERE week_id = ?",
        [week_id],
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

  static SaveWeeklyPhoto(photo, weekid) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE week SET  weekly_photo= ? WHERE week_id = ? ",
        [photo, weekid],
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
  static add1monthweek(month_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES ('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [month_id, month_id, month_id, month_id],
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
  static add2monthweek(month1_id, month2_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES" +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [
          month1_id,
          month1_id,
          month1_id,
          month1_id,
          month2_id,
          month2_id,
          month2_id,
          month2_id,
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
  static add3monthweek(month1_id, month2_id, month3_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES" +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [
          month1_id,
          month1_id,
          month1_id,
          month1_id,
          month2_id,
          month2_id,
          month2_id,
          month2_id,
          month3_id,
          month3_id,
          month3_id,
          month3_id,
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
  static add4monthweek(month1_id, month2_id, month3_id, month4_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES" +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [
          month1_id,
          month1_id,
          month1_id,
          month1_id,
          month2_id,
          month2_id,
          month2_id,
          month2_id,
          month3_id,
          month3_id,
          month3_id,
          month3_id,
          month4_id,
          month4_id,
          month4_id,
          month4_id,
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
  static add5monthweek(month1_id, month2_id, month3_id, month4_id, month5_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES" +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [
          month1_id,
          month1_id,
          month1_id,
          month1_id,
          month2_id,
          month2_id,
          month2_id,
          month2_id,
          month3_id,
          month3_id,
          month3_id,
          month3_id,
          month4_id,
          month4_id,
          month4_id,
          month4_id,
          month5_id,
          month5_id,
          month5_id,
          month5_id,
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
  static add6monthweek(
    month1_id,
    month2_id,
    month3_id,
    month4_id,
    month5_id,
    month6_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES" +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [
          month1_id,
          month1_id,
          month1_id,
          month1_id,
          month2_id,
          month2_id,
          month2_id,
          month2_id,
          month3_id,
          month3_id,
          month3_id,
          month3_id,
          month4_id,
          month4_id,
          month4_id,
          month4_id,
          month5_id,
          month5_id,
          month5_id,
          month5_id,
          month6_id,
          month6_id,
          month6_id,
          month6_id,
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
  static add7monthweek(
    month1_id,
    month2_id,
    month3_id,
    month4_id,
    month5_id,
    month6_id,
    month7_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES" +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [
          month1_id,
          month1_id,
          month1_id,
          month1_id,
          month2_id,
          month2_id,
          month2_id,
          month2_id,
          month3_id,
          month3_id,
          month3_id,
          month3_id,
          month4_id,
          month4_id,
          month4_id,
          month4_id,
          month5_id,
          month5_id,
          month5_id,
          month5_id,
          month6_id,
          month6_id,
          month6_id,
          month6_id,
          month7_id,
          month7_id,
          month7_id,
          month7_id,
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
  static add8monthweek(
    month1_id,
    month2_id,
    month3_id,
    month4_id,
    month5_id,
    month6_id,
    month7_id,
    month8_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES" +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [
          month1_id,
          month1_id,
          month1_id,
          month1_id,
          month2_id,
          month2_id,
          month2_id,
          month2_id,
          month3_id,
          month3_id,
          month3_id,
          month3_id,
          month4_id,
          month4_id,
          month4_id,
          month4_id,
          month5_id,
          month5_id,
          month5_id,
          month5_id,
          month6_id,
          month6_id,
          month6_id,
          month6_id,
          month7_id,
          month7_id,
          month7_id,
          month7_id,
          month8_id,
          month8_id,
          month8_id,
          month8_id,
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
  static add9monthweek(
    month1_id,
    month2_id,
    month3_id,
    month4_id,
    month5_id,
    month6_id,
    month7_id,
    month8_id,
    month9_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES" +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [
          month1_id,
          month1_id,
          month1_id,
          month1_id,
          month2_id,
          month2_id,
          month2_id,
          month2_id,
          month3_id,
          month3_id,
          month3_id,
          month3_id,
          month4_id,
          month4_id,
          month4_id,
          month4_id,
          month5_id,
          month5_id,
          month5_id,
          month5_id,
          month6_id,
          month6_id,
          month6_id,
          month6_id,
          month7_id,
          month7_id,
          month7_id,
          month7_id,
          month8_id,
          month8_id,
          month8_id,
          month8_id,
          month9_id,
          month9_id,
          month9_id,
          month9_id,
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
  static add10monthweek(
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
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES" +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [
          month1_id,
          month1_id,
          month1_id,
          month1_id,
          month2_id,
          month2_id,
          month2_id,
          month2_id,
          month3_id,
          month3_id,
          month3_id,
          month3_id,
          month4_id,
          month4_id,
          month4_id,
          month4_id,
          month5_id,
          month5_id,
          month5_id,
          month5_id,
          month6_id,
          month6_id,
          month6_id,
          month6_id,
          month7_id,
          month7_id,
          month7_id,
          month7_id,
          month8_id,
          month8_id,
          month8_id,
          month8_id,
          month9_id,
          month9_id,
          month9_id,
          month9_id,
          month10_id,
          month10_id,
          month10_id,
          month10_id,
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
  static add11monthweek(
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
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES" +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [
          month1_id,
          month1_id,
          month1_id,
          month1_id,
          month2_id,
          month2_id,
          month2_id,
          month2_id,
          month3_id,
          month3_id,
          month3_id,
          month3_id,
          month4_id,
          month4_id,
          month4_id,
          month4_id,
          month5_id,
          month5_id,
          month5_id,
          month5_id,
          month6_id,
          month6_id,
          month6_id,
          month6_id,
          month7_id,
          month7_id,
          month7_id,
          month7_id,
          month8_id,
          month8_id,
          month8_id,
          month8_id,
          month9_id,
          month9_id,
          month9_id,
          month9_id,
          month10_id,
          month10_id,
          month10_id,
          month10_id,
          month11_id,
          month11_id,
          month11_id,
          month11_id,
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
  static add12monthweek(
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
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `week`( `week_number`, `month_id`,`weekly_photo` , `comments`) VALUES" +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')," +
          "('Week One',?,'',''),('Week Two',?,'',''),('Week Three',?,'',''),('Week Four',?,'','')",
        [
          month1_id,
          month1_id,
          month1_id,
          month1_id,
          month2_id,
          month2_id,
          month2_id,
          month2_id,
          month3_id,
          month3_id,
          month3_id,
          month3_id,
          month4_id,
          month4_id,
          month4_id,
          month4_id,
          month5_id,
          month5_id,
          month5_id,
          month5_id,
          month6_id,
          month6_id,
          month6_id,
          month6_id,
          month7_id,
          month7_id,
          month7_id,
          month7_id,
          month8_id,
          month8_id,
          month8_id,
          month8_id,
          month9_id,
          month9_id,
          month9_id,
          month9_id,
          month10_id,
          month10_id,
          month10_id,
          month10_id,
          month11_id,
          month11_id,
          month11_id,
          month11_id,
          month12_id,
          month12_id,
          month12_id,
          month12_id,
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
module.exports = WeekModel;
