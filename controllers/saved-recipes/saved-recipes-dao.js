import savedRecipesModel from "./saved-recipes-model.js";

export const createSavedRecipe = async (uid, rid) => {
    const actualSavedRecipe = await savedRecipesModel.create({savedBy: uid, recipe: rid});
    return actualSavedRecipe;
}