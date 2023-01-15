const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({

    UserName: {
        type: String,
     
    },
    email: {
        type: String,
      
    },
    password: {
        type: String,
     
    },
    confirmPassword: {
        type: String,
    
    },
    mobile: {
        type: Number,
       
    },
    referalCode: {
        type: String,
      
    }

})

module.exports = mongoose.model('User',userSchema)