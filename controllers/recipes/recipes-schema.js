import mongoose, {Schema} from 'mongoose';

const RecipesSchema = mongoose.Schema({
    authorId: {type: Schema.Types.ObjectId, ref: "UsersModel",required: true},
    dishName: {type: String, required: true, default:''},
    intro: {type: String, required: true, default:''},
    recipePic: {type: String, default: "emptyRecipe.jpg"},
    prepTime: {type: String, required: true, default:''},
    cookTime: {type: String, required: true, default:''},
    totalTime: {type: String, required: true, default:''},
    servings: {type: Number, required: true, default:''},
    difficulty: {type: String, required: true, default:''},
    calories: {type: Number, required: true, default:''},
    fat: {type: String, required: true, default:''},
    carbs: {type: String, required: true, default:''},
    protein: {type: String, required: true, default:''},
    privacy: {type: String, enum: ['PUBLIC', 'PRIVATE'], default: 'PUBLIC'}
}, {collection:"recipes"});

export default RecipesSchema;