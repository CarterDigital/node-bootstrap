var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', 
	{ 
		firstName: String,
		lastName: String,
	}
);

var functions = {

	init : Cat

};

module.exports = functions;
