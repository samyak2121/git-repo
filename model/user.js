const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    FirstName : {
        type : String
    },
    LastName : {
        type : String
    },
    Age : {
        type : Number
    },
    Email : {
        type : String
    },
})



const User = mongoose.model("user",userSchema);



module.exports = User
