import mongoose from "mongoose";

const friendsSchema = mongoose.Schema({
    followedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'UsersModel'},
    following: {type: mongoose.Schema.Types.ObjectId, ref: 'UsersModel'},
}, {collection: 'friends'})

export default friendsSchema