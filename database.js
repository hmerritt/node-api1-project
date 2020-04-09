const shortid = require("shortid");


//  Users array
let users = [
    genUserSchema({
        name: "Jane Doe",
        bio: "Not Tarzan's Wife, another Jane",
    })
]


//------------------------------------------------------------------------------


//  Get all users
function getUsers() {
    return users;
}


//  Get a user by their id
function getUserById(id) {
    return users.find(user => user.id === id)
}


//  Generate user schema
function genUserSchema(user) {
    return {
        id: shortid.generate(),
        name: user.name,
        bio: user.bio
    }
}


//  Add a user
function addUser(user) {
    //  Create new user object
    const newUser = genUserSchema(user);

    // Add new user to users array
    users.push(newUser);

    // Return the new user object
    return newUser;
}


//  Delete user (by id)
function deleteUser(id) {
    //  Get user object to delete
    deletedUser = getUserById(id);

    //  Delete user from users
    users = users.filter(user => user.id !== id);

    //  Return deleted user
    return deletedUser;
}


//  Delete user (by id)
function updateUser(id, user) {
    //  Get users index in array
    const index = users.findIndex(user => user.id === id);

    //  Update user
    users[index] = {
        ...users[index],
        ...user
    }

    //  Return updated user
    return users[index];
}


//------------------------------------------------------------------------------


//  Exports
module.exports = {
    getUsers,
    getUserById,
    genUserSchema,
    addUser,
    deleteUser,
    updateUser
};
