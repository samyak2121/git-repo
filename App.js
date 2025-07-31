const express = require("express");
const mongodb = require("./database");
const { auth, user } = require("./middleware/auth");

const User = require("./model/user")

const app = express();


app.use(express.json());


app.post("/signup",async (req,res)=>{

  console.log(req.body)
    const userobj = new User(req.body)

    await userobj.save();
    res.send("data sent");  

    
})

mongodb()
  .then(() => {
    console.log("🚀 MongoDB connected successfully!");
    app.listen(3000, () => console.log("🛰️ Server listening on port 3000"));
  })
  .catch((err) => {
    console.error("💥 Connection failed:", err);
  });
