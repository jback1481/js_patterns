$(document).ready(function() {
  console.log ('Document Ready!');
  
  // Let's make a barrel for all of our apples!
  var barrel1 = new Barrel({
    capacity: 100,
    color: 'red'
  });
  
  // Let's make sure to change the label for our barrel so we know what is in it
  barrel1.changeLabel('For the apples!');
  
  console.log(barrel1);
  
  barrel1.add(Apple);
  
  Apple.changeColor('green'); // Beware! This changes all of the apple's colors in the barrel!
  
  barrel1.add(Apple);
  
  Apple.changeColor('yellow'); // Beware! This changes all of the apple's colors in the barrel!
  
  barrel1.add(Apple);
  
  console.log(barrel1.getContents());
});