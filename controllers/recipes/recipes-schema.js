import mongoose, {Schema} from 'mongoose';

const RecipesSchema = mongoose.Schema({
    authorId: {type: Schema.Types.ObjectId, ref: "UsersModel"},
    dishName: {type: String, default:null},
    intro: {type: String, default:null},
    recipePic: {type: String, default: "emptyRecipe.jpg"},
    prepTime: {type: String, default:null},
    cookTime: {type: String, default:null},
    totalTime: {type: String, default:null},
    servings: {type: Number, default:null},
    difficulty: {type: String, default:null},
    calories: {type: Number, default:null},
    fat: {type: String, default:null},
    carbs: {type: String, default:null},
    protein: {type: String, default:null},
    privacy: {type: String, enum: ['PUBLIC', 'PRIVATE'], default: 'PUBLIC'}
}, {collection:"recipes"});

export default RecipesSchema;