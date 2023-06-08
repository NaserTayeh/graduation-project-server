const db = require("../config/db");
class coachModel {
  static addcoach(
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
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `coach` (`Coach_id`, `Height`, `Weight`, `Year_of_exp`, `Age`, `coaching_Foucs`, `Gender`, `Full_name`, `Personal_pic`, `Qualifications`, `Nationality`, `Skills_id`, `capacity`, `subscription_tax`, `Salary`, `Language`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ",
        [
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
          Language,
        ],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            }
            resolve(false);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static get_deactivated_req() {
    return new Promise((resolve) => {
      db.query(
        " SELECT * FROM coach WHERE active = 0 and  pending =   1 ",
        [],
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static get_paired_req() {
    return new Promise((resolve) => {
      db.query(
        " SELECT * FROM coach WHERE pending = 0; ",
        [],
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static get_active_req() {
    return new Promise((resolve) => {
      db.query(
        " SELECT * FROM coach WHERE active = 1 and  pending =   1 ",
        [],
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static get_avilable_coaches() {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM coach WHERE Number_trainee < capacity",
        [],
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static setCounter(coach_id, amount) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE coach SET Number_trainee= ?  WHERE Coach_id= ? ",
        [amount, coach_id],
        (err, res) => {
          if (!err) {
            if (res.affectedRows > 0) resolve(true);
            else resolve(false);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static getCounter(coach_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT Number_trainee  FROM coach WHERE Coach_id = ?",
        [coach_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static addcoach_withoutphoto(
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
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `coach` (`Coach_id`, `Height`, `Weight`, `Year_of_exp`, `Age`, `coaching_Foucs`, `Gender`, `Full_name` , `Qualifications`, `Nationality`, `Skills_id`, `capacity`, `subscription_tax`, `Salary`, `Language`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ",
        [
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
          Language,
        ],
        (err, result) => {
          console.log(result);

          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            }
            resolve(false);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static set_skillList_id(Skills_id, Coach_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE coach SET  Skills_id= ? WHERE Coach_id = ? ",
        [Skills_id, Coach_id],
        (err, res) => {
          if (!err) {
            if (res.affectedRows > 0) resolve(true);
            else resolve(false);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static updateCoachData(
    Weight,
    Height,
    Age,
    YearsOfExp,
    coachFocus,
    SubscribtionTax,
    coachCapacity,
    coach_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE coach  SET  `Weight` = ? , `Height` = ? , `Age` = ? , `Year_of_exp` = ? , `coaching_Foucs` = ? , `subscription_tax` =? , `capacity` =?  WHERE Coach_id = ? ",
        [
          Weight,
          Height,
          Age,
          YearsOfExp,
          coachFocus,
          SubscribtionTax,
          coachCapacity,
          coach_id,
        ],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            }
            console.log(result);
            resolve(false);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static un_enable_request(coach_id) {
    console.log(coach_id);
    return new Promise((resolve) => {
      db.query(
        "UPDATE `coach` SET active = 0 WHERE Coach_id = ?",
        [coach_id],
        (err, res) => {
          if (!err) {
            console.log(res);
            resolve(true);
          } else {
            console.log(err);

            resolve(false);
          }
        }
      );
    });
  }
  static delete_request(coach_id) {
    return new Promise((resolve) => {
      db.query(
        "DELETE FROM coach WHERE Coach_id = ?",
        [coach_id],
        (err, res) => {
          if (!err) {
            if (res.affectedRows > 0) resolve(true);
            else resolve(false);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static enable_request(coach_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE coach SET active = 1 WHERE Coach_id = ?",
        [coach_id],
        (err, res) => {
          if (!err) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static count_coach() {
    return new Promise((resolve) => {
      db.query("SELECT * FROM coach WHERE 1", [], (err, result) => {
        if (!err) {
          const count = result.length;
          resolve({ count: count });
        }
        resolve(err);
      });
    });
  }
  static un_pend_request(coach_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE coach SET active = 0 ,pending= 1 WHERE Coach_id = ?",
        [coach_id],
        (err, res) => {
          if (!err) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static get_all_disaled_request() {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM coach WHERE pending = 1 and active = 0 ",
        [],
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static get_all_pending_request() {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM coach WHERE pending = 0 and active = 0 ",
        [],
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  // static get_all_accepted_request() {
  //   return new Promise((resolve) => {
  //     db.query(
  //       "SELECT * FROM coach WHERE pending = 1 and active = 1 ",
  //       [],
  //       (err, result) => {
  //         if (!err) {
  //           resolve(result);
  //         }
  //         resolve(err);
  //       }
  //     );
  //   });
  // }
  static get_all_accepted_request() {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM coach WHERE pending = 0 and active = 1 ",
        [],
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static CoachRetriveData(Coach_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM coach WHERE Coach_id = ? ",
        [Coach_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static get_all_coach() {
    return new Promise((resolve) => {
      db.query("SELECT * FROM coach WHERE 1", [], (err, result) => {
        if (!err) {
          resolve(result);
        }
        resolve(err);
      });
    });
  }

  static getData() {
    return new Promise((resolve) => {
      db.query("SELECT * FROM `coach` WHERE 1 ", [], (err, result) => {
        if (!err) {
          resolve(result);
        }
        resolve(err);
      });
    });
  }

  static async countcoachs() {
    return new Promise((resolve) => {
      db.query("SELECT  *  FROM `coach` where 1 ", [], (err, result) => {
        if (!err) {
          console.log(result);
          resolve(result);
        } else {
          resolve({
            message: err,
          });
        }
      });
    });
  }
}
module.exports = coachModel;
