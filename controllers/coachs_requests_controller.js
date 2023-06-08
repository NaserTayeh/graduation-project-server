const coachs_requestsModel = require("../models/coachs_requests");
class coachs_requests_Controller {
  static async RemoveRequest(req, res) {
    const coach_id = req.body.coach_id;
    const trainee_id = req.body.trainee_id;
    var result = await coachs_requestsModel.RemoveRequest(coach_id, trainee_id);
    if (result.flag == "yes") {
      res.send({
        message: "delete successfully",
        status: 200,
      });
    } else if (result.flag == "no") {
      res.send({
        message: "failed to delete id not true ",
        status: 400,
      });
    }
  }
  static async countRequest(req, res) {
    const coach_id = req.body.coach_id;
    var result = await coachs_requestsModel.countRequest(coach_id);
    if (result) {
      res.send({
        length: result.length,
      });
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async DoseTrainee_has_coach(req, res) {
    // const coach_id = req.body.coach_id;
    const trainee_id = req.body.trainee_id;
    var is_accepted = await coachs_requestsModel.is_accepted(
      // coach_id,
      trainee_id
    );
    res.send(is_accepted);
  }
  static async AcceptedRequest(req, res) {
    const coach_id = req.body.coach_id;
    const trainee_id = req.body.trainee_id;
    var result = await coachs_requestsModel.AcceptedRequest(
      coach_id,
      trainee_id
    );
    if (result.flag == "yes") {
      res.send({
        message: "Acceptd Successfully",
        status: 200,
      });
    } else if (result.flag == "no") {
      res.send({
        message: "failed to accept ",
        status: 400,
      });
    }
  }

  static async addNewItem(req, res) {
    const coach_id = req.body.coach_id;
    const trainee_id = req.body.trainee_id;
    var result = await coachs_requestsModel.addNewItem(coach_id, trainee_id);
    if (result) {
      if (result.affectedRows == 0) {
        res.send({
          message: "request exists",
        });
      } else {
        res.send({
          message: "add successfully",
          status: 200,
        });
      }
    } else {
      res.send({
        message: "add failed",
        status: 400,
      });
    }
  }

  static async GetRequests(req, res) {
    const coach_id = req.body.coach_id;
    var result = await coachs_requestsModel.GetRequests(coach_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async GetAcceptedTrainee(req, res) {
    const coach_id = req.body.coach_id;
    var result = await coachs_requestsModel.GetAcceptedTrainee(coach_id);
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }

  static async GettraineeNumber(req, res) {
    const coach_id = req.body.coach_id;
    var result = await coachs_requestsModel.GettraineeNumber(coach_id);
    if (result) {
      res.send({
        length: result.length,
      });
    } else {
      res.send({
        message: "empty",
      });
    }
  }
  static async GetCoachRequestForTrainee(req, res) {
    const trainee_id = req.body.trainee_id;
    var result = await coachs_requestsModel.GetCoachRequestForTrainee(
      trainee_id
    );
    if (result) {
      res.send(result);
    } else {
      res.send({
        message: "empty",
      });
    }
  }
}

module.exports = coachs_requests_Controller;
