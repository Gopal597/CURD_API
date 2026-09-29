const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const Dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database is connected");
  } catch (error) {
    console.log("Database isnot connection");
    console.log(error.message);
  }
};
module.exports=Dbconnection
