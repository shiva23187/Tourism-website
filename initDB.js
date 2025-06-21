// initDB.js
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const { data: sampleListings } = require("./init/data");

const MONGO_URL = "mongodb://127.0.0.1:27017/tourism";

main()
  .then(() => {
    console.log("✅ Connected to DB");
    return initDB();
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

async function initDB() {
  await Listing.deleteMany({}); // Remove old data
  await Listing.insertMany(sampleListings); // Add fresh data
  console.log("✅ Sample listings inserted");
  mongoose.connection.close(); // Done
}
