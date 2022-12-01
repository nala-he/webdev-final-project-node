import mongoose, {Schema} from "mongoose";

const fridgeIngredientsSchema = mongoose.Schema({
    checked: {type: Boolean, default: false},
    title: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: "UsersModel", required: true},
}, {collection: "fridge-ingredients"});

export default fridgeIngredientsSchema;