console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New value";

var img = document.getElementById("madi");
var marginLeft;
var moveright = function() {
    
    img.style.marginLeft = marginLeft + 10;
    
};

img.onclick = function() {
  
  var interval = setInterval(moveright, 100);
    
};