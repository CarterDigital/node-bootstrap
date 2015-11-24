var models = require("../models")

var functions = {

    createCat : function(firstName, lastName){
        var kitty = new models.cat.init({ firstName: firstName, lastName: lastName });
        kitty.save(function (err) {
          if (err){
	          console.log("err")
          }
  		});
    }

};

module.exports = functions;
