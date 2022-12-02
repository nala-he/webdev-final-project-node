import mongoose, {Schema} from 'mongoose';

const RecipesSchema = mongoose.Schema({
    authorId: {type: Schema.Types.ObjectId, ref: "UsersModel"},
    dishName: {type: String, default:''},
    intro: {type: String, default:''},
    recipePic: {type: String, default: "emptyRecipe.jpg"},
    prepTime: {type: String, default:''},
    cookTime: {type: String, default:''},
    totalTime: {type: String, default:''},
    servings: {type: Number, default:''},
    difficulty: {type: String, default:''},
    calories: {type: Number, default:''},
    fat: {type: String, default:''},
    carbs: {type: String, default:''},
    protein: {type: String, default:''},
    privacy: {type: String, enum: ['PUBLIC', 'PRIVATE'], default: 'PUBLIC'}
}, {collection:"recipes"});

export default RecipesSchema;