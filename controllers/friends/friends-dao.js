import friendsModel from "./friends-model.js";

export const followUser = (following) =>
    friendsModel.create(following)

export const findUsersIamFollowing = (me) =>
    friendsModel.find({me})
        .populate('following')
        .exec();

export const findUsersIamFollowedBy = (me) =>
    friendsModel.find({me})
        .populate('followedBy')
        .exec();