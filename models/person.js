const db = require("../config/db");
class personModel {
  static setpass(NewPassword, Email) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE `person` SET `Password`=? WHERE `Email` = ?",
        [NewPassword, Email],
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
  static getdataadmin(admin) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM  person WHERE Email = ? ",
        [admin],
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
  static updateinfo(Password, Email, phone_number, User_Name, person_id) {
    return new Promise((resolve) => {
      console.log(Password, Email, phone_number, User_Name, person_id);
      db.query(
        "UPDATE `person` SET `Password`= ? , `phone_number`= ? ,  `User_Name`= ?  WHERE `person_id`= ?",
        [Password, phone_number, User_Name, person_id],
        (err, result) => {
          console.log("-----------------------");
          console.log(result);
          if (!err) {
            if (result.affectedRows > 0) {
              console.log(result);
              resolve(true);
            }
            console.log(result);
            console.log(result);
            resolve(false);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static addadmin_photo(filePath, email) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE person SET Personal_pic= ? WHERE Email= ?",
        [filePath, email],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            }
            // console.log(result);
            resolve(false);
          } else {
            resolve(false);
          }
        }
      );
    });
  }
  static edit_data_withoutphoto(
    Password,
    Email,
    phone_number,
    FullName,
    Trainee_id
  ) {
    console.log(Password, Email, phone_number, FullName, Trainee_id);
    return new Promise((resolve) => {
      db.query(
        "UPDATE person JOIN trainee ON person.person_id = trainee.Trainee_id SET  person.Password = ? ,person.Email = ? ,person.phone_number = ? , trainee.FullName = ? WHERE trainee.Trainee_id = ? ",
        [Password, Email, phone_number, FullName, Trainee_id],
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
  static edit_data_withoutphoto_coach(
    Password,
    Email,
    phone_number,
    FullName,
    Trainee_id
  ) {
    console.log(Password, Email, phone_number, FullName, Trainee_id);
    return new Promise((resolve) => {
      db.query(
        "UPDATE person JOIN coach ON person.person_id = coach.Coach_id SET  person.Password = ? ,person.Email = ? ,person.phone_number = ? , coach.Full_name = ? WHERE coach.Coach_id = ? ",
        [Password, Email, phone_number, FullName, Trainee_id],
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
  static edit_data(
    Password,
    Email,
    phone_number,
    FullName,
    Trainee_id,
    Personal_pic
  ) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE person " +
          "JOIN trainee ON person.person_id = trainee.Trainee_id " +
          "SET trainee.Personal_pic = ? ,person.Password = ? ,person.Email = ? ,person.phone_number = ? , trainee.FullName = ? " +
          "WHERE trainee.Trainee_id = ? ",
        [Personal_pic, Password, Email, phone_number, FullName, Trainee_id],
        (err, result) => {
          console.log(result);
          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            }
            resolve(false);
          } else {
            console.log(err);
            resolve(false);
          }
        }
      );
    });
  }
  static edit_data_coach(
    Password,
    Email,
    phone_number,
    FullName,
    Trainee_id,
    Personal_pic
  ) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE person " +
          "JOIN coach ON person.person_id = coach.Coach_id " +
          "SET coach.Personal_pic = ? ,person.Password = ? ,person.Email = ? ,person.phone_number = ? , coach.Full_name = ? " +
          "WHERE coach.Coach_id = ? ",
        [Personal_pic, Password, Email, phone_number, FullName, Trainee_id],
        (err, result) => {
          console.log(result);
          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            }
            resolve(false);
          } else {
            console.log(err);
            resolve(false);
          }
        }
      );
    });
  }

  static check_admin(Password, Email) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM  `person` WHERE Email = ? AND  Password = ?",
        [Email, Password],
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

  static get_person_id_admin(Email, Password) {
    return new Promise((resolve) => {
      db.query(
        "SELECT `person_id` FROM  `person` WHERE Email = ? AND  Password = ?",
        [Email, Password],
        (err, result) => {
          if (!err) {
            if (result.length > 0) {
              var data = result[0].person_id.toString();
              resolve(data);
            } else {
              resolve("This Account Dose not exeist");
            }
          } else {
            resolve(err);
          }
        }
      );
    });
  }

  static addPerson(Password, Email, User_Name, Phone_Num, person_id) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `person`(`person_id`, `Password`, `Email`, `phone_Number`, `User_Name`) VALUES (?,?,?,?,?) ",
        [person_id, Password, Email, Phone_Num, User_Name],
        (err, result) => {
          if (!err) {
            if (result.affectedRows > 0) {
              resolve(true);
            }
            resolve(err);
          } else {
            resolve(err);
          }
        }
      );
    });
  }

  static get_person_id(Email) {
    return new Promise((resolve) => {
      db.query(
        "SELECT `person_id` FROM `person` WHERE Email = ?",
        [Email],
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
  static get_persons_date() {
    return new Promise((resolve) => {
      db.query(
        "SELECT `join_date` FROM `person` WHERE 1",
        [],
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
  static updatePerson(
    filePath,
    email,
    password,
    phoneNumber,
    userName,
    person_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE `person` SET  `Password`=?,`Email`=?,`phone_number`=?,`User_Name`=? WHERE `person_id`=?",
        [password, email, phoneNumber, userName, person_id],
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
module.exports = personModel;
