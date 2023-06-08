const db = require("../config/db");
class NutritionModel {
  static getData() {
    return new Promise((resolve) => {
      db.query("select * from nutrients_plan", [], (err, result) => {
        if (!err) {
          resolve(result);
        }
        resolve(err);
      });
    });
  }
  static getWaterNeed(id) {
    return new Promise((resolve) => {
      db.query(
        "select Water_need from nutrients_plan Where nutrients_plan_id = ?",
        [id],
        (err, result) => {
          console.log(result);
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static setcal(nutrients_plan_id, end_amount) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE nutrients_plan SET  Calories_taken= ? WHERE nutrients_plan_id = ?",
        [end_amount, nutrients_plan_id],
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

  static getcal(id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  Calories_taken FROM nutrients_plan WHERE nutrients_plan_id = ?",
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
  static getWaterTaken(id) {
    return new Promise((resolve) => {
      db.query(
        "select Water_taken from nutrients_plan Where nutrients_plan_id = ?",
        [id],
        (err, result) => {
          console.log(result);
          if (!err) {
            resolve(result);
          }
          resolve(err);
        }
      );
    });
  }
  static SetWaterTaken(id, water) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE nutrients_plan SET Water_taken= ?  WHERE nutrients_plan_id = ? ",
        [water, id],
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
  static getDataID(id) {
    return new Promise((resolve) => {
      db.query(
        "select * from nutrients_plan Where nutrients_plan_id = ?",
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
  static async addNutritonPlan(
    Vitamins_need,
    Water_need,
    Proteins_need,
    Carbohydrates_need,
    ntrition_plan_name,
    Calories_need
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `nutrients_plan`( `Carbohydrates_need`, `Proteins_need`, `Water_need`, `Vitamins_need`,`ntrition_plan_name`,`Calories_need`) VALUES (?,?,?,?,?,?)",
        [
          Carbohydrates_need,
          Proteins_need,
          Water_need,
          Vitamins_need,
          ntrition_plan_name,
          Calories_need,
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
  static async deleteNutritonPlan(id) {
    return new Promise((resolve) => {
      db.query(
        "delete from nutrients_plan where nutrients_plan_id=?",
        [id],
        (err, result) => {
          if (err) {
            resolve(false);
          }
          resolve(true);
        }
      );
    });
  }
  static async updateNutritonPlan(
    id,
    Vitamins_need,
    Water_need,
    Proteins_need,
    Carbohydrates_need,
    ntrition_plan_name
  ) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE `nutrients_plan` SET  `ntrition_plan_name`=? ,`Carbohydrates_need`=?,`Proteins_need`=?,`Water_need`=?,`Vitamins_need`=? WHERE nutrients_plan_id=? ",
        [
          ntrition_plan_name,
          Carbohydrates_need,
          Proteins_need,
          Water_need,
          Vitamins_need,
          id,
        ],
        (err, result) => {
          if (err) {
            console.log(err);
            resolve(false);
          }
          resolve(true);
        }
      );
    });
  }
}

module.exports = NutritionModel;
