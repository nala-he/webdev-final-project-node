import RecipesModel from "./recipes-model.js";

export const findRecipes = () => RecipesModel.find();

export const findRecipeById = (rid) => RecipesModel.findById(rid);

export const findRecipesByAuthor = (uid) => RecipesModel.find({authorId: uid});

// export const createRecipe = (uid) => RecipesModel.create(recipe);

export const createRecipe = async (uid) => {
    const recipe =
        await RecipesModel.create(
            {
                authorId: uid
            }
        );
    return recipe;
}

export const deleteRecipe = (rid) => RecipesModel.deleteOne({_id: rid});