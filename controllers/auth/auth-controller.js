import * as usersDao from "../users/users-dao.js";
// import bcrypt from "bcrypt";
// const saltRounds = 10;

const AuthenticationController = (app) => {
    app.post("/fridge/auth/signup", signup);
    app.post("/fridge/auth/profile", profile);
    app.post("/fridge/auth/logout", logout);
    app.post("/fridge/auth/login", login);
}

const signup = async (req, res) => {
    const newUser = req.body;
    const existingUser = await usersDao.findUserByUsername(req.body.username);
    if (existingUser) {
        res.sendStatus(403);
        return;
    } else {
        const currentUser = await usersDao.createUser(newUser);
        currentUser.password = '';
        req.session['currentUser'] = currentUser;
        return res.json(currentUser);
    }
}

const profile = (req, res) => {
    const profile = req.session['currentUser'];
    if (profile) {
        res.json(profile);
    } else {
        res.sendStatus(403);
    }
}

const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
}

const login = async (req, res) => {
    const user = req.body;
    const username = user.username;
    const password = user.password;
    const existingUser = await usersDao.findUserByUsername(username);

    if (!existingUser) {
        res.sendStatus(403);
        return;
    }

    const match = (password === existingUser.password);

    if (match) {
        req.session['currentUser'] = existingUser;
        return res.json(existingUser);
    } else {
        res.sendStatus(403);
    }
}

export default AuthenticationController;