const db = require("../config/db");
class GymModel {
  // static getData() {
  //   return new Promise((resolve) => {
  //     db.query("select * from gym", [], (err, result) => {
  //       if (!err) {
  //         resolve(result);
  //       }
  //       resolve(err);
  //     });
  //   });
  // }
  static getData() {
    return new Promise((resolve) => {
      db.query("select * from gym", [], (err, result) => {
        if (!err) {
          resolve(result);
        }
        resolve(err);
      });
    });
  }
  static updatedatawitout_photo(Email, Name, gym_desc, Location, About) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE gym SET Name= ? ,gym_desc= ? ,Location=? ,Email=?  ,About= ?   WHERE 1",
        [Name, gym_desc, Location, Email, About],
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
  static updateLocation(latitude, longitude) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE gym SET latitude= ? ,longitude= ?  WHERE 1",
        [latitude, longitude],
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
  static updatedata(Email, logo, Name, gym_desc, Location, About) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE gym SET Name= ? ,gym_desc= ? ,Location=? ,Email=?  ,About= ?,Logo= ?  WHERE 1",
        [Name, gym_desc, Location, Email, About, logo],
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
  static async addGym(Name, Email) {
    return new Promise((resolve) => {
      db.query(
        "insert into gym (Name, Email) values(?,?)",
        [Name, Email],
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
  static async deleteGym(id) {
    return new Promise((resolve) => {
      db.query("delete from gym where Name=?", [id], (err, result) => {
        if (err) {
          resolve(false);
        }
        resolve(true);
      });
    });
  }
}

module.exports = GymModel;
