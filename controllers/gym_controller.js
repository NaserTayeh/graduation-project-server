const userModel = require("../models/gym");
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
class GymController {
  // static async getAllData(req, res) {
  //   var result = await userModel.getData();
  //   if (result) {
  //     res.send(result);
  //   }
  // }
  static async getAllData(req, res) {
    var result = await userModel.getData();
    if (result) {
      res.send(result);
    } else {
      res.send({ body: [] });
    }
  }
  static async updatedatawitout_photo(req, res) {
    const Email = req.body.Email;
    const Name = req.body.Name;
    const gym_desc = req.body.gym_desc;
    const Location = req.body.Location;
    const About = req.body.About;
    var result = await userModel.updatedatawitout_photo(
      Email,
      Name,
      gym_desc,
      Location,
      About
    );
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
  static async updateLocation(req, res) {
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    var result = await userModel.updateLocation(latitude, longitude);
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
  static async updatedata(req, res) {
    upload.single("photo")(req, res, async function (err) {
      if (err) {
        console.log(err);
        return res.status(400).json({ error: "Error uploading file" });
      }
      if (!req.file) {
        return res.status(400).json({ error: "No file found in request" });
      }
      const folderName = req.params.folderName;

      const Email = req.body.Email;
      const logo = `/Upload/${folderName}/${req.file.filename}`;
      const Name = req.body.Name;
      const gym_desc = req.body.gym_desc;
      const Location = req.body.Location;
      const About = req.body.About;

      try {
        var result = await userModel.updatedata(
          Email,
          logo,
          Name,
          gym_desc,
          Location,
          About
        );
        console.log(result);
        res.status(200).json({ message: "updated successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error saving file path in database" });
      }
    });
  }

  static async addGym(req, res) {
    var Email = req.body.Email;

    var result = await userModel.addGym("Name", Email);
    if (result == true) {
      res.send({
        message: "add successfully",
        status: 200,
      });
    } else {
      res.send({
        message: "add failed",
        status: 400,
      });
    }
  }
  static async deleteGym(req, res) {
    const id = req.body.Name;
    if (id) {
      var result = await userModel.deleteGym(id);
      if (result) {
        res.send({
          message: "delete successfully",
          status: 200,
        });
      } else {
        res.send({
          message: "failed to delete ",
          status: 400,
        });
      }
    }
  }
}
module.exports = GymController;
