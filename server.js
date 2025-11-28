const express = require("express");
const app = express();

require("dotenv").config(); // Load .env file

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const { MongoClient } = require("mongodb");

// Mongo URL from Docker .env
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.MONGO_DB_NAME || "docker-database";

// Create client
const client = new MongoClient(MONGO_URL);
let db;

// CONNECT TO MONGO
async function connectDB() {
  try {
    await client.connect();
    db = client.db(DB_NAME);
    console.log("✔ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
}
connectDB();

// ------------------- ROUTES -------------------

// HOME ROUTE
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// TEST ROUTE
app.get("/test", (req, res) => {
  res.send("Test route working ✔");
});

// SHOW USERS
app.get("/getUser", async (req, res) => {
  try {
    const users = await db.collection("users").find({}).toArray();
    res.json(users);
  } catch (err) {
    res.status(500).send("Error fetching users ❌");
  }
});

// ADD USER
app.post("/addUser", async (req, res) => {
  try {
    await db.collection("users").insertOne(req.body);
    res.send("User added ✔ <br><a href='/'>Go Back</a>");
  } catch (err) {
    res.status(500).send("Error adding user ❌");
  }
});

// START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
