import mongoose from 'mongoose';

const RecipesSchema = mongoose.Schema({
    authorId: {type: Schema.Types.ObjectId, ref: "UserModel"},

}, {collection:"recipes"});

export default RecipesSchema;