"use strict";

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
 * An watermelon object which inherits from Apple.js
 * 
 * @param $ obj The JQuery library, this is a dependancy
 * @param obj obj Any existing Apple object to be mutated
 * @param options obj An object of properties for the apple 
 * 
 * @type obj A JS object for an Apple
 */
var Watermelon = (function ($, old) { // Anonymous closure wrapped in () to execute
 
  var obj = {},
  defaults = {
    bitesLeft : 100,
    color : 'green',
    seeds : 40,
    weight : 2
  };
  
  // Merge the passed in options with the defaults, and overwrite default values if assigned
  obj.options = $.extend([], old.options, defaults);
  
  // Maintain a reference to Apple's method we are overridding
  var oldAppleMethod = old.bite;
  
  // Override the method from Apple
  obj.bite = function () {
    var status = '';
    
    if (obj.options.bitesLeft > 0) {
      
      obj.options.bitesLeft--;
      status = 'There are ' + obj.options.bitesLeft + ' bites left in the watermelon, be sure to spit out the seeds!'; 
      
    } else {
      
      status = 'The watermelon has been eaten, make a new watermelon';
    }
    
    return status;
  };
  
  return obj;
  
}($, Apple || {})); // Loose augmentation, allows us to load all scripts for the apple class in parallel