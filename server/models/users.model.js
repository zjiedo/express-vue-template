const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userModel = new Schema({
	username: String,
	password: String
})

let users = mongoose.model("users", userModel);

module.exports = users;