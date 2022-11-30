import * as savedRecipesDao from "./saved-recipes-dao.js";

const SavedRecipesController = (app) => {
    app.post('/fridge/users/:uid/saved-recipes/:rid', createSavedRecipe);
}

const createSavedRecipe = async (req, res) => {
    const userId = req.params.uid;
    const recipeId = req.params.rid;
    const actualSavedRecipe = await savedRecipesDao.createSavedRecipe(userId, recipeId);
    res.json(actualSavedRecipe);
}

export default SavedRecipesController;