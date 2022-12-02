import RecipeDirectionsModel from "./recipe-directions-model.js";

export const findRecipeDirections = () => RecipeDirectionsModel.find();

export const findRecipeDirectionById = (directionId) => RecipeDirectionsModel.findById(directionId);

export const findDirectionsForRecipe = (recipeId) => RecipeDirectionsModel.find({rid: recipeId});

export const createRecipeDirection = (direction) => RecipeDirectionsModel.create(direction);

export const deleteRecipeDirection = (directionId) => RecipeDirectionsModel.deleteOne({_id: directionId});