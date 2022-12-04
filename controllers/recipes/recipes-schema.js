import mongoose, {Schema} from 'mongoose';

const RecipesSchema = mongoose.Schema({
    authorId: {type: Schema.Types.ObjectId, ref: "UsersModel"},
    avatar: {type: String, default:undefined},
    authorName: {type: String, default:undefined},
    dishName: {type: String, default:undefined},
    intro: {type: String, default:undefined},
    recipePic: {type: String, default: "emptyRecipe.jpg"},
    prepTime: {type: String, default:undefined},
    cookTime: {type: String, default:undefined},
    totalTime: {type: String, default:undefined},
    servings: {type: String, default:undefined},
    difficulty: {type: String, default:undefined},
    calories: {type: String, default:undefined},
    fat: {type: String, default:undefined},
    carbs: {type: String, default:undefined},
    protein: {type: String, default:undefined},
    privacy: {type: String, enum: ['PUBLIC', 'PRIVATE'], default: 'PUBLIC'}
}, {collection:"recipes"});

export default RecipesSchema;