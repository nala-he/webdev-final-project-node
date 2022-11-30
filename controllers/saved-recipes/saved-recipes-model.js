import mongoose from "mongoose";
import savedRecipesSchema from "./saved-recipes-schema.js";

const savedRecipesModel = mongoose.model('SavedRecipesModel', savedRecipesSchema);

export default savedRecipesModel;