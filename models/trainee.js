const db = require("../config/db");
class traineeModel {
  static getData(Email, Password) {
    return new Promise((resolve) => {
      //`select Email , Password from person where Email = ${Email} AND Password = ${Password}`
      db.query(
        "SELECT  *   FROM `person` WHERE `Email` = ? AND `Password` = ?;",
        [Email, Password],
        (err, result) => {
          if (!err) {
            resolve(result);
          }

          resolve(err);
        }
      );
    });
  }
  static set_coache_to_trainee(Trainee_id, coach_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET  coach_id= ? WHERE Trainee_id = ?",
        [coach_id, Trainee_id],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
          resolve(err);
        }
      );
    });
  }
  static getPremTrainee(Email, Password) {
    return new Promise((resolve) => {
      //`select Email , Password from person where Email = ${Email} AND Password = ${Password}`
      db.query(
        "SELECT  *   FROM `person` WHERE `Email` = ? AND `Password` = ?;",
        [Email, Password],
        (err, result) => {
          if (!err) {
            resolve(result);
          }

          resolve(err);
        }
      );
    });
  }
  static count_trainee() {
    return new Promise((resolve) => {
      db.query("SELECT * FROM trainee WHERE 1", [], (err, result) => {
        if (!err) {
          const count = result.length;
          resolve({ count: count });
        }
        resolve(err);
      });
    });
  }
  static get_all_trainee() {
    return new Promise((resolve) => {
      db.query("SELECT * FROM trainee WHERE 1", [], (err, result) => {
        if (!err) {
          resolve(result);
        }
        resolve(err);
      });
    });
  }
  static getpayment(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT trainee.FullName , coach.Full_name , trainee.montly_sub_pay , trainee.start_pay , trainee.end_pay , trainee.period , trainee.Trainee_id " +
          " FROM trainee " +
          "JOIN coachs_requests ON coachs_requests.trainee_id = trainee.Trainee_id" +
          " JOIN coach ON coach.Coach_id = coachs_requests.coach_id WHERE trainee.Trainee_id = ?;",
        [Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static primpick(Trainee_id, start_date, end_date, period, montly_sub_pay) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET start_pay= ? , end_pay = ? , period = ? ,montly_sub_pay = ? , is_prem = 1  WHERE Trainee_id = ?",
        [start_date, end_date, period, montly_sub_pay, Trainee_id],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
          resolve(err);
        }
      );
    });
  }
  static AssignNutPlan(nutrients_plan_id, Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET nutrients_plan_id= ? WHERE Trainee_id = ?",
        [nutrients_plan_id, Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(true);
          }
          resolve(err);
        }
      );
    });
  }
  static updateBMI(bmi, Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET bmi= ? WHERE Trainee_id = ?",
        [bmi, Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(true);
          }
          resolve(err);
        }
      );
    });
  }
  static updateBodyLevel(bodylevel, Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET Fitness_level= ? WHERE Trainee_id = ?",
        [bodylevel, Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(true);
          }
          resolve(err);
        }
      );
    });
  }
  static updateGoal(goal, Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET goal= ? WHERE Trainee_id = ?",
        [goal, Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(true);
          }
          resolve(err);
        }
      );
    });
  }
  static updateActivityLevel(bodylevel, Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET activity_level= ? WHERE Trainee_id = ?",
        [bodylevel, Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(true);
          }
          resolve(err);
        }
      );
    });
  }
  static updateBasicInfo(age, height, weight, Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET Weight= ? , Age = ? , Height =?  WHERE Trainee_id = ?",
        [weight, age, height, Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(true);
          }
          resolve(err);
        }
      );
    });
  }
  static getNutritionPlanID(id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT nutrients_plan_id FROM trainee WHERE Trainee_id = ?;",
        [id],
        (err, result) => {
          if (!err) {
            resolve(result);
          }

          resolve(err);
        }
      );
    });
  }
  static getCurrentTrainee(Email) {
    return new Promise((resolve) => {
      //`select Email , Password from person where Email = ${Email} AND Password = ${Password}`
      db.query(
        "SELECT  *   FROM `person` WHERE `Email` = ?;",
        [Email],
        (err, result) => {
          if (!err) {
            resolve(result);
          }

          resolve(err);
        }
      );
    });
  }
  static getCurrentTrainee_id(Email) {
    return new Promise((resolve) => {
      //`select Email , Password from person where Email = ${Email} AND Password = ${Password}`
      db.query(
        "SELECT  *   FROM `person` WHERE `person_id` = ?;",
        [Email],
        (err, result) => {
          if (!err) {
            resolve(result);
          }

          resolve(err);
        }
      );
    });
  }
  static GetEndPay(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT end_pay FROM trainee WHERE Trainee_id = ?;",
        [Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          }

          resolve(err);
        }
      );
    });
  }
  static GetStartPay(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT start_pay FROM trainee WHERE Trainee_id = ?;",
        [Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          }

          resolve(err);
        }
      );
    });
  }
  static GetEndDate(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT end_date FROM trainee WHERE    Trainee_id = ?;",
        [Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          }

          resolve(err);
        }
      );
    });
  }
  static GetStartDate(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT start_date FROM trainee WHERE  Trainee_id = ?;",
        [Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          }

          resolve(err);
        }
      );
    });
  }
  static getCurrentTraineeAllInfo(Trainee_id) {
    return new Promise((resolve) => {
      //`select Email , Password from person where Email = ${Email} AND Password = ${Password}`
      db.query(
        "SELECT  *   FROM `trainee` WHERE `Trainee_id` = ?;",
        [Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          }

          resolve(err);
        }
      );
    });
  }
  static getAllTrainee() {
    return new Promise((resolve) => {
      db.query("SELECT * FROM `trainee` WHERE 1 ", [], (err, result) => {
        if (!err) {
          resolve(result);
        }
        resolve(err);
      });
    });
  }
  static SetStartDate(date, Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET start_date= ?  WHERE Trainee_id= ? ",
        [date, Trainee_id],
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
  static SetEndDate(date, Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET End_date= ? WHERE Trainee_id= ? ",
        [date, Trainee_id],
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
  static SetStartPay(date, Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET start_pay= ? WHERE Trainee_id= ? ",
        [date, Trainee_id],
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
  static SetEndPay(date, Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET end_pay= ? WHERE Trainee_id= ? ",
        [date, Trainee_id],
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
  static Signtrainee(
    Trainee_id,
    Height,
    Weight,
    Age,
    FullName,
    Gender,
    medical_conditions,
    Fitness_level
  ) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET Height = ?, Weight = ?,Age = ?, FullName = ?,Gender = ?,medical_conditions = ?,Fitness_level = ? WHERE Trainee_id = ?;  ",
        [
          Height,
          Weight,
          Age,
          FullName,
          Gender,
          medical_conditions,
          Fitness_level,
          Trainee_id,
        ],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            }
            resolve(false);
          }
          resolve(err);
        }
      );
    });
  }
  static addID(id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `trainee` (`Trainee_id`) VALUES (?)",
        [id],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve({
                message: "Added",
              });
            }
            resolve({
              message: "Not Added",
            });
          } else {
            resolve({
              message: "Duplicate entry Id",
            });
          }
        }
      );
    });
  }
  static addtrainee(
    Trainee_id,
    Height,
    Weight,
    Age,
    FullName,
    Gender,
    medical_conditions,
    Fitness_level
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `trainee` (`Trainee_id`, `Height`, `Weight`, `Age`, `FullName`, `Gender`,  `medical_conditions`, `Fitness_level`) VALUES (? , ? , ? , ? , ? , ? , ? , ?)",
        [
          Trainee_id,
          Height,
          Weight,
          Age,
          FullName,
          Gender,
          medical_conditions,
          Fitness_level,
        ],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            }
            resolve(false);
          }
          resolve(err);
        }
      );
    });
  }
  static save_photo(photo_path, Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE trainee SET Personal_pic = ? WHERE Trainee_id= ? ",
        [photo_path, Trainee_id],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve({
                message: "Added",
              });
            }
            resolve({
              message: "Not Added",
            });
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
module.exports = traineeModel;
