console.log("hello world")
var derek = function()  {
   
};

(function() {
   this.prop = ""
}).call(derek.prototype);

exports.derek = derek;