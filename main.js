
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



    // Exercise 6   Find Leap Year (Artik yil) 

    // Formül: 1. Adim  Eger Yil 4 ile bölünüyorsa 2. adima git yani 100 ile böl. Eger 4 ile bölünmüyorsa artik yil degildir.
    
    //         2. Adim  Eger 4 e bölünüp 100 e bölünmüyorsa artik yildir. 4 e ve 100 e bölünüyorsa 3. adima git yani 400 e böl.

    //         3. Adim  Eger 4 e 100 e ve 400 e  bölünüyorsa artik yildir. 4 e ve 100 e bölünüp 400 e bölünmezse artik yil degildir. 

    function leapyear(Year) 
    {
    return (Year % 100 === 0) ? (Year % 400 === 0) : ( Year % 4 === 0) ;    
    }

    console.log(leapyear(2016));

    console.log(leapyear(2000));

    console.log(leapyear(1700));

    console.log(leapyear(1800));

    console.log(leapyear(100));

    console.log(leapyear(104));




    //  Exercise 7  A Program to find 1st Januar is being a Sunday between 2014 and 2050

    // Notiz:  Mantigini anladim ama mesela 1st januar degilde 1st july Sunday oluyor mu diye sordugumuz da nasil yapacagiz soralim. 

    // Notiz:  Bir de getDay===0 degil de 1 yaptigimiz da ne olacak




    console.log("---------------------");

    for ( var year = 2014 ; year <= 2050; year++)

    { 
        var d = new Date(year, 0 , 1 );

        if ( d.getDay() === 0)

            console.log("1st Januar is being a Sunday" + "  " + year );
            
    }

    console.log("---------------------");





    // Exercise 8  Get a random integer from 1 to 10 inclusive

    // ilk yazdigimiz const num formulü ile sayfa her yenilendiginde console da 1 ile 10 arasinda otomatik bir sayi atiyoruz. 

    // 2. const ile sayfa acildiginda ve yenilendigin de prompt aciyoruz. Eger musteri prompt a console da otomatik belirlenen degeri girdi ise console da Matched yaziyor. Degilse not matched.



    const num = Math.ceil(Math.random() * 10) ;

    console.log(num);

        const gnum = prompt("Guess the number between 1 und 10 inclusive");

        if (gnum == num)

            console.log("Matched");

            else 

            console.log("Not matched, the number was" + "  "+  gnum);

    


    // Exercise 9:  Calculate days left until next Chrismas ( Noel e kalan günleri hesapla)


    today=new Date();

    var cmas = new Date(today.getFullYear(),11,25);

    if (today.getMonth() == 11 && today.getDate()>25)

    { 
        cmas.setFullYear(cmas.getFullYear() + 1) ;

    }

    var one_day = 1000*60*60*24;  // 24 Stunden, 60 Minuten, 60 Sekunden, ve 1 saniye 1000 milisaniye oldugundan burada 1 günü milisaniye olarak hesaplamis.

                                  // Cünkü jawascript de tarih 1970 yilindan itibaren mili saniye olarak hesaplanir.

    console.log(Math.ceil((cmas.getTime()-today.getTime()) / (one_day) ) + "  " + "days left until Christmas" );



    // ***** Math.ceil yöntemi, belirli bir sayidan büyük ya da o sayiya esit en  kücük tam sayiyi bulmak icin kullanilir.

    // ***** GetTime Yöntemi, evrensel saate göre belirtilen tarihin zamanina karsilik gelen sayisal degeri almak icin

    // ***** Get Date ayin gününü almak icin.  Bu deger 1 ile 31 arasinda döndürülür.

    // ***** GetMonth, ayi sifir tabanli bir deger olarak almak icin kullanilir. Bu deger 0 ile 11 arasindadir. 0 Ocak, 1 Subat, 2 Mart und so weiter.

    // ***** GetFullYear, belirtilen tarihin yilini almak icin kullanilir. Mutlak bir sayidir. 1000 ile 9999 arasindadöndürülür. 1985 gibi









    // Exercise 10 To calculate multiplication und division of two numbers ( Iki sayinin carpilmasi ve bölünmesi)

    // ***********  GetElementById(id).value,  bir metin alaninin deger ozelligini ayarlar ve döndürür. 

    // ***********  InnerHtml,  Bir ögenin Html özelligini ayarlar ve döndürür.




    





    


            
            
    










    
    
    
    
  
    



    
     
    


    