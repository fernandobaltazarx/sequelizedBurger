var orm = require('../config/orm.js');
var dateFormat = require('dateformat');

var burgerModel = {

    selectAll: function(modelCallback){
        orm.selectAll(function(response){
            modelCallback(response);
        });
    },

    insertOne: function(INPUT_burger_name, modelCallback){
    	var now = new Date();
		now = dateFormat(now, "dd/mm/yyyy h:MM:ss");
    	orm.insertOne(INPUT_burger_name, 0, now, function(response){
    		modelCallback(response);
        });
    },

    updateOne: function(INPUT_burger_name, INPUT_devoured_bool, modelCallback){
    	orm.updateOne(INPUT_burger_name, INPUT_devoured_bool, function(response){
    		modelCallback(response);
        });
    }

};

module.exports = burgerModel;
