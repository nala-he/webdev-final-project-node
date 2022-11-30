import mongoose, {Schema} from "mongoose";

const savedRecipesSchema = mongoose.Schema({
    savedBy: {type: Schema.Types.ObjectId, ref: "UserModel", required: true},
    recipe: {type: Schema.Types.ObjectId, ref: "RecipeModel", required: true},
}, {collection: "saved-recipes"});

export default savedRecipesSchema;