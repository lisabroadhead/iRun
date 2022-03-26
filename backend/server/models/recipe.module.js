const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true, "Title is required"],
        minlength: [3, "Title needs to be at least 3 characters"]
    },
    description: {
        type:String,
        required: [true, "Product needs description"],
        minlength: [10, "You must have a minimum of 10 chacters"]
    },
    cooking:{
        type:Boolean
    },
    time:{
        type: String
    }
},{timestamps:true});

const Recipes = mongoose.model('Recipes', RecipeSchema);

module.exports = Recipes;