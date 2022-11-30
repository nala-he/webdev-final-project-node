import usersModel from "./users-model.js";

export const findUsers = () => usersModel.find();
export const findUserById = (uid) => usersModel.findById(uid);
export const createUser = (user) => usersModel.create(user);
export const updateUser = (uid, user) => usersModel.updateOne({_id: uid}, {$set: user})
export const deleteUser = (uid) => usersModel.deleteOne({_id: uid});