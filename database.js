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
    users = users.filter(user => user.id != id);

    //  Return deleted user
    return deletedUser;
}


//  Get a user by their id
function getUserById(id) {
    return users.find(user => user.id === id)
};


//------------------------------------------------------------------------------


//  Exports
module.exports = {
    getUsers,
    genUserSchema,
    addUser,
    deleteUser,
    getUserById
};
