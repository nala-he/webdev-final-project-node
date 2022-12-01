import * as RecipesDao from "./recipes-dao.js"

const RecipesController = (app) => {
    app.get('/fridge/recipes', findRecipes);
    app.get('/fridge/recipes/:rid', findRecipeById);
    app.get('/fridge/users/:uid/recipes', findRecipesByAuthor);
    app.post('/fridge/recipes', createRecipe);
    app.delete('/fridge/recipes/:rid', deleteRecipe);
}

const findRecipes = async (req, res) => {
    const recipes = await RecipesDao.findRecipes();
    res.json(recipes);
}

const findRecipeById = async (req, res) => {
    const recipe = await RecipesDao.findRecipeById(req.params.rid);
    res.json(recipe);
}

const findRecipesByAuthor = async (req, res) => {
    const recipes = await RecipesDao.findRecipesByAuthor(req.params.uid);
    res.json(recipes);
}

const createRecipe = async (req, res) => {
    const recipe = await RecipesDao.createRecipe(req.body);
    res.json(recipe);
}

const deleteRecipe = async (req, res) => {
    const status = await RecipesDao.deleteRecipe(req.params.rid);
    res.json(status);
}

export default RecipesController