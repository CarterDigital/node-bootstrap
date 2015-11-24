
module.exports = function(app){
	
	var c = require("../controllers");

    app.get('/api/cat/:firstname/:lastname', function(req, res){
        c.api.createCat(req.params.firstname, req.params.lastname)
    });

    //other routes..
}
