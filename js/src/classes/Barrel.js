/**
 * Traditional class constructor for a Barrel
 * We can put Apples and Watermelons into these!
 * 
 * @param options obj The options we pass when constructing the object
 */
function Barrel (options) {
  
  var obj = {};
  defaults = {
    capacity : 30,
    height: 4 * 12,
    weight: 0,
    color: 'brown',
    material: 'wood',
    label: ''
  },
  
  obj.options = $.extend([], defaults, options);
  obj.contents = [];
  
  function setCapacity (cap) {
    obj.options = cap;
  };
  
  function setLabel (text) {
    obj.options.label = text;
    console.log('The barrel is now labeled: "' + text + '"');
  }
  
  function addContents (item) {
    obj.contents.push(item);
  }
  
  obj.add = function(item) {
    addContents(item);
    console.log('item added to barrel!');
  };
  
  obj.getCurrentCapacity = function() {
    return obj.options.capacity;
  };
  
  obj.getContents = function() {
    return obj.contents;
  };
  
  obj.changeLabel = function(text) {
    setLabel(text);
  };
  
  return obj;
  
}($);


