import mongoose from "mongoose";
import fridgeIngredientsSchema from "./fridge-ingredients-schema.js";

const fridgeIngredientsModel = mongoose.model('FridgeIngredientModel', fridgeIngredientsSchema);

export default fridgeIngredientsModel;