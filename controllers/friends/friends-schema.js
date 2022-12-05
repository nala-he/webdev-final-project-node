import mongoose from "mongoose";

const friendsSchema = mongoose.Schema({
    followedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    following: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
}, {collection: 'friends'})

export default friendsSchema