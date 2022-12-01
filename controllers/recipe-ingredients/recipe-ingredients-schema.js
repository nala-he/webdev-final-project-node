import mongoose, {Schema} from 'mongoose';

const RecipeIngredientsSchema = mongoose.Schema({
    rid: {type: Schema.Types.ObjectId, ref: "RecipesModel",required: true},
    ingredient: {type: String, required: true},
}, {collection:"recipeIngredients"});

export default RecipeIngredientsSchema;