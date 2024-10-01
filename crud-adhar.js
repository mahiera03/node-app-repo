const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.listen(8081, () => {
  console.log(`Server started on port: 8081`);
});

async function mongoDBConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/adhar_database");
    console.log("Connection is successfull");
  } catch (error) {
    console.log(error);
  }
}

mongoDBConnection();

const adharSchema = new mongoose.Schema(
  {
    adharNo: { type: Number },
    fullName: { type: String },
    isMarried: { type: Boolean },
    city: { type: String },
    pin: { type: Number },
    country: { type: String },
  },
  { collection: "adhar_collection" }
);

const User = mongoose.model("User", adharSchema);
app.get("/allUser", async (request, response) => {
  console.log("Fetching Users From Database.....");
  console.log(`REQUEST PTAH: ${request.url}`);
  const userList = await User.find({});
  return response.status(200).json(userList);
});
