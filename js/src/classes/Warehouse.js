/**
 * A traditional constructor class for JS
 * 
 * Warehouse class to store our barrels
 */
Warehouse = function(options, $) {
  
  var obj = {},
  defaults = {
    capacity : 1000,
    inventory : [],
    status : 'open'
  };
  
  obj.options = $.extend([], defaults, options);
  
  function addItem(item) {
    obj.options.inventory.push(item);
  };
  
  obj.addToWarehouse = function(item) {
    addItem(item)
  };
  
  return obj;
};