const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/").get(userController.getUsers);
router.route("/create").post(userController.createUser);
router
  .route("/update/:id")
  .get(userController.getUser)
  .patch(userController.updateUser);
router.route("/delete/:id").delete(userController.removeUser);

module.exports = router;
