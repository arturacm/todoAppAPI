const express = require("express");

const app = express();

const {getBacklog, postBacklog} = require("./src/controllers/backlogController.js");
const {getUsers, postUsers} = require("./src/controllers/usersController.js");
const {getHistory, postHistory} = require("./src/controllers/historyController.js");

getBacklog(app);
postBacklog(app);

getHistory(app);
postHistory(app);

getUsers(app);
postUsers(app);

app.listen(3000);