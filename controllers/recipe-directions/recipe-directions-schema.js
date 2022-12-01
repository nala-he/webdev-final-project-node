import mongoose, {Schema} from 'mongoose';

const RecipeDirectionsSchema = mongoose.Schema({
    rid: {type: Schema.Types.ObjectId, ref: "RecipesModel",required: true},
    direction: {type: String, required: true},
}, {collection:"recipeDirections"});

export default RecipeDirectionsSchema;