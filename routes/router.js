const express = require("express");
const router = express.Router();
const traineeController = require("../controllers/trainee_controller");
const userController = require("../controllers/gym_controller");
const personContrller = require("../controllers/person_controller");
const skillController = require("../controllers/skill_controller");
const coachController = require("../controllers/coach_controller");
const adminController = require("../controllers/admin_controller");
const uploadtraineeController = require("../controllers/upload_trainee_controller");
const uploadrecipeController = require("../controllers/upload_recipe_controller");
const recipeController = require("../controllers/recipe_controller");
const nutritionController = require("../controllers/nutrition_controller");
const group_workoutController = require("../controllers/group_workout_controller");
const market_controller = require("../controllers/market_controller");
const cart_controller = require("../controllers/cart_controller");
const favWorkout_controller = require("../controllers/fav_workout_controller");
const coachs_requests_controller = require("../controllers/coachs_requests_controller");
const notification_controller = require("../controllers/notifcation_controller");
const month_controller = require("../controllers/month_controller");
const week_controller = require("../controllers/week_controller");
const group_muscle_controller = require("../controllers/group_muscle_controller");
const DaysController = require("../controllers/days_controller");
const group_muscle_sub_controller = require("../controllers/group_muscle_sub_controller");
const food_counting_Controller = require("../controllers/food_counting_controller");
const exersies_counting_controller = require("../controllers/exersies_counting_controller");
const checkout_controller = require("../controllers/checkout_controller");
const subscribtion_controller = require("../controllers/subscription_controller");
const advertisment_controller = require("../controllers/advertisment_controller");
// const skillController = require("../controllers/skill_controller");
const GymController = require("../controllers/gym_controller");

var paypal = require("paypal-rest-sdk");
paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "AShO2pWpwkxs2_dlfQ_vAL0R9Kb1o_78ScjT1zbqLvdfHY0kIbdLEa_feqboOMFJjWyWk8LgtmORDfHO",
  client_secret:
    "EPaiw53vxEIsNGkDpGLHF8SKMZhdLjUbeLAaE-oAHu-VGmCVzH1-gdC0ruQD68NbW5rSN3dXfqQMKTux",
});
// ------------------------------------- PERSON SECTION------------------------------------------------------------------------
router.post("/api/person/setpass", personContrller.setpass); //Forget Password API set password if Email true //ForgetPass
router.post("/api/updatePerson/", personContrller.updatePersonData); // Update person Data
router.post("/api/addperson", personContrller.addPerson); //adding a person when sign in click we call this api
router.post("/api/get_person_id", personContrller.get_person_id); //return the person id form the table after adding a person based on email
router.post("/api/get_persons_date", personContrller.get_persons_date); //return the person id form the table after adding a person based on email
router.post("/api/setpass", personContrller.setpass); //Used to chage the password for the person
// ------------------------------------- PERSON SECTION------------------------------------------------------------------------

// ------------------------------------- TRAINEE SECTION------------------------------------------------------------------------
router.post("/api/trainee", traineeController.getData); //sign in trinee based on email and pass if true give 1 result //sign in
router.post("/api/getCurrentTrainee", traineeController.getCurrentTrainee); //sign in trinee based on email and pass if true give 1 result //sign in
router.post(
  "/api/getCurrentTrainee_id",
  traineeController.getCurrentTrainee_id
); //sign in trinee based on email and pass if true give 1 result //sign in
router.post(
  "/api/getCurrentTraineeAllInfo",
  traineeController.getCurrentTraineeAllInfo
); //sign in trinee based on email and pass if true give 1 result //sign in

router.post("/api/addtrainee", traineeController.addtrainee); //here we add the trainee data after calling get_person_id Api
router.post(
  "/api/traineephoto/:folderName",
  uploadtraineeController.uploadFile
); //uploading the trainee personal photo
router.get("/api/viewtraineephoto/");
router.post("/api/addtrainee_id", traineeController.addtrainee_id_from_person);
router.get("/api/getAllTrainee", traineeController.getAllTrainee);

