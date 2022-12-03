import * as savedRecipesDao from "./saved-recipes-dao.js";

const SavedRecipesController = (app) => {
    app.post('/fridge/users/:uid/saved-recipes/:rid', createSavedRecipe);
    app.get('/fridge/saved-recipes', findAllSavedRecipes);
    app.get('/fridge/saved-recipes/:savedRecipeId', findSavedRecipeById);
    app.get('/fridge/users/:uid/saved-recipes', findSavedRecipesByUser);
    app.get('/fridge/recipes/:rid/saved-recipes', findSavedRecipesByRecipe);
    app.put('/fridge/saved-recipes/:savedRecipeId', updateSavedRecipe);
    app.delete('/fridge/saved-recipes/:savedRecipeId', deleteSavedRecipe);
    app.delete('/fridge/users/:uid/saved-recipes/recipes/:rid', deleteSavedRecipeByUserAndRecipeId);
}

const createSavedRecipe = async (req, res) => {
    const userId = req.params.uid;
    const recipeId = req.params.rid;
    const actualSavedRecipe = await savedRecipesDao.createSavedRecipe(userId, recipeId);
    res.json(actualSavedRecipe);
}

const findAllSavedRecipes = async (req, res) => {
    const savedRecipes = await savedRecipesDao.findAllSavedRecipes();
    res.send(savedRecipes);
}

const findSavedRecipeById = async (req, res) => {
    const recipeId = req.params['savedRecipeId'];
    const savedRecipe = await savedRecipesDao.findSavedRecipeById(recipeId);
    res.send(savedRecipe);
}

const findSavedRecipesByUser = async (req, res) => {
    const userId = req.params.uid;
    const savedRecipes = await savedRecipesDao.findSavedRecipesByUser(userId);
    res.send(savedRecipes);
}

const findSavedRecipesByRecipe = async (req, res) => {
    const recipeId = req.params.rid;
    const savedRecipes = await savedRecipesDao.findSavedRecipesByRecipe(recipeId);
    res.send(savedRecipes);
}

const updateSavedRecipe = async (req, res) => {
    const savedRecipeId = req.params['savedRecipeId'];
    const updates = req.body;
    const status = await savedRecipesDao.updateSavedRecipe(savedRecipeId, updates);
    res.send(status)
}

const deleteSavedRecipe = async (req, res) => {
    const savedRecipeId = req.params['savedRecipeId'];
    const status = await savedRecipesDao.deleteSavedRecipe(savedRecipeId);
    res.send(status);
}

const deleteSavedRecipeByUserAndRecipeId = async (req, res) => {
    const uid = req.params.uid;
    const rid = req.params.rid;
    const status = await savedRecipesDao.deleteSavedRecipeByUserAndRecipeId(uid, rid);
    res.send(status);
}

export default SavedRecipesController;