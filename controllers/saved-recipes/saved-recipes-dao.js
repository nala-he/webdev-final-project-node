import savedRecipesModel from "./saved-recipes-model.js";

export const createSavedRecipe = async (uid, rid) => {
    const actualSavedRecipe =
        await savedRecipesModel.create(
            {
                savedBy: uid,
                recipe: rid
            });
    return actualSavedRecipe;
}

export const findAllSavedRecipes = async () => {
    const allSavedRecipes =
        await savedRecipesModel
            .find()
            .populate("recipe")
            .exec();
    return allSavedRecipes;
}

export const findSavedRecipeById = async (savedRecipeId) => {
    const savedRecipe =
        await savedRecipesModel
            .findById(savedRecipeId)
            .populate("recipe")
            .exec();
    return savedRecipe;
}

export const findSavedRecipesByUser = async (uid) => {
    const recipesSavedByUser =
        await savedRecipesModel
            .find({savedBy: uid})
            .populate("recipe")
            .exec();
    return recipesSavedByUser;
}

export const findSavedRecipesByRecipe = async (rid) => {
    const recipes =
        await savedRecipesModel
            .find({recipe: rid})
            .populate("recipe")
            .exec();
    return recipes;
}

export const updateSavedRecipe = async (savedRecipeId, savedRecipeUpdates) => {
    const status = await savedRecipesModel.updateOne(
        {_id: savedRecipeId},
        {$set: savedRecipeUpdates}
    );
    return status;
}

export const deleteSavedRecipe = async (savedRecipeId) => {
    const status = await savedRecipesModel.deleteOne({_id: savedRecipeId});
    return status;
}