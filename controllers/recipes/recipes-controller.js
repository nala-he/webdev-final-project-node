import * as RecipesDao from "./recipes-dao.js"

const RecipesController = (app) => {
    app.get('/fridge/recipes', findRecipes);
    app.get('/fridge/recipes/:rid', findRecipeById);
    app.get('/fridge/users/:uid/recipes', findRecipesByAuthor);
    app.post('/fridge/users/:uid/recipes', createRecipe);
    app.delete('/fridge/recipes/:rid', deleteRecipe);
}

const findRecipes = async (req, res) => {
    const recipes = await RecipesDao.findRecipes();
    res.send(recipes);
}

const findRecipeById = async (req, res) => {
    const recipe = await RecipesDao.findRecipeById(req.params.rid);
    res.send(recipe);
}

const findRecipesByAuthor = async (req, res) => {
    const recipes = await RecipesDao.findRecipesByAuthor(req.params.uid);
    res.send(recipes);
}

const createRecipe = async (req, res) => {
    const recipe = await RecipesDao.createRecipe(req.uid);
    res.json(recipe);
}

const deleteRecipe = async (req, res) => {
    const status = await RecipesDao.deleteRecipe(req.params.rid);
    res.send(status);
}

export default RecipesController