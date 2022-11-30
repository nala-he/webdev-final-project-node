import mongoose, {Schema} from "mongoose";

const savedRecipesSchema = mongoose.Schema({
    savedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    recipe: {type: Schema.Types.ObjectId, ref: "RecipeModel"},
}, {collection: "saved-recipes"});

export default savedRecipesSchema;