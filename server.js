const express = require("express");
const shortid = require("shortid");
const db      = require("./database");


//  Create http server
const server = express();


//------------------------------------------------------------------------------


//  Show hello message
server.get("/", (req, res) => {
	res.json({ message: "hello world!" })
})


//  Get all users
server.get("/api/users", (req, res) => {
    res.json(db.users);
});


//  Get individual user by id
server.get("/api/users/:id", (req, res) => {
    const user = db.getUserById(req.params.id);

    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            message: "User not found"
        });
    }
});


//------------------------------------------------------------------------------


//  Expose port 8000
const port = 8000;
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
