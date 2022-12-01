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
    // I will add the following back after testing on previously existed users
    // const password = newUser.password;
    // const hash = await bcrypt.hash(password, saltRounds);
    // newUser.password = hash;

    const existingUser = await usersDao.findUserByUsername(req.body.username);
    if (existingUser) {
        res.sendStatus(403);
        return;
    } else {
        const insertedUser = await usersDao
            .createUser(newUser);
        insertedUser.password= '';
        req.session['profile'] = insertedUser;
        return res.json(insertedUser);
    }
}

const profile = (req, res) => {
    const profile = req.session['profile'];
    if (profile) {
        profile.password = "";
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

    // const match = await bcrypt.compare(password, existingUser.password);
    const match = (password === existingUser.password);

    if (match) {
        existingUser.password = '*****';
        req.session['profile'] = existingUser;
        return res.json(existingUser);
    } else {
        res.sendStatus(403);
    }
}

export default AuthenticationController;