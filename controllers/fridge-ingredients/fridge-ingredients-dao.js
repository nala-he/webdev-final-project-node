import fridgeIngredientsModel from "./fridge-ingredients-model.js";

export const createFridgeIngredient = async (uid, fridgeIngredient) => {
    const actualIngredient =
        await fridgeIngredientsModel.create(
            {
                ...fridgeIngredient,
                user: uid
            }
        );
    return actualIngredient;
}

export const deleteFridgeIngredient = async (ingredientId) => {
    const status = await fridgeIngredientsModel.deleteOne({_id: ingredientId});
    return status;
}

export const updateFridgeIngredient = async (ingredientId, ingredientUpdates) => {
    const status = await fridgeIngredientsModel.updateOne(
        {_id: ingredientId},
        {$set: ingredientUpdates}
    );
    return status;
}

export const findAllFridgeIngredients = async () => {
    const allFridgeIngredients =
        await fridgeIngredientsModel
            .find()
            .populate("user")
            .exec();
    return allFridgeIngredients;
}

export const findFridgeIngredientById = async (ingredientId) => {
    const fridgeIngredient = await fridgeIngredientsModel.findById(ingredientId)
                                                         .populate("user").exec();
    return fridgeIngredient;
}

export const findFridgeIngredientsByUser = async (uid) => {
    const userIngredients = await fridgeIngredientsModel.find({user: uid});
    return userIngredients;
}

export const findCheckedFridgeIngredientsByUser = async (uid) => {
    const userCheckedIngredients = await fridgeIngredientsModel.find({user: uid, checked: true});
    return userCheckedIngredients;
}