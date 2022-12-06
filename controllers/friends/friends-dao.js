import friendsModel from "./friends-model.js";

export const followUser = (following) =>
    friendsModel.create(following)

export const findUsersIamFollowing = (followedBy) =>
    friendsModel.find({followedBy})
        .populate('followedBy')
        .populate('following')
        .exec();

export const findUsersIamFollowedBy = (following) =>
   friendsModel.find({following})
        .populate('following')
        .populate('followedBy')
        .exec();


export const findAllFriendsPairs = () =>
    friendsModel.find();