const shortid = require("shortid");


//  Users array
const users = [
    {
      id: shortid.generate(), // hint: use the shortid npm package to generate it
      name: "Jane Doe", // String, required
      bio: "Not Tarzan's Wife, another Jane",  // String, required
    }
]


//  Get a user by their id
const getUserById = (id) => {
    return users.find(user => user.id === id)
};


//  Exports
module.exports = {
    users,
    getUserById
};
