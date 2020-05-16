
// Exercise 1 Current Hours

var today = new Date();

    var day = today.getDay();

    var daylist = [ "Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"  ] ;

    console.log("Today is : " + daylist [day] + ".");

    var hour = today.getHours();

    var minute = today.getMinutes();

    var second = today.getSeconds();

    var prepand = ( hour>= 12 )? "PM":"AM";

    hour = (hour >=12 )? hour - 12: hour;

    if (hour===0 && prepand==="PM")
     {  
     if (minute===0 && second===0) 
         
     {     
        
    hour=12;

    prepand = "Noon";

     }

     else 
     { 

    hour=12;

    prepand="PM";

     } 
    }

    if (hour===0 && prepand==="AM")
     {
    if (minute===0 && second===0)
     {
    hour=12;
    prepand="Midnight";    
    }    

    else
     { 
    hour=12;
    prepand="AM";      
    }

    }

    console.log("Current Time:" + hour + prepand + ":" + minute + ":" + second );


    // Exercise 2 Print button

 function print_current_page() {
     window.print();
 }


    // Exercise 3 Current Date  Notiz: Burada ayin 16 si iken console da 6 gösteriyor

    var today = new Date();

    var dd = today.getDay();

    var mm = today.getMonth()+1;

    var yyyy = today.getFullYear();

    if (dd<10) {
        dd="0"+dd;
    }

    if (mm<10) {
        mm="0"+ mm;        
    }


    today = mm + "-" + dd + "-" + yyyy;

    console.log(today);

    today = mm + "/" + dd + "/" + yyyy;

    console.log(today);

    today = dd + "/" + mm + "/" + yyyy;

    console.log(today);

    today : dd + "-" + mm + "-" + yyyy;

    console.log(today);
    
    
    // Exercise 4   Notiz: Bunu ne icin ve nerede kullandigimizi soralim

    var side1 = 5;

    var side2 = 6;

    var side3 = 7;

    var s = (side1 + side2 + side3  ) /2 ;

    var area = Math.sqrt( s* ( (s-side1)*(s-side2)*(s-side3) ) ) ;

    console.log(area);

    // Exercise 5  onload animate_string ( Kayan yazi)  NOTIZ. Mantigini anladim ama formulu soralim. Bir de yazi saga dogru kayiyor sola dogru kaydirabilir miyiz 

    function animate_string(id) 
    {
        var element = document.getElementById(id);

        var textNode = element.childNodes[0]; // assuming no other children

        var text = textNode.data;

    setInterval (function ()

     { 
         text= text[text.length - 1] + text.substring(0, text.length-1);

         textNode.data = text;
        
    }, 100 ) ;
        
    }



    // Exercise 6  




    
     
    


    