// ------------------------------------- TRAINEE SECTION------------------------------------------------------------------------

// ------------------------------------- ADMIN SECTION------------------------------------------------------------------------
router.get("/api/get_person_id_admin", personContrller.get_person_id_admin); //return the Id Based on the Email and passwod so admin sec
router.get("/api/get_skills_lists", skillController.skillslist); //this retrive all the skills list's to show them in the admin page
router.post("/api/Add_skill_list", skillController.addskilllist); //this is for adding the Skill's list for the coach after adding coach
router.post("/api/signtrainee", traineeController.Sign_trainee);
router.get("/api/adminid", adminController.adminid); //Chceking the id of the admin to auth that user is Admin
// ------------------------------------- ADMIN SECTION------------------------------------------------------------------------

// ------------------------------------- RECIPE SECTION------------------------------------------------------------------------
router.post("/api/uploadrecipe/:folderName", uploadrecipeController.uploadFile); //uploading recipe imgae
router.post("/api/get_recipes", recipeController.getAllData); //get recipe  data
router.post(
  "/api/uploadAllRecipeInfo/:folderName",
  recipeController.uploadRecipeData
); //get recipe  data
router.post("/api/deleteRecipe", recipeController.deleteRecipe); //delete recipe  according to recipe_id
router.post(
  "/api/updateRecipeInfo/:folderName",
  recipeController.updateRecipeData
); //update  recipeInformation  according to recipe_id
// ------------------------------------- RECIPE SECTION------------------------------------------------------------------------

// ------------------------------------- GYM SECTION------------------------------------------------------------------------
router.get("/gym", userController.getAllData);
router.post("/addgym", userController.addGym);
router.post("/deletegym", userController.deleteGym);
// ------------------------------------- GYM SECTION------------------------------------------------------------------------

// ------------------------------------- NUTRITIONPLAN  SECTION------------------------------------------------------------------------
router.post("/api/addNutrition", nutritionController.addNutrition); // Add nutritop
router.post("/api/deleteNutrition", nutritionController.deleteNutrition); // delete nutrition
router.post("/api/updateNutrition", nutritionController.updateNutrition); // delete nutrition
router.post("/api/getNutrition", nutritionController.getNutrition); // delete nutrition
// ------------------------------------- NUTRITIONPLAN  SECTION------------------------------------------------------------------------

// ------------------------------------- WORKOUT  SECTION------------------------------------------------------------------------
router.get("/api/getAllWorkout", group_workoutController.getAllWorkout); //return workout based on
router.post("/api/getWorkoutCat", group_workoutController.getWorkoutCat); //return workout based on categorie_id
router.post(
  "/api/addNewWorkout/:folderName",
  group_workoutController.addNewWorkout
); //create a workout this api saves with the photo you must pass in form-data in postman
router.post("/api/deleteWorkout", group_workoutController.deleteWorkout); //remove a workout based on exercise_id
router.post("/api/getWorkout", group_workoutController.getWorkoutData); //get workout based on exercise_id
router.post(
  "/api/updateWorkout/:folderName",
  group_workoutController.UpdateWorkout
); //Update workout based on exercise_id
router.post(
  "/api/countWorkoutInCategorie",
  group_workoutController.countWorkoutInCategorie
); //Count the workout in each categorie
router.post(
  "/api/updateWorkoutwithoutphoto",
  group_workoutController.updateWorkoutwithoutphoto
);
// ------------------------------------- WORKOUT  SECTION------------------------------------------------------------------------

//store supplement
// ------------------------------------- STORE  SECTION------------------------------------------------------------------------
router.get("/api/getAllMarketItems", market_controller.getAllMarketItems); //return items based on categorie id
router.post("/api/getItemCategorie", market_controller.getItemCategorie); //return items based on categorie id
router.post("/api/store/addItem/:folderName", market_controller.addNewItem); //add new item to store
router.post(
  "/api/store/CountItemsCategorie",
  market_controller.CountItemsCategorie
); //count items on each Categorie
router.post("/api/getStoreItemCategorie", market_controller.GetItemsCategorie); //Get Item Details to view in store
router.post("/api/deleteStoreItem", market_controller.deleteStoreItem); //delete item from store
router.post("/api/store/updateItem/:folderName", market_controller.UpdateItem); //update item in store
router.post(
  "/api/store/updateItemwithoutphoto",
  market_controller.UpdateItemWithoutPhoto
); //update item without Photo in store
// ------------------------------------- STORE  SECTION------------------------------------------------------------------------

