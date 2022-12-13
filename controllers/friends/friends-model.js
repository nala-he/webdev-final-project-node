import mongoose from "mongoose";
import friendsSchema from "./friends-schema.js";

const friendsModel = mongoose.model('FriendsModel', friendsSchema)

export default friendsModel