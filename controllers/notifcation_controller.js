const notificaionModel = require("../models/notification");
const multer = require("multer");
const path = require("path");
const traineeModel = require("../models/trainee");
const coachModel = require("../models/coach");

class Notification {
  static async sendNotifcation(req, res) {
    var content = req.body.content;
    var date = req.body.date;

    var result2 = await traineeModel.getAllTrainee();
    console.log(result2[0].Trainee_id);
    for (let i = 0; i < result2.length; i++) {
      var result = await notificaionModel.sendNotifcation(
        content,
        result2[i].Trainee_id,
        date
      );
    }
    if (result == true) {
      res.send({
        message: "Notification Added",
        status: 200,
      });
    } else {
      res.send({
        message: "Failed To Add Notification",
        status: 400,
        error: result,
      });
    }
  }
  static async sendNotifcationToCoach(req, res) {
    console.log("hhhhhhhhhhhhhhhhhh");
    var content = req.body.content;
    var date = req.body.date;

    var result2 = await coachModel.get_all_coach();
    console.log(result2[0].Coach_id);
    for (let i = 0; i < result2.length; i++) {
      var result = await notificaionModel.sendNotifcation(
        content,
        result2[i].Coach_id,
        date
      );
    }
    if (result == true) {
      res.send({
        message: "Notification Added",
        status: 200,
      });
    } else {
      res.send({
        message: "Failed To Add Notification",
        status: 400,
        error: result,
      });
    }
  }
  static async sendSpecificNotification(req, res) {
    var content = req.body.content;
    var destination_id = req.body.destination_id;
    var date = req.body.date;
    var result = await notificaionModel.sendNotifcation(
      content,
      destination_id,
      date
    );

    if (result == true) {
      res.send({
        message: "Notification Added",
        status: 200,
      });
    } else {
      res.send({
        message: "Failed To Add Notification",
        status: 400,
        error: result,
      });
    }
  }
  static async deleteNotifcation(req, res) {
    var not_id = req.body.not_id;
    var destination_id = req.body.destination_id;

    var result = await notificaionModel.deleteNotifcation(
      not_id,
      destination_id
    );

    if (result == true) {
      res.send({
        message: "Notification deleted",
        status: 200,
      });
    } else {
      res.send({
        message: "Failed To delete Notification",
        status: 400,
        error: result,
      });
    }
  }
  static async getNotifcation(req, res) {
    var destination_id = req.body.destination_id;

    var result = await notificaionModel.getNotifcation(destination_id);
    console.log(result);

    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
}
module.exports = Notification;
