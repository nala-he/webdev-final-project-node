import mongoose from 'mongoose';

const UsersSchema = mongoose.Schema({
    username: {type: String, required: true},
    firstName: String,
    lastName: String,
    type: {type: String, enum: ['REG USER', 'PRO CHEF', 'RECIPE CREATOR'], default: 'REG USER',
        required: true},
    avatar: String,
    bio: String,
    business: String,
    password: {type: String, required: true}
}, {collection: "users"});
export default UsersSchema;