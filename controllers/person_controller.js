const personModel = require("../models/person");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = req.params.folderName;
    console.log(folderName);
    cb(null, "./Upload/" + folderName);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
class personContrller {
  static async setpass(req, res) {
    var NewPassword = req.body.NewPassword;
    var Email = req.body.Email;
    var result = await personModel.setpass(NewPassword, Email);
    if (result == true) {
      res.send({
        message: "Password Set Successflly",
        status: 200,
      });
    } else {
      res.send({
        message: "Faield to Set Password",
        status: 400,
      });
    }
  }
  static async getdataadmin(req, res) {
    var email = req.body.email;
    var result = await personModel.getdataadmin(email);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async addadmin_photo(req, res) {
    upload.single("photo")(req, res, async function (err) {
      if (err) {
        // console.log(err);
        return res.status(400).json({ error: "Error uploading file" });
      }
      if (!req.file) {
        return res.status(400).json({ error: "No file found in request" });
      }
      const folderName = req.params.folderName;
      const email = req.body.Email;
      const filePath = `/Upload/${folderName}/${req.file.filename}`;
      try {
        var result = await personModel.addadmin_photo(filePath, email);

        res.status(200).json({ message: "photo updated successfully" });
      } catch (error) {
        // console.log(error);
        res.status(500).json({ error: "Error saving file path in database" });
      }
    });
  }
  static async edit_data_withoutphoto(req, res) {
    const Password = req.body.Password;
    const Email = req.body.Email;
    const phone_number = req.body.phone_number;
    const FullName = req.body.FullName;
    const Trainee_id = req.body.Trainee_id;
    var result = await personModel.edit_data_withoutphoto(
      Password,
      Email,
      phone_number,
      FullName,
      Trainee_id
    );
    console.log(result);
    if (result) {
      res.send({
        message: "Edited",
        status: true,
      });
    } else {
      res.send({
        message: "Not Edited",
      });
    }
  }
  static async edit_data_withoutphoto_coach(req, res) {
    const Password = req.body.Password;
    const Email = req.body.Email;
    const phone_number = req.body.phone_number;
    const FullName = req.body.FullName;
    const Trainee_id = req.body.Trainee_id;
    var result = await personModel.edit_data_withoutphoto_coach(
      Password,
      Email,
      phone_number,
      FullName,
      Trainee_id
    );
    console.log(result);
    if (result) {
      res.send({
        message: "Edited",
        status: true,
      });
    } else {
      res.send({
        message: "Not Edited",
      });
    }
  }
  static async edit_data(req, res) {
    upload.single("photo")(req, res, async function (err) {
      const Password = req.body.Password;
      const Email = req.body.Email;
      const phone_number = req.body.phone_number;
      const FullName = req.body.FullName;
      const Trainee_id = req.body.Trainee_id;
      const folderName = req.params.folderName;
      var Personal_pic = `/Upload/${folderName}/${req.file.filename}`;
      var result = await personModel.edit_data(
        Password,
        Email,
        phone_number,
        FullName,
        Trainee_id,
        Personal_pic
      );
      console.log(result);
      if (result) {
        res.send({
          message: "Edited",
          status: true,
        });
      } else {
        res.send({
          message: "ERORR Not Edited",
        });
      }
      if (err) {
        console.log(err);
        return res.status(400).json({ error: "Error uploading file" });
      }
      if (!req.file) {
        return res.status(400).json({ error: "No file found in request" });
      }
    });
  }
  static async edit_data_coach(req, res) {
    upload.single("photo")(req, res, async function (err) {
      const Password = req.body.Password;
      const Email = req.body.Email;
      const phone_number = req.body.phone_number;
      const FullName = req.body.FullName;
      const Trainee_id = req.body.Trainee_id;
      const folderName = req.params.folderName;
      var Personal_pic = `/Upload/${folderName}/${req.file.filename}`;
      var result = await personModel.edit_data_coach(
        Password,
        Email,
        phone_number,
        FullName,
        Trainee_id,
        Personal_pic
      );
      console.log(result);
      if (result) {
        res.send({
          message: "Edited",
          status: true,
        });
      } else {
        res.send({
          message: "ERORR Not Edited",
        });
      }
      if (err) {
        console.log(err);
        return res.status(400).json({ error: "Error uploading file" });
      }
      if (!req.file) {
        return res.status(400).json({ error: "No file found in request" });
      }
    });
  }
  static async updateinfo(req, res) {
    const Password = req.body.Password;
    const Email = req.body.Email;
    const phone_number = req.body.phone_number;
    const User_Name = req.body.User_Name;
    const person_id = req.body.person_id;
    console.log(Password, Email, phone_number, User_Name, person_id);
    var result = await personModel.updateinfo(
      Password,
      Email,
      phone_number,
      User_Name,
      person_id
    );
    console.log(result);
    if (result) {
      res.send({
        message: "Edited",
        status: true,
      });
    } else {
      res.send({
        message: "Not Edited",
      });
    }
  }
  static async get_person_id(req, res) {
    var Email = req.body.Email;
    var result = await personModel.get_person_id(Email);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "Erorr",
        status: 400,
      });
    }
  }
  static async get_persons_date(req, res) {
    var result = await personModel.get_persons_date();
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "Erorr",
        status: 400,
      });
    }
  }

  static async get_person_id_admin(req, res) {
    var Email = req.body.Email;
    var Password = req.body.Password;
    var result = await personModel.get_person_id_admin(Email, Password);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "Erorr",
        status: 400,
      });
    }
  }

  static async addPerson(req, res) {
    //person table
    var Password = req.body.Password;
    var Email = req.body.Email;
    var User_Name = req.body.User_Name;
    var Phone_Num = req.body.Phone_Num;
    var person_id = req.body.person_id;
    var result = await personModel.addPerson(
      Password,
      Email,
      User_Name,
      Phone_Num,
      person_id
    );
    if (result == true) {
      res.send({
        message: "Added",
        status: 200,
      });
    } else {
      res.send({
        message: "Failed To Add Person",
        status: 400,
        error: result,
      });
    }
  }

  static async check_admin(req, res) {
    var Password = req.body.Password;
    var Email = req.body.Email;
    var result = await personModel.check_admin(Password, Email);
    if (result.length > 0) {
      res.send({
        message: "Accepted",
        status: 200,
      });
    } else {
      res.send({
        message: "Not Accepted",
        status: 400,
      });
    }
  }
  static async updatePersonData(req, res, next) {
    upload.single("photo")(req, res, async function (err) {
      if (err) {
        console.log(err);
        return res.status(400).json({ error: "Error uploading file" });
      }
      if (!req.file) {
        return res.status(400).json({ error: "No file found in request" });
      }
      const folderName = req.params.folderName;
      const email = req.body.email;
      const password = req.body.password;
      const phoneNumber = req.body.phoneNumber;
      const userName = req.body.userName;
      const personId = req.body.personId;

      const filePath = `/Upload/${folderName}/${req.file.filename}`;
      try {
        var result = await personModel.updatePerson(
          filePath,
          email,
          password,
          phoneNumber,
          userName,
          personId
        );
        console.log(result);
        res.status(200).json({ message: "recipe updated successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error saving file path in database" });
      }
    });
  }
}
module.exports = personContrller;
