var connection = require('./connection.js');

var orm = {

    selectAll: function(modelCallback){
        var sqlQuery = "SELECT * from burgers";
        connection.query(sqlQuery, function(error, result){
            if (error) {
                console.log("an error occured with selectAll:", error);
                return;
            }
            modelCallback(result);
        });
    },

    insertOne: function(INPUT_burger_name, INPUT_devoured, INPUT_formatted_date, modelCallback){
        var sqlQuery = 'INSERT INTO burgers (\`burger_name\`, \`devoured\`, \`date\` ) VALUES (\''+INPUT_burger_name+'\', '+INPUT_devoured+', STR_TO_DATE( \''+INPUT_formatted_date+'\', \'%d/%m/%Y %H:%i:%s\'));';
        connection.query(sqlQuery, function(error, result){
            if (error) {
                console.log("an error occured with selectAll:", error);
                return;
            }
            modelCallback(result);
        });
    },

    updateOne: function(INPUT_burger_name, INPUT_devoured_bool, modelCallback){
        var sqlQuery = 'UPDATE burgers SET devoured='+INPUT_devoured_bool+' where burger_name=\''+INPUT_burger_name+'\';';
        connection.query(sqlQuery, function(error, result){
            if (error) {
                console.log("an error occured with selectAll:", error);
                return;
            }
            modelCallback(result);
        });
    }

};

module.exports = orm;



