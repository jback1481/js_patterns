/**
 * From: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
 * 
 * Here we see our anonymous closure, we use this self executing function to ensure
 * that all vars we initialize are garbage collected after script execution.
 * 
 * This prevents us from polluting the global namespace of JS and  also provides 
 * privacy and state throughout the lifetime of your application. We wrap this
 * function in () to create a "function expression" which executes the function.
 * 
 * (function () {
 *   // ... all vars and functions are in this scope only
 *   // still maintains access to all globals
 * }());
*/

/**
 * An apple object
 * 
 * @param $ obj The JQuery library, this is a dependancy
 * @param obj obj Any existing Apple object to be mutated
 * @param options obj An object of properties for the apple 
 * 
 * @type obj A JS object for an Apple
 */
var Apple = (function ($, obj, options) { // Anonymous closure wrapped in () to execute
  
  var obj = {},
  defaults = {
    bitesLeft : 30,
    color : 'red',
    type  : 'honeycrisp',
    seeds : 8,
    weight : 0.5
  };
  
  // Merge the passed in options with the defaults, and overwrite default values if assigned
  obj.options = $.extend([], defaults, options);
  
  // Randomize the number of seeds in the apple
  function randomizeSeeds(max) { // This is a private function
    obj.options.seeds = 1 + Math.floor(Math.random * max);
  };
  
  // Changes the color of the apple
  obj.changeColor = function (color) {
    obj.options.color = color;
  };
  
  // Changes the type of the apple
  obj.changeType = function (type) {
    obj.options.type = type;
  };
  
  // Changes the weight of the apple
  obj.changeWeight = function (weight) {
    obj.options.weight = weight;
  };
  
  return obj;
  
}($, Apple || {})); // Loose augmentation, allows us to load all scripts for the apple class in parallel

/**
 * Here we perform a tight augmentation on the Apple object
 * An Apple object must exist before we can augment it
 * 
 * @param obj obj A preexisting Apple object that we are augmenting
 * 
 * @type obj A JS object for an Apple|obj
 */
var Apple = (function (obj) { // Anonymous closure wrapped in () to execute
  
  // Take a bite of the apple
  obj.bite = function () {
    var status = '';
    
    if (obj.options.bitesLeft > 0) {
      
      obj.options.bitesLeft--;
      status = 'There are ' + obj.options.bitesLeft + ' bites left in the apple'; 
      
    } else {
      
      status = 'The apple has been eaten, make a new apple';
    }
    
    return status;
  };
  
  var oldMethod = obj.changeColor; // Save the old method
  
  // Changes the color of the apple to be prettier
  obj.changeColor = function (color) { // Method override, has access to old through oldMethod
    obj.options.color = 'This is a prettier ' + color;
  };
  
  return obj;
  
}(Apple)); // Tight augmentation, the base class of apple needs to be loaded first