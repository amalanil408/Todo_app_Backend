const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title : {
        require : true,
        type : String,
    },

    description : {
        type : String,
    },

    isCompleted : {
        type : Boolean,
        default : false
    },

    createdAt: {
        type : Date,
        default : Date.now,
    }
})

module.exports = mongoose.model("Todo" , todoSchema);