var connection = require("../config/connection.js")

// selectAll()
// insertOne()
// updateOne()
var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, col, vals, cb) {
   
      connection.query("INSERT INTO ?? (??) VALUES (?)", [table, col, vals], function(err, results) {
        if (err) {
          throw err;
        }
      cb(results)
      });
    },

    // An example of objColVals would be {name: Big Mac, devoured: false}
    updateOne: function(table, condition, burgerID,  cb) {
   
      connection.query("UPDATE ?? SET ?? = 1 WHERE id = ?", [table, condition, burgerID], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;
  