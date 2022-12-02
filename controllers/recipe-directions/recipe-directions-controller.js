import * as RecipeDirectionsDao from "./recipe-directions-dao.js"

const RecipeDirectionsController = (app) => {
    app.get('/fridge/recipe-directions', findRecipeDirections);
    app.get('/fridge/recipe-directions/:directionId', findRecipeDirectionById);
    app.get('/fridge/recipes/:recipeId/directions', findDirectionsForRecipe);
    app.post('/fridge/recipe-directions', createRecipeDirection);
    app.delete('/fridge/recipe-directions/:directionId', deleteRecipeDirection);
}

const findRecipeDirections = async (req, res) => {
    const directions = await RecipeDirectionsDao.findRecipeDirections();
    res.send(directions);
}

const findRecipeDirectionById = async (req, res) => {
    const direction = await RecipeDirectionsDao.findRecipeDirectionById(req.params.directionId);
    res.send(direction);
}

const findDirectionsForRecipe = async (req, res) => {
    const directions = await RecipeDirectionsDao.findDirectionsForRecipe(req.params.recipeId);
    res.send(directions);
}

const createRecipeDirection = async (req, res) => {
    const direction = await RecipeDirectionsDao.createRecipeDirection(req.body);
    res.json(direction);
}

const deleteRecipeDirection = async (req, res) => {
    const status = await RecipeDirectionsDao.deleteRecipeDirection(req.params.directionId);
    res.send(status);
}

export default RecipeDirectionsController