import mongoose from 'mongoose';

const RecipesSchema = mongoose.Schema({
    authorId: {type: Schema.Types.ObjectId, ref: "UserModel"},
    author: String,
    avatar: String,
    dishname: {type: String, required: true},
    intro: {type: String, required: true},
    recipePic: {type: String, default: "emptyRecipe.jpg"},
    prepTime: {type: String, required: true},
    cookTime: {type: String, required: true},
    totalTime: {type: String, required: true},
    servings: {type: Number, required: true},
    difficulty: {type: String, required: true},
    calories: {type: String, required: true},
    fat: {type: String, required: true},
    carbs: {type: String, required: true},
    protein: {type: String, required: true}
}, {collection:"recipes"});

export default RecipesSchema;