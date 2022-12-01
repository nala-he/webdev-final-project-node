import mongoose from "mongoose";
import RecipesSchema from "./recipes-schema.js";

const RecipesModel = mongoose.model("RecipesModel", RecipesSchema);
export default RecipesModel;