import * as friendsDao from './friends-dao.js'

const FriendsController = (app) => {
    app.post('/fridge/friends', followUser)
    app.get('/fridge/users/:uid/following', findUsersIamFollowing)
    app.get('/fridge/users/:uid/followedBy', findUsersIamFollowedBy)
}

const followUser = async (req, res) => {
    const follow = req.body;
    const currentUser = req.session['currentUser'];
    follow.followedBy = currentUser._id;
    const actualFollow = await friendsDao.followUser(follow)
    res.json(actualFollow)
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

export default FriendsController;