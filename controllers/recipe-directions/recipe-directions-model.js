import mongoose from "mongoose";
import RecipeDirectionsSchema from "./recipe-directions-schema.js";

const RecipeDirectionsModel = mongoose.model("RecipeDirectionsModel", RecipeDirectionsSchema);
export default RecipeDirectionsModel;