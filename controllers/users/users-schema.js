import mongoose from 'mongoose';
import UsersType from "./users-type.js";

const UsersSchema = mongoose.Schema({
    username: {type: String, required: true},
    firstName: String,
    lastName: String,
    type: {type: UsersType, required: true},
    avatar: String,
    bio: String,
    business: String,
    password: {type: String, required: true}
}, {collection: "users"});
export default UsersSchema;