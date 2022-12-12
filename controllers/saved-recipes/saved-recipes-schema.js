import mongoose, {Schema} from "mongoose";

const savedRecipesSchema = mongoose.Schema({
    savedBy: {type: Schema.Types.ObjectId, ref: "UsersModel", required: true},
    recipe: {type: Schema.Types.ObjectId, ref: "RecipesModel"},
    spoonacularRecipe: String,
    spoonacularName: String,
}, {collection: "saved-recipes"});

export default savedRecipesSchema;