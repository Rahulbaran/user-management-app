const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI.replace(
      "<PASSWORD>",
      process.env.MONGO_PW
    );
    const con = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(con.connection.host);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
