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
    
    
};
  

 
 // capture the values from the text box and submit button
 
 var nameTxt = document.getElementById("name");
 var name1 = nameTxt.value;
 var submit = document.getElementById("submit_btn");
 
 // On clicking of submit value in text box should be added in the list
 
 submit.onclick = function(){
     //Create a request object
     var request = new XMLHttpRequest();
     
      // Make a request 
    request.open("GET","http://bharathiranga.imad.hasura-app.io/submit-name?name="+ name1 , true);
    request.send(null);
 
     //Capture response and store it in a variable and render it as a list
     
     request.onreadystatechange = function(){
         if (request.readyState === XMLHttpRequest.DONE){
             
            if (request.status === 200){
             
             var names = request.responseText;
             names = JSON.parse(names);
             var list = "";
              for (var i=0; i < names.length; i++) {
                 list = list + "<li>"+ names[i] + "</li>";
             }
             var ul = document.getElementById("nameList");
             ul.innerHTML = list;
                         }   
            }
        };
  
 
    
 };  