import mongoose, {Schema} from "mongoose";

const savedRecipesSchema = mongoose.Schema({
    savedBy: {type: Schema.Types.ObjectId, ref: "UsersModel", required: true},
    recipe: {type: Schema.Types.ObjectId, ref: "RecipesModel", required: true},
}, {collection: "saved-recipes"});

export default savedRecipesSchema;