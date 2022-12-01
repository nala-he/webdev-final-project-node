import RecipeIngredientsModel from "./recipe-ingredients-model.js";

export const findRecipeIngredients = () => RecipeIngredientsModel.find();

export const findRecipeIngredientById = (ingredientId) => RecipeIngredientsModel.findById(ingredientId);

export const findIngredientsForRecipe = (recipeId) => RecipeIngredientsModel.find({rid: recipeId});

export const createRecipeIngredient = (ingredient) => RecipeIngredientsModel.create(ingredient);

export const deleteRecipeIngredient = (ingredientId) => RecipeIngredientsModel.deleteOne({_id: ingredientId});