const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const fileUpload=require("express-fileupload");
const app = express();
const port = 4000;
app.use(cors());
app.use(express.static("Public"));
//app.use(fileUpload({useTempFiles:true}));
app.use(express.json());

const User = require("./route/UserRoute");
const Course = require("./route/CourseRoute");
const Batch = require("./route/BatchRoute");
const Admin = require("./route/AdminRoute");
const Career = require("./route/CareerRoute");
const Event = require("./route/EventRoute");
const Gallery = require("./route/GalleryRoute");
//const fileUpload = require('express-fileupload');

const DB_CONNECT =
  "mongodb+srv://anushkabansal2000:anushka2000@cluster0.oflov5c.mongodb.net/Educap?retryWrites=true&w=majority";

mongoose
  .connect(DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Database connection error", err));

app.use("/api/user", User);
app.use("/api/course", Course);
app.use("/api/batch", Batch);
app.use("/api/admin", Admin);
app.use("/api/career", Career);
app.use("/api/event", Event);
app.use("/api/gallery", Gallery);

app.listen(port, () => {
  console.log(`Example at listening on port...${port}`);
});
