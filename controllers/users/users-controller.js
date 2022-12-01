import * as usersDao from '../users/users-dao.js';

const UsersController = (app) => {
    app.get('/fridge/users', findUsers);
    app.get('/fridge/users/:uid', findUserById);
    app.post('/fridge/users', createUser);
    app.delete('/fridge/users/:uid', deleteUser);
    app.put('/fridge/users/:uid', updateUser);
}

const findUsers = async (req, res) => {
    const users = await usersDao.findUsers();
    res.json(users);
}

const findUserById = async (req, res) => {
    const user = await usersDao.findUserById(req.params.uid);
    res.json(user);
}

const createUser = async (req, res) => {
    const user = await usersDao.createUser(req.body);
    res.json(user);
}

const updateUser = async (req, res) => {
    const status = await usersDao.updateUser(req.params.uid, req.body);
    res.json(status);
}

const deleteUser = async (req, res) => {
    const status = await usersDao.deleteUser(req.params.uid);
    res.json(status);
}

export default UsersController