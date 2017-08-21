var button = document.getElementById("counter");
button.onclick = function(){
    
     // Create a request object
     
     var request = new XMLHttpRequest();
 
     //Capture response and store it in a variable
     
     request.onreadystatechange = function(){
         if (request.readyState === XMLHttpRequest.DONE){
             
            if (request.status === 200){
             
             var counter = request.responseText;
            
             var span = document.getElementById("count");
             span.innerHTML = counter.toString();
                 }   
            }
 };
 
 // Make a request 
 request.open("GET","http://bharathiranga.imad.hasura-app.io/counter", true);
 request.send(null);
 
 // capture the values from the text box and submit button
 
 var nameTxt = getElementById("name");
 var name = textValue.value;
 var submit = getElementById("submit_btn");
 
 // On clicking of submit value in text box should be added in the list
 
 submit.onclick = function(){
     //Make a request to the server to send the name
     
     
     // Capture a list of names and render it as a list
     alert("Button has been clicked");
     var names = ["name1","name2","name3"];
     var list = "";
     for (var i=0; i < names.length; i++){
         list = "<li>"+ names[i] + "</li>";
         
     }
     var ul = document.getElementById("nameList");
     ul.innerHTML = list;
     
 };
    
};