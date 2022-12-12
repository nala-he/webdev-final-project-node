import savedRecipesModel from "./saved-recipes-model.js";

export const createSavedRecipe = async (uid, rid) => {
    const actualSavedRecipe =
        await savedRecipesModel.create(
            {
                savedBy: uid,
                recipe: rid,
                spoonacularRecipe: null,
                spoonacularName: null
            });
    return actualSavedRecipe;
}

export const createSavedSpoonacularRecipe = async (uid, rid, name) => {
    const actualSavedRecipe =
        await savedRecipesModel.create(
            {
                savedBy: uid,
                spoonacularRecipe: rid,
                spoonacularName: name,
                recipe: null,
            }
        )
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
            .find({recipe: {$ne: null}})
            .populate("recipe")
            .exec();
    return recipesSavedByUser;
}

export const findSavedSpoonacularRecipesByUser = async (uid) => {
    const spoonacularSavedByUser =
        await savedRecipesModel
            .find({savedBy: uid})
            .find({spoonacularRecipe: {$ne: null}})
            .populate("spoonacularRecipe")
            .exec();
    return spoonacularSavedByUser;
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

export const deleteSavedRecipeByUserAndRecipeId = async (uid, rid) => {
    const status = await savedRecipesModel.deleteOne({savedBy: uid, recipe: rid});
    return status;
}

export const deleteSavedSpoonacularRecipeByUserAndRecipeId = async (uid, rid) => {
    const status = await savedRecipesModel.deleteOne({savedBy: uid, spoonacularRecipe: rid});
    return status;
}
