const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const cbios = require("./routes/api/coachesbioses");
const photos = require("./routes/api/photos");
const path = require("path");
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoDbURI;


// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongo DB successfully connected"))
  .catch(err => console.log(err));



// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/coachesbioses",cbios);
app.use("/api/photos",photos);
//serve static assets if in production
if(process.env.NODE_ENV === "prodution"){
  //set static folder
  app.use(express.static("client/build"));
  app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,"client","build","index.html"));
  });
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

