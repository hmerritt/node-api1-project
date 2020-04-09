const express = require("express");
const shortid = require("shortid");
const db      = require("./database");


//  Create http server
const server = express();

//
server.use(express.json());


//------------------------------------------------------------------------------


//  Show hello message
server.get("/", (req, res) => {
	res.json({ message: "hello world!" })
})


//  Get all users
server.get("/api/users", (req, res) => {
    const users = db.getUsers();

    if (users) {
        res.json(users);
    }
    else {
        res.status(500).json({
            message: "There was an error while saving the user to the database."
        });
    }
});


//  Create new user
server.post("/api/users", (req, res) => {
    //  Check request contains correct post data
    if (!req.body.name) {
		return res.status(400).json({
			errorMessage: "Please provide name and bio for the user.",
		})
	}

    //  Add user
    const newUser = db.addUser({
        name: req.body.name,
        bio: req.body.bio
    });

    //  Return new user
    res.status(201).json(newUser)
});


//  Get individual user by id
server.get("/api/users/:id", (req, res) => {
    const user = db.getUserById(req.params.id);

    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            message: "The user with the specified ID does not exist."
        });
    }
});


//  Delete user
server.delete("/api/users/:id", (req, res) => {
    const userId = req.params.id;

    //  Delete user
    const deletedUser = db.deleteUser(userId);

    //  Return deleted user
    res.status(201).json(deletedUser)
});


//  Update user
server.patch("/api/users/:id", (req, res) => {
    const userId = req.params.id;

    //  Update user
    updatedUser = db.updateUser(userId, req.body)

    //  Return deleted user
    res.status(201).json(updatedUser)
});


//------------------------------------------------------------------------------


//  Expose port 8000
const port = 8000;
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
