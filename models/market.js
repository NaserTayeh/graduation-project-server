const db = require("../config/db");
class market {
  static async getItemQuantity(supplement_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT Quantity_Stock  FROM market WHERE supplement_id = ?",
        [supplement_id],
        (err, res) => {
          if (!err) {
            console.log(res);
            resolve(res[0]);
          } else {
            console.log(res[0]);
            resolve(err);
          }
        }
      );
    });
  }
  static async decrease_value(supplement_id, end_amount) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE market SET Quantity_Stock=? WHERE supplement_id = ?",
        [end_amount, supplement_id],
        (err, res) => {
          if (!err) {
            if (res.affectedRows > 0) {
              resolve(true);
            } else {
              resolve(false);
            }
          } else {
            resolve(err);
          }
        }
      );
    });
  }

  static async UpdateItemWithoutPhoto(
    supplement_id,
    supplement_name,
    supplement_desc,
    Protein,
    Carbohydrates,
    fats,
    Vitamins,
    hydration,
    Quantity_Stock,
    price,
    Flavor,
    categorie
  ) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE market SET supplement_name=?, supplement_desc=?,Protein=?,Carbohydrates= ?,fats=?,Vitamins=?,hydration=?,Quantity_Stock=?,price=?,Flavor=?,categorie=? WHERE supplement_id=?",
        [
          supplement_name,
          supplement_desc,
          Protein,
          Carbohydrates,
          fats,
          Vitamins,
          hydration,
          Quantity_Stock,
          price,
          Flavor,
          categorie,
          supplement_id,
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
  static async getItemCategorie(categorie_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `market` WHERE `categorie` = ? ",
        [categorie_id],
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
  static async UpdateItem(
    supplement_id,
    supplement_name,
    logo,
    supplement_desc,
    Protein,
    Carbohydrates,
    fats,
    Vitamins,
    hydration,
    Quantity_Stock,
    price,
    Flavor,
    categorie
  ) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE market SET supplement_name=?,logo=?,supplement_desc=?,Protein=?,Carbohydrates= ?,fats=?,Vitamins=?,hydration=?,Quantity_Stock=?,price=?,Flavor=?,categorie=? WHERE supplement_id=?",
        [
          supplement_name,
          logo,
          supplement_desc,
          Protein,
          Carbohydrates,
          fats,
          Vitamins,
          hydration,
          Quantity_Stock,
          price,
          Flavor,
          categorie,
          supplement_id,
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
  static async getAllMarketItems() {
    return new Promise((resolve) => {
      db.query("SELECT  *  FROM `market`", [], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          resolve({
            message: err,
          });
        }
      });
    });
  }
  static async deleteStoreItem(id) {
    return new Promise((resolve) => {
      db.query(
        "delete from market where supplement_id=?",
        [id],
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

  static async GetItemsCategorie(categorie_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `market` WHERE `categorie` = ? ",
        [categorie_id],
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

  static async getItemCat(categorie_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT  *  FROM `market` WHERE `categorie` = ? ",
        [categorie_id],
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

  static async addNewItem(
    supplement_name,
    logo,
    supplement_desc,
    Protein,
    Carbohydrates,
    fats,
    Vitamins,
    hydration,
    Quantity_Stock,
    price,
    Flavor,
    categorie
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO `market`( `supplement_name`, `logo`, `supplement_desc`, `Protein`, `Carbohydrates`, `fats`, `Vitamins`, `hydration`, `Quantity_Stock`, `price`, `Flavor`, `categorie`) VALUES (?,?,?,? ,?,?,?,? ,?,?,?,?)",
        [
          supplement_name,
          logo,
          supplement_desc,
          Protein,
          Carbohydrates,
          fats,
          Vitamins,
          hydration,
          Quantity_Stock,
          price,
          Flavor,
          categorie,
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

module.exports = market;
