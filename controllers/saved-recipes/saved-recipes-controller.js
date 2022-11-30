import * as savedRecipesDao from "./saved-recipes-dao.js";

const SavedRecipesController = (app) => {
    app.post('/fridge/users/:uid/saved-recipes/:rid', createSavedRecipe);
}

const createSavedRecipe = async (req, res) => {
    const userId = req.params.uid;
    const recipeId = req.params.rid;
    const savedRecipe = {
        savedBy: userId,
        recipe: recipeId
    };
    const actualSavedRecipe = await savedRecipesDao.createSavedRecipe(savedRecipe);
    res.json(actualSavedRecipe);
}

export default SavedRecipesController;