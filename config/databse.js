const mongoose = require("mongoose")

const database = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ishartjahan82:12345@cluster0.pd2artj.mongodb.net/"
    );
    console.log("Database Connected...")
  } catch (err) {
    console.log(err);
  }
};

module.exports = database;
