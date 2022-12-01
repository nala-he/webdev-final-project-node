import * as RecipeIngredientsDao from "./recipe-ingredients-dao.js"

const RecipeIngredientsController = (app) => {
    app.get('/fridge/recipes', findRecipeIngredients);
    app.get('/fridge/recipes/:rid', findRecipeIngredientById);
    app.get('/fridge/users/:uid/recipes', findIngredientsForRecipe);
    app.post('/fridge/recipes', createRecipeIngredient);
    app.delete('/fridge/recipes/:rid', deleteRecipeIngredient);
}

const findRecipeIngredients = async (req, res) => {
    const ingredients = await RecipeIngredientsDao.findRecipeIngredients();
    res.send(ingredients);
}

const findRecipeIngredientById = async (req, res) => {
    const ingredient = await RecipeIngredientsDao.findRecipeIngredientById(req.params.ingredientId);
    res.send(ingredient);
}

const findIngredientsForRecipe = async (req, res) => {
    const ingredients = await RecipeIngredientsDao.findIngredientsForRecipe(req.params.recipeId);
    res.send(ingredients);
}

const createRecipeIngredient = async (req, res) => {
    const ingredient = await RecipeIngredientsDao.createRecipeIngredient(req.body);
    res.json(ingredient);
}

const deleteRecipeIngredient = async (req, res) => {
    const status = await RecipeIngredientsDao.deleteRecipeIngredient(req.params.ingredientId);
    res.send(status);
}

export default RecipeIngredientsController