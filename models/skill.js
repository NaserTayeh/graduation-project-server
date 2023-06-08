const db = require("../config/db");
class skill {
  static skillshow(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM `skill` WHERE `Trainee_id` = ? ",
        [Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            resolve(err);
          }
        }
      );
    });
  }
  static getSkill(skill_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM `skill` WHERE `Skill_id` = ? ",
        [skill_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            resolve(err);
          }
        }
      );
    });
  }

  static deletelist(Trainee_id, Skill_id) {
    console.log(Trainee_id, Skill_id);
    return new Promise((resolve) => {
      db.query(
        "DELETE FROM `skill` WHERE `Trainee_id` = ? AND `Skill_id` = ? ",
        [Trainee_id, Skill_id],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            } else {
              console.log(result);
              resolve(false);
            }
          } else {
            resolve(err);
          }
        }
      );
    });
  }

  static get_skills_lists(Trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT `Skill_id` FROM `skill` WHERE `Trainee_id` = ? ",
        [Trainee_id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            resolve(err);
          }
        }
      );
    });
  }

  static Add_skill_list(
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
  ) {
    var sql =
      "INSERT INTO `skill`(  `Powerlifting`, `Bodyweight`, `Cardiovascular`, `Yoga`, `Calisthenics`, `High_Intensity`, `Boxing`, `Bodybuilding`, `CrossFit`,`Trainee_id`) " +
      "VALUES ( ?,?,?,?,?,?,?,?,?,?)";
    return new Promise((resolve) => {
      db.query(
        sql,
        [
          Powerlifting,
          Bodyweight,
          Cardiovascular,
          Yoga,
          Calisthenics,
          High_Intensity,
          Boxing,
          Bodybuilding,
          CrossFit,
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
}

module.exports = skill;
