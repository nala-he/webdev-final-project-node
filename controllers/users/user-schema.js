import mongoose from 'mongoose';
import UserType from "./user-type.js";

const UserSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    type: UserType,
    avatar: String,
    bio: String,
    business: String,
    password: String
}, {collection: "users"});
export default UserSchema;