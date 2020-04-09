const fs      = require("fs");
const express = require("express");


//  Create http server
const server = express();


//  Expose port 8000
const port = 8000;
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
