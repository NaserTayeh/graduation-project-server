const db = require("../config/db");
class coachs_requests_Model {
  static async RemoveRequest(coach_id, trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "delete from coachs_requests where coach_id=? and trainee_id=?",
        [coach_id, trainee_id],
        (err, result) => {
          if (err) {
            resolve({
              flag: "Erorr",
              message: "Erorr in delete request",
            });
          } else if (result.affectedRows > 0) {
            resolve({
              flag: "yes",
              message: "delete successfully",
            });
          } else {
            resolve({
              flag: "no",
              message: "this id is not true",
            });
          }
        }
      );
    });
  }
  static async is_accepted(trainee_id) {
    return new Promise((resolve) => {
      console.log(trainee_id);
      db.query(
        "SELECT * FROM coachs_requests JOIN coach ON coach.Coach_id = coachs_requests.coach_id where  trainee_id = ?;",
        [trainee_id],
        (err, result) => {
          console.log(result);
          if (result[0]["accepted"] == 0) {
            //not accepted
            resolve({
              coach_id: result[0]["coach_id"],
              accepted: "Pending",
              Personal_pic: result[0]["Personal_pic"],
              Qualifications: result[0]["Qualifications"],
              Nationality: result[0]["Nationality"],
              subscription_tax: result[0]["subscription_tax"],
              Full_name: result[0]["Full_name"],
              coaching_Foucs: result[0]["coaching_Foucs"],
            });
          } else {
            resolve({
              coach_id: result[0]["coach_id"],
              accepted: "Accepted",
              Personal_pic: result[0]["Personal_pic"],
              Qualifications: result[0]["Qualifications"],
              Nationality: result[0]["Nationality"],
              subscription_tax: result[0]["subscription_tax"],
              Full_name: result[0]["Full_name"],

              coaching_Foucs: result[0]["coaching_Foucs"],
            });
          }
        }
      );
    });
  }
  static async countRequest(coach_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `coachs_requests` where coach_id =? and accepted != 1  ",
        [coach_id],
        (err, result) => {
          if (!err) {
            console.log(result);
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
  static async AcceptedRequest(coach_id, trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE coachs_requests SET accepted= 1 WHERE coach_id = ? AND trainee_id = ?",
        [coach_id, trainee_id],
        (err, result) => {
          if (err) {
            resolve({
              flag: "Erorr",
              message: "Erorr accept request",
            });
          } else if (result.affectedRows > 0) {
            resolve({
              flag: "yes",
            });
          } else {
            resolve({
              flag: "no",
            });
          }
        }
      );
    });
  }
  static async addNewItem(coach_id, trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO coachs_requests (coach_id, trainee_id) SELECT " +
          coach_id +
          " , " +
          trainee_id +
          " WHERE NOT EXISTS (SELECT " +
          coach_id +
          "  FROM coachs_requests WHERE coach_id = " +
          coach_id +
          " AND trainee_id = " +
          trainee_id +
          ")",
        [],
        (err, res) => {
          if (!err) {
            resolve(res);
          } else {
            console.log(err);
            resolve(false);
          }
        }
      );
    });
  }
  static async GetRequests(owner_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `coachs_requests` where coach_id = ? and accepted != 1  ",
        [owner_id],
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
  static async GetAcceptedTrainee(owner_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `coachs_requests` where coach_id = ? and `accepted` = 1  ",
        [owner_id],
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
  static async GetCoachRequestForTrainee(trainee_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `coachs_requests` where trainee_id = ?   ",
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

  static async GettraineeNumber(owner_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `coachs_requests` where coach_id = ? ",
        [owner_id],
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
module.exports = coachs_requests_Model;
