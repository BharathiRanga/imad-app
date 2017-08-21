var button = document.getElementById("counter");
button.onclick = function(){
    
 // Create a request object
 
 var request = new XMLHttpRequest();
 
 //Capture response and store it in a variable
 
 request.onreadystatechange = function(){
     if (request.readyState === XMLHttpRequest.DONE){
         alert("Page has loaded");
        if (request.status === 200){
            alert ("request is successful");
         var counter = request.responseText;
         alert (counter.toString());
         var span = document.getElementById("count");
         span.innerHTML = counter.toString();
             }   
        }
 };
 
 // Make a request 
 request.open("GET","http://bharathiranga.imad.hasura-app.io/counter", true);
 request.send(null);
    
};