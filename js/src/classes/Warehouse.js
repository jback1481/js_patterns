"use strict";

/**
 * A warehouse class to store our barrels
 * 
 * @param options The options object for additional options for the class
 * @returns {Warehouse.obj}
 */
function Warehouse (options) {
  
  var obj = {};
  var defaults = {
    capacity : 1000,
    inventory : [],
    status : 'open'
  };
  
  obj.options = $.extend([], defaults, options);
  
  function addItem(item) {
    obj.options.inventory.push(item);
  };
  
  obj.addToWarehouse = function(item) {
    addItem(item);
  };
  
  return obj;
}($);