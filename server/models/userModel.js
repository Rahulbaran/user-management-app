const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: function (string) {
        return /^[a-z][a-z0-9_]{4,20}$/i.test(string);
      },
      message: props => `${props.value} is not a valid username!`
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: function (string) {
        return /^[\w.%+-]{3,30}@[\w.-]{2,12}\.[a-zA-Z]{2,12}$/.test(string);
      },
      message: props => `${props.value} is not a valid email address`
    }
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: ["male", "female"]
  },
  status: {
    type: String,
    required: true,
    trim: true,
    enum: ["active", "inactive"]
  },
  addAt: {
    type: "Date",
    default: Date.now(),
    select: false
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