// ------------------------------------- CART  SECTION------------------------------------------------------------------------
router.post("/api/cart/addItem", cart_controller.addNewItem);
router.post("/api/cart/deleteItem", cart_controller.deleteItem);
router.post("/api/cart/deleteAllItem", cart_controller.deleteAllItem);
router.post("/api/cart/getCartItems", cart_controller.getCartItems);
router.post("/api/cart/updateQuantity", cart_controller.updateQuantity);
// router.post("/api/cart/decrementQuantity", cart_controller.decrementQuantity);
router.post("/api/cart/getQuantity", cart_controller.getQuantity);
// ------------------------------------- CART  SECTION------------------------------------------------------------------------

// ------------------------------------- FAVORITE WORKOUT  SECTION------------------------------------------------------------------------
router.post(
  "/api/FavWorkout/addItemFavWorkout",
  favWorkout_controller.addNewItem
); //Add a new workout to fav list
router.post(
  "/api/FavWorkout/GetFavWorkout",
  favWorkout_controller.GetFavWorkout
); //get workout based on the trainee ID
router.post(
  "/api/FavWorkout/RemoveWorkout",
  favWorkout_controller.RemoveFavWorkout
); //remove this workout from fav
// ------------------------------------- FAVORITE WORKOUT  SECTION------------------------------------------------------------------------

//api for client request to coach
router.post(
  "/api/CoachsRequests/addItem",
  coachs_requests_controller.addNewItem
);
router.post(
  "/api/CoachsRequests/RemoveRequest",
  coachs_requests_controller.RemoveRequest
);
router.post(
  "/api/CoachsRequests/GetRequests",
  coachs_requests_controller.GetRequests
);
router.post(
  "/api/CoachsRequests/GettraineeNumber",
  coachs_requests_controller.GettraineeNumber
);
router.post(
  "/api/CoachsRequests/getCoachRequestForTrainee",
  coachs_requests_controller.GetCoachRequestForTrainee
);

router.post(
  "/api/CoachsRequests/accepted",
  coachs_requests_controller.AcceptedRequest
);
router.post(
  "/api/CoachsRequests/coachRequestCount",
  coachs_requests_controller.countRequest
);
router.post(
  "/api/CoachsRequests/getAcceptedTrainee",
  coachs_requests_controller.GetAcceptedTrainee
);

// API for COACH

router.post("/api/addcoach/:folderName", coachController.addcoach); //to add a new coach by the Admin in the dashbord
router.post("/api/addcoach_without", coachController.addcoach_withoutphoto); //to add a new coach by the Admin in the dashbord
router.post("/api/coach/GetCoach", coachController.getData); //get Coaches
router.post("/api/coach/CountCoach", coachController.countcoachs); // count all coaches in the system
router.post("/api/coach/updateCoach", coachController.updateCoachData); // count all coaches in the system

// API for notification
router.post(
  "/api/admin/sendNotification",
  notification_controller.sendNotifcation
);
router.post(
  "/api/admin/sendNotificationToCoach",
  notification_controller.sendNotifcationToCoach
);
router.post(
  "/api/admin/sendSpecificNotification",
  notification_controller.sendSpecificNotification
);
router.post(
  "/api/admin/deleteNotification",
  notification_controller.deleteNotifcation
);
router.post(
  "/api/admin/getNotification",
  notification_controller.getNotifcation
);

