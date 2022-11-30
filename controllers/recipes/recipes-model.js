import mongoose from "mongoose";
import RecipesSchema from "./recipes-schema";

const RecipesModel = mongoose.model("RecipesModel", RecipesSchema);
export default RecipesModel;