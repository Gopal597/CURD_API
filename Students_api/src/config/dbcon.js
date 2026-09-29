const mongoose = require("mongoose");
// const dns = require("dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);
const DBconnection = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Database is connected")
  } catch (error) {
    console.log("database is not connected");
    console.log(error.message);
  }
};

module.exports=DBconnection;