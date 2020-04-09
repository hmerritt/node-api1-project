const shortid = require("shortid");


//  Users array
const users = [
    genUserSchema({
        name: "Jane Doe",
        bio: "Not Tarzan's Wife, another Jane",
    })
]


//------------------------------------------------------------------------------


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
    users.push(
        genUserSchema(user)
    );
}


//  Get a user by their id
function getUserById(id) {
    return users.find(user => user.id === id)
};


//------------------------------------------------------------------------------


//  Exports
module.exports = {
    users,
    genUserSchema,
    addUser,
    getUserById
};
