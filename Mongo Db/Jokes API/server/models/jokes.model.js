const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup:{
		type:String,
		required:[true,"setup is Required"],
		minlength:[10,"setup must be at lest 10 character "]
	},
	punchiline:{
		type:String,
		required:[true,"punchiline is Required"],
		minlength:[3,"punchiline must be at lest 10 character "]
	}
});

const Joke = mongoose.model("Joke",JokeSchema);

module.exports = Joke;