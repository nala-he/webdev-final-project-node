import mongoose from "mongoose";
import RecipeIngredientsSchema from "./recipe-ingredients-schema.js";

const RecipeIngredientsModel = mongoose.model("RecipeIngredientsModel", RecipeIngredientsSchema);
export default RecipeIngredientsModel;