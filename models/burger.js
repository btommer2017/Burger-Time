const orm = require("../config/orm.js");
// test connection to orm
// console.log (orm);


var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        console.log(res);
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(table, col, vals, cb) {
      orm.insertOne(table, col, vals, function(res) {
      //  console.log(table);
      //  console.log(col);
      //  console.log(vals);
        cb(res);
      });
    },
    updateOne: function(table, condition, burgerID,  cb) {
      orm.updateOne(table, condition, burgerID, function(res) {
        // console.log("UPDATE ONE BURGER FUNCTION %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        // console.log(res);
        // console.log("UPDATE ONE BURGER FUNCTION %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        cb(res);
      });
    },
   };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;
  