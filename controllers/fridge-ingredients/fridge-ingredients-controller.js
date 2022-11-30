import * as fridgeIngredientsDao from "./fridge-ingredients-dao.js";

const FridgeIngredientsController = (app) => {
    app.post('/fridge/users/:uid/fridge-ingredients', createFridgeIngredient);
    app.delete('/fridge/fridge-ingredients/:ingredientId', deleteFridgeIngredient);
    app.put('/fridge/fridge-ingredients/:ingredientId', updateFridgeIngredient);
    app.get('/fridge/fridge-ingredients', findAllFridgeIngredients);
    app.get('/fridge/fridge-ingredients/:ingredientId', findFridgeIngredientById);
    app.get('/fridge/users/:uid/fridge-ingredients', findFridgeIngredientsByUser);
    app.get('/fridge/users/:uid/fridge-ingredients/checked', findCheckedFridgeIngredientsByUser);
}

const createFridgeIngredient = async (req, res) => {
    const userId = req.params.uid;
    const fridgeIngredient = req.body;
    const actualFridgeIngredient = await fridgeIngredientsDao.createFridgeIngredient(userId, fridgeIngredient);
    res.json(actualFridgeIngredient);
}

const deleteFridgeIngredient = async (req, res) => {
    const ingredientId = req.params['ingredientId'];
    const status = await fridgeIngredientsDao.deleteFridgeIngredient(ingredientId);
    res.send(status);
}

const updateFridgeIngredient = async (req, res) => {
    const ingredientId = req.params['ingredientId'];
    const ingredientUpdates = req.body;
    const status = await fridgeIngredientsDao.updateFridgeIngredient(ingredientId, ingredientUpdates);
    res.send(status);
}

const findAllFridgeIngredients = async (req, res) => {
    const fridgeIngredients = await fridgeIngredientsDao.findAllFridgeIngredients();
    res.send(fridgeIngredients);
}

const findFridgeIngredientById = async (req, res) => {
    const ingredientId = req.params['ingredientId'];
    const fridgeIngredient = await fridgeIngredientsDao.findFridgeIngredientById(ingredientId);
    res.send(fridgeIngredient);
}

const findFridgeIngredientsByUser = async (req, res) => {
    const userId = req.params.uid;
    const userIngredients = await fridgeIngredientsDao.findFridgeIngredientsByUser(userId);
    res.send(userIngredients);
}

const findCheckedFridgeIngredientsByUser = async (req, res) => {
    const userId = req.params.uid;
    const checkedIngredients = await fridgeIngredientsDao.findCheckedFridgeIngredientsByUser(userId);
    res.send(checkedIngredients);
}

export default FridgeIngredientsController;