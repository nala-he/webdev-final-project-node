import * as friendsDao from './friends-dao.js'
import {deleteFriendsByFollower} from "./friends-dao.js";

const FriendsController = (app) => {
    app.post('/fridge/users/:uid/friends', followUser)
    app.get('/fridge/users/:uid/following', findUsersIamFollowing)
    app.get('/fridge/users/:uid/followedBy', findUsersIamFollowedBy)
    app.get('/fridge/friends', findAllFriendsPairs)
    app.delete('/fridge/users/:uid/followedBy', unfollowFriends)
}

const followUser = async (req, res) => {
    const me = req.session['currentUser'];
    const following = req.params.uid;
    const existingFollowing = await friendsDao.findUsersIamFollowing(me);
    const existed = existingFollowing.filter(each => each.following._id.toString() === following);
    if (existed.length > 0) {
        res.sendStatus(403);
        return;
    } else {
        const follow = {
            followedBy: me,
            following: following
        };
        const actualFollow = await friendsDao.followUser(follow);
        res.json(actualFollow);
    }
}

const findUsersIamFollowing = async (req, res) => {
    const me = req.params.uid;
    const followings = await friendsDao.findUsersIamFollowing(me)
    res.json(followings)
}

const findUsersIamFollowedBy = async (req, res) => {
    const me = req.params.uid
    const followedBys = await friendsDao.findUsersIamFollowedBy(me)
    res.json(followedBys)
}

const findAllFriendsPairs = (req, res) =>
    friendsDao.findAllFriendsPairs()
        .then(data => res.json(data));

const unfollowFriends = async (req, res) => {
    const result = await friendsDao.deleteFriendsByFollower(req.params.uid);
    res.json(result);
}


export default FriendsController;