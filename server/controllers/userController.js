const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    const locals = {
      title: "Home | User Management System",
      description: "A simple system for managing users"
    };

    const css = {
      filename: "home.css"
    };

    let users = User.find();
    users = await users.select("-__v");

    return res.render("pages/home", {
      locals,
      users,
      css
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const locals = {
      title: "Update | User Management System",
      description: "A simple system for managing users"
    };
    const css = {
      filename: "update.css"
    };

    const user = await User.findById(id);
    return res.render("pages/update", { locals, css, user });
  } catch (error) {
    return res.status(404).json({ status: "fail", message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ status: "success", results: { user } });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ status: "success", results: { user } });
  } catch (error) {
    return res.status(404).json({ status: "fail", message: error.message });
  }
};

exports.removeUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(204).json({ status: "success" });
  } catch (error) {
    return res.status(404).json({ status: "fail", message: error.message });
  }
};