// ------------------------------------- Workout TRACKING   SECTION------------------------------------------------------------------------
// Pick One month
router.post("/api/RoadMap/add1Month", month_controller.add1month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add1MonthWeek", week_controller.add1monthweek); //adding 4 weeks for 1 month added then call days api
//*********************************************** */
//Pick two month
router.post("/api/RoadMap/add2Month", month_controller.add2month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add2MonthWeek", week_controller.add2monthweek); //adding 4 weeks for 2 month added
//*********************************************** */
//Pick three month
router.post("/api/RoadMap/add3Month", month_controller.add3month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add3MonthWeek", week_controller.add3monthweek); //adding 4 weeks for 2 month added
//*********************************************** */
//Pick 4 month
router.post("/api/RoadMap/add4month", month_controller.add4month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add4MonthWeek", week_controller.add4monthweek); //adding 4 weeks for 2 month added
//*********************************************** */
//Pick 5 month
router.post("/api/RoadMap/add5month", month_controller.add5month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add5MonthWeek", week_controller.add5monthweek); //adding 4 weeks for 2 month added
//*********************************************** */
//Pick 6 month
router.post("/api/RoadMap/add6Month", month_controller.add6month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add6MonthWeek", week_controller.add6monthweek); //adding 4 weeks for 2 month added
//*********************************************** */
//Pick 7 month
router.post("/api/RoadMap/add7Month", month_controller.add7month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add7MonthWeek", week_controller.add7monthweek); //adding 4 weeks for 2 month added
//*********************************************** */
//Pick 8 month
router.post("/api/RoadMap/add8Month", month_controller.add8month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add8MonthWeek", week_controller.add8monthweek); //adding 4 weeks for 2 month added
//*********************************************** */
//Pick 9 month
router.post("/api/RoadMap/add9Month", month_controller.add9month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add9MonthWeek", week_controller.add9monthweek); //adding 4 weeks for 2 month added
//*********************************************** */
//Pick 10 month
router.post("/api/RoadMap/add10Month", month_controller.add10month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add10MonthWeek", week_controller.add10monthweek); //adding 4 weeks for 2 month added
//*********************************************** */
//Pick 11 month
router.post("/api/RoadMap/add11Month", month_controller.add11month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add11MonthWeek", week_controller.add11monthweek); //adding 4 weeks for 2 month added
//*********************************************** */
//Pick 12 month
router.post("/api/RoadMap/add12Month", month_controller.add12month); //then call weeks api and send it month Id
router.post("/api/RoadMap/add12MonthWeek", week_controller.add12monthweek); //adding 4 weeks for 2 month added
//*********************************************** */
router.post("/api/RoadMap/GetMonthData", month_controller.GetMonthData); //Get the month data to store week_id in week table
router.post("/api/RoadMap/GetweekData", week_controller.GetWeekData); //Get the week data to store week_id in day table based on month Id
//*********************************************** */
//after storing the month and the 4 weeks for each month
//we will retrive the array of weeks for each month and call
//days api on each week id to save  7 days in it
router.post("/api/RoadMap/addWeekDays", DaysController.addweekdays); //adding 7 days for week based on sended ID
//we will loop on all the weeks days and make a mapping bettween the day id and the target muscle in that day
router.post("/api/RoadMap/GetallWeekDays", DaysController.GetallWeekDays); //Get all week days data
router.post(
  "/api/RoadMap/add_target_Muscle_For_Each_Day/",
  group_muscle_controller.add_Muscle_Group_For_Day
);
//then we return the workout Id for that muscle in that day
router.post(
  "/api/RoadMap/GetWorkout_ID_Based_On_day_id/",
  group_muscle_controller.GetWorkout_ID_Based_On_day_id
);
//after making the mapping we will link each workout_id with all the workout for the atgret muscle in that day!
router.post(
  "/api/RoadMap/add_Exercise_id_to_the_WorkoutID/",
  group_muscle_sub_controller.add_All_Exercise_id_to_the_WorkoutID
);
//here we will return the exersies based on id
router.post(
  "/api/RoadMap/get_Exercise_data",
  group_workoutController.getWorkoutData
); //get workout based on exercise_id
router.post("/api/RoadMap/getDayId", DaysController.GetDayId); //get workout based on exercise_id
router.post(
  "/api/RoadMap/Check_day_booked",
  group_muscle_controller.Check_day_booked
);
router.post(
  "/api/RoadMap/Get_All_booked_data",
  group_muscle_controller.Get_All_booked_data
);
router.post(
  "/api/RoadMap/Check_if_has_plan",
  month_controller.Check_if_has_plan
);
router.post(
  "/api/RoadMap/Get_All_booked_data_exercise",
  group_workoutController.Get_All_booked_data_exercise
);
// ------------------------------------- Workout TRACKING   SECTION------------------------------------------------------------------------
// ------------------------------------- PAYMENT   SECTION------------------------------------------------------------------------
//payment
router.get("/pay/:amount", (req, res) => {
  const amount = req.params.amount;
  var create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://10.0.2.2:3000/success/" + amount.toString(),
      cancel_url: "http://cancel.url",
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "Items",
              sku: "item",
              price: amount.toString(),
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: amount.toString(),
        },
        description: "This is the payment description.",
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      console.log("Create Payment Response");
      console.log(payment);
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel == "approval_url") {
          // console.log(payment.links[i].href);
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
}); //Making a payment request
router.get("/success/:amount", (req, res) => {
  const amount = req.params.amount;
  var execute_payment_json = {
    payer_id: req.query.PayerID,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: amount.toString(),
        },
      },
    ],
  };
  var paymentId = req.query.paymentId;
  paypal.payment.execute(
    paymentId,
    execute_payment_json,
    function (error, payment) {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        console.log("Get Payment Response");
        console.log(JSON.stringify(payment));
      }
    }
  );
});
// ------------------------------------- PAYMENT   SECTION------------------------------------------------------------------------

// ------------------------------------- Start-end Date for plan   SECTION------------------------------------------------------------------------
router.post("/api/SetEndDate/", traineeController.SetEndDate); //plan start
router.post("/api/SetStartDate/", traineeController.SetStartDate); //plan end
router.post("/api/SetStartPay/", traineeController.SetStartPay); //pay start
router.post("/api/SetEndPay/", traineeController.SetEndPay); //pay end
router.post("/api/Subscription/", month_controller.subscription); //retrun all the plan days
router.post(
  "/api/SaveWeeklyPhoto/:folderName",
  week_controller.SaveWeeklyPhoto
); //save the weekly photo
router.post("/api/GetPlanWeeksdata/", month_controller.GetPlanWeeks); //Get all the week for the plan
router.post("/api/SetComment/", week_controller.SetComment); //Set a Comment for a photo
router.post("/api/GetComment/", week_controller.getComment); //get comment for the photo based on week_id
router.post("/api/GetPhoto/", week_controller.getPhoto); //get photo based on week_id

router.post("/api/GetEndDate/", traineeController.GetEndDate);
router.post("/api/GetStartDate/", traineeController.GetStartDate);
router.post("/api/GetStartPay/", traineeController.GetStartPay);
router.post("/api/GetEndPay/", traineeController.GetEndPay);
router.post("/api/getWeekID_Date/", DaysController.getWeekID_Date);

// ------------------------------------- Start-end Date for plan   SECTION------------------------------------------------------------------------

// stockk
router.post("/api/store/BuyAmount", market_controller.BuyAmount);
router.post("/api/AssignNutPlan/", traineeController.AssignNutPlan); //done
router.post("/api/bmi/", traineeController.updateBMI); //done
router.post("/api/CoachRetrive/", coachController.CoachRetriveData);
router.post("/api/GetNutPlan", nutritionController.getNutritionPlan);
router.post("/api/GetNutPlanID", traineeController.getNutritionPlanID);
// ------------------------------------- Food Counting    SECTION------------------------------------------------------------------------

router.post("/api/food_counting/addfood", food_counting_Controller.addfood);
router.post(
  "/api/food_counting/geteaten",
  food_counting_Controller.count_eaten
);
router.post("/api/get_food/", food_counting_Controller.get_food);
router.post(
  "/api/get_specific_food/",
  food_counting_Controller.get_specific_food
);
router.post("/api/remove_food/", food_counting_Controller.remove_food); //remove based on "Trainee_id" ,"food_id"
router.post(
  "/api/remove_food_index/",
  food_counting_Controller.remove_food_index
); //remove based on "index"
router.post(
  "/api/food_counting/increment_amount",
  food_counting_Controller.increment_amount
);
router.post(
  "/api/food_counting/dec_amount",
  food_counting_Controller.dec_amount
);
// ------------------------------------- END OF  Food Counting    SECTION------------------------------------------------------------------------

// ------------------------------------- Excersise Counting    SECTION------------------------------------------------------------------------

router.post(
  "/api/exersies_counting/addexersies",
  exersies_counting_controller.addexersies
);
router.post(
  "/api/exersies_counting/getTime",
  exersies_counting_controller.getExcersiseTime
);
router.post(
  "/api/exersies_counting/get_exersies/",
  exersies_counting_controller.get_exersies
);
router.post(
  "/api/exersies_counting/remove_exersies/",
  exersies_counting_controller.remove_exersies
); //remove based on "Trainee_id" ,"exersies_id"
router.post(
  "/api/exersies_counting/count_finished/",
  exersies_counting_controller.count_excersise
); //remove based on "Trainee_id" ,"exersies_id"
router.post(
  "/api/exersies_counting/remove_exersies_id",
  exersies_counting_controller.remove_exersies_index
); //remove based on "index"
router.post(
  "/api/exersies_counting/increment_amount",
  exersies_counting_controller.increment_amount
); //remove based on "index"
router.post(
  "/api/exersies_counting/dec_amount",
  exersies_counting_controller.dec_amount
); //remove based on "index"
router.post(
  "/api/exersies_counting/get_specific_food",
  exersies_counting_controller.get_specific_excercise
); //remove based on "index"

// ------------------------------------- end of  Excersise Counting    SECTION------------------------------------------------------------------------
// ------------------------------------- PAYMENT    SECTION------------------------------------------------------------------------
router.post("/api/trainee/setprim", traineeController.setprim);
router.post("/api/trainee/getpayment", traineeController.getpayment);
router.post("/api/trainee/updateFitLevel", traineeController.updateBodyLevel);
router.post("/api/trainee/updateGoal", traineeController.updateGoal);
router.post(
  "/api/trainee/updateActivityLevel",
  traineeController.updateActivityLevel
);
router.post("/api/trainee/updateBasicInfo", traineeController.updateBasicInfo);
// ------------------------------------- end of PAYMENT    SECTION------------------------------------------------------------------------

router.post("/api/person/edit_data/:folderName", personContrller.edit_data); //update with photo
router.post(
  "/api/person/edit_data_coach/:folderName",
  personContrller.edit_data_coach
); //update with photo
router.post(
  "/api/person/edit_data_withoutphoto/",
  personContrller.edit_data_withoutphoto
); //update without photo
router.post(
  "/api/person/edit_data_withoutphoto_coach/",
  personContrller.edit_data_withoutphoto_coach
); //update without photo

router.post("/api/NutPlan/GetWater/", nutritionController.getWaterNeed); //Get water needed for the trainee
router.post("/api/NutPlan/GetWaterTaken/", nutritionController.getWaterTaken); //Get water needed for the trainee
router.post("/api/NutPlan/SetWaterTaken", nutritionController.SetWaterTaken); //Set Water Taken by trainee

//********************/
//Skill list Apis
router.post("/api/Skill/list/addlist", skillController.addskilllist); //Adding a new list to the system
router.post("/api/skill/getList_list_of_ids", skillController.skillslist); //get list of list_ids based on Trainee_id
router.post("/api/skill/list/deletelist", skillController.deletelist); //to delete list based on Trainee_id , list_id
router.post("/api/skill/show", skillController.skillshow); //get list of list_ids based on Trainee_id
router.post("/api/skill/getSkill", skillController.getSkill); //get list of list_ids based on Trainee_id
//********************/
// Admin Program
router.post(
  "/api/person/addadmin_photo/:folderName",
  personContrller.addadmin_photo
); //Upload a photo to coach------------------------------------------------------------------------------------>done
router.post("/api/admin/count_trainee", traineeController.count_trainee); //count the number of trainee --------> done
router.post("/api/admin/count_coach", coachController.count_coach); //count the number of coaches --------------> done
router.post("/api/admin/get_all_trainee", traineeController.get_all_trainee); //get trainee data----------------->done
router.post("/api/admin/get_all_coach", coachController.get_all_coach); //get coach data ------------------------->done
// Admin/seetings_page
router.post("/api/person/admin/updatedata", personContrller.updateinfo); //Update data for the coach--------------->done
router.post("/api/person/admin/getdataadmin", personContrller.getdataadmin); //Get data before -------------------->done
// Admin/Gym_Configration
router.post("/api/person/admin/config/get", GymController.getAllData); //get gym data-------------------------------->done
router.post(
  "/api/person/admin/config/updateLocation",
  GymController.updateLocation
); //get gym data-------------------------------->done
router.post(
  "/api/person/aadmin/config/data/:folderName",
  GymController.updatedata
); //update data and gym logo ----------------------------------------------------------------------------------------->done
router.post(
  "/api/person/admin/config/data_witoutphoto/",
  GymController.updatedatawitout_photo
); //update the data without photo ----------------------------------------------------------------------------------->done
// Admin/Coach_request's
router.post(
  "/api/person/admin/pending_request",
  coachController.get_all_pending_request
); //pending request for coaches in admin view ----------------------------------------------------------------------->done
router.post(
  "/api/person/admin/accepted_request",
  coachController.get_all_accepted_request
); //get actvie coach in the system----------------------------------------------------------------------->done
router.post(
  "/api/person/admin/disapled_request",
  coachController.get_all_disaled_request
); //get disapled request in the system----------------------------------------------------------------------->done
//*********3 State**********/
//pending , not accepted 0 0
//not pending , Enables  1 1
//not peding  , disapled 1 0
router.post(
  "/api/person/admin/un_pend_request",
  coachController.un_pend_request
); //making request un pended
router.post(
  "/api/person/admin/disaple_request",
  coachController.un_enable_request
); //disaple a already accepted request (Disaple Account)
router.post("/api/person/admin/enable_request", coachController.enable_request); //Enable admin account
//delete Request Api
router.post(
  "/api/person/admin/request/delete_request",
  coachController.delete_request
); //-------------------------------------->done

router.post("/api/SkillList/set_id/", coachController.set_skillList_id);
router.post(
  "/api/DoseTrainee_has_coach/",
  coachs_requests_controller.DoseTrainee_has_coach
);
router.post("/api/checkout/add", checkout_controller.addNewItem);
router.post("/api/checkout/getprofit", checkout_controller.getprofit);
router.post(
  "/api/checkout/getAllCheckouts",
  checkout_controller.getAllCheckout
);
router.post("/api/subscribtion/getprofit", subscribtion_controller.getprofit);

//Calories Taken API
router.post("/api/cal/add_edit", nutritionController.add_cal);
router.post("/api/cal/sub_edit", nutritionController.sub_cal);
router.post("/api/IncTraineeCoach/", coachController.IncTraineeCoach);
router.post(
  "/api/set_coacheto_trainee/",
  traineeController.set_coache_to_trainee
);
router.post("/api/get_avilable_coaches/", coachController.get_avilable_coaches);

router.post("/api/get_paired_request", coachController.get_paired_req); //paird req
router.post("/api/get_active_request", coachController.get_active_req); //active account's and not paired req
router.post("/api/get_deactivated_req", coachController.get_deactivated_req); //deactivate account's and not paired req
router.post(
  "/api/addadvertisment/:folderName",
  advertisment_controller.addNewItem
); //deactivate account's and not paired req
router.get("/api/getadvertisment/", advertisment_controller.getDate); //deactivate account's and not paired req
router.post("/api/get_burn_cal/", exersies_counting_controller.get_burn_cal);

module.exports = router;
