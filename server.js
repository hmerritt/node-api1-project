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


//  All users
server.get("/api/users", (req, res) => {
    res.json(db.users);
});


//  All users
server.get("/api/users/:id", (req, res) => {
    res.json(
        db.getUserById(req.params.id)
    );
});


//------------------------------------------------------------------------------


//  Expose port 8000
const port = 8000;
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
