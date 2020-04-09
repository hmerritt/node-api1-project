const shortid = require("shortid");


//  Users array
let users = [
    {
      id: shortid.generate(), // hint: use the shortid npm package to generate it
      name: "Jane Doe", // String, required
      bio: "Not Tarzan's Wife, another Jane",  // String, required
    }
]

module.exports = {
    users
};
