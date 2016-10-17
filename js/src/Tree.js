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

// Pass in JQuery ($), and an options object
var Tree = (function ($, obj, options) { // Anonymous closure wrapped in () to execute
  var obj = {},
  defaults = {
    type  : 'maple',
    numBranches : 20
  };
  
  obj.options = $.extend([], defaults, options); // Merge the passed in options with the defaults, and overwrite default values if assigned
  
  obj.plant = function() {
    return 'You have planted the tree.';
  };
  
  obj.water = function() {
    return 'You have watered the tree.';
  };
  
  return obj;
  
}($, Tree || {})); // Loose augmentation, allows classes to be loaded in parallel