const mongoose = require('mongoose');



const mongodb = async () => {
    
    await mongoose.connect(
        "mongodb+srv://samyakmaherchandani22cse:samyak123456789@samyaknodejs.477kean.mongodb.net/")
    
};


module.exports= mongodb




