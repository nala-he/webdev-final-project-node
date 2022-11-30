import mongoose from "mongoose";
import savedRecipesSchema from "./saved-recipes-schema.js";

const savedRecipesModel = mongoose.model('SavedRecipeModel', savedRecipesSchema);

export default savedRecipesModel;