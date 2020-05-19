
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




    function multiplyBy ()
     {
         num1 = document.getElementById("firstNumber").value;

         num2 = document.getElementById("secondNumber").value;

         var total1 = document.getElementById("result").innerHTML = num1 * num2 ;

         console.log(total1);
         

    }

    function divideBy ()
     {
         num1 = document.getElementById("firstNumber").value;

         num2 = document.getElementById("secondNumber").value;

        var total2 = document.getElementById("result").innerHTML = num1 / num2 ;

        console.log(total2);
        
    }


    // **************  Notiz:  Html de Span elementi, burada, sayilar carpildiktan sonra yada bölündükten sonra ortaya cikan degeri göstermek icin kullandigimiz bir element.

                                // Ama baska amaclar icin de kullanilabilir. Mesela asagidaki gibi kullanilabilir.


    function mybutton() {

        document.getElementById("myspan").innerHTML =  "Ich liebe dich"        
    }












    // Exercise 11   Convert Temperatutes from Celcius to Fahrenheit or from Fahrenheit to Celcius;
    
    
    function cToF(Celcius) 
    {
        var cTemp = Celcius;

        var cToFahr = cTemp * 9 / 5 + 32;

        var message = cTemp + "\xB0C is " + cToFahr + "\xB0F." ;  // Buradaki \xB0C  console da Santigrad isareti olarak cikiyor digeri ise fahrenheit olarak
        
        console.log(message);          
    }


    function fToC(Fahrenheit)
     {
         var fTemp = Fahrenheit;

         var fToCel = (fTemp - 32 ) * 5 / 9;

         var message = fTemp + "\xB0F is" + fToCel + "\xB0C";

         console.log(message);    
    }

    cToF(20);

    fToC(80);


    




    

            //  Asagidaki iki function, celcius ve Fahrenheit formulleri icin yaptigimiz alistirmalar. 



function cbutton(Celcius) {


    var a = document.getElementById("cinput").value ;

    var b = a * 9 / 5 + 32;

    var c = document.getElementById("finput").value = b + "\xB0F";

    var d = document.getElementById("cinput").value = a + "\xB0C" ;

}



function fbutton(Fahrenheit) {

    var a = document.getElementById("finput").value ;

    var b = (a - 32) * 5 / 9 ;

    var c = document.getElementById("finput").value = a + "\xB0F"
    
    var d = document.getElementById("cinput").value = b + "\xB0C"

}
            
    









    // EXERCISE 12  TO GET THE WEBSITE URL (Loading Page) 

    // Wir können diese code für 2 Situation schreiben. Erste kommt URL zu console log,  zweite kommt URL Code zu alert.



    console.log(document.URL); 

    alert(document.URL);










    //  EXERCISE 13   Create a variable using a user-defined name 

   
   
    var var_name = "abcd" ;

    var n = 120;

    this[var_name] = n;

    console.log(this[var_name]);









    // EXERCISE 14  Get the extension of a filename ( Bir dosyanin uzantisini elde etmek)
 
    
    filename = "system.php" ;

    console.log(filename.split(".").pop());

    filename = "abc.js" ;

    console.log(filename.split(".").pop());



    filename = "tarik.doc" ;

    console.log(filename.split(".").pop());


    filename = "tarik.xls" ;

    console.log(filename.split(".").pop());
    
    
   







    // EXERCISE 15   To get the difference between a given number and 13, 

    //   If the Number is greater than 13 return double the absolute difference.

    //  bir sayinin 13 ile arasindaki farki bul. Eger 13 den buyuk ise mutlak farki iki katina cikar.

   
    function difference(n) 
    
    {
        if ( n<= 13)

            return 13 - n ;

        else 
            return (n-13) * 2 ;
        
    }
    
    console.log(difference(32));

    console.log(difference(11));

    







    // EXERCISE 16  To compute the sum of the two given integers. If two values are  same, then returns triple their sum.

    //  Iki sayiyi toplamak. Sayilar esit ise toplami 3 e katlar.


    function sumTriple(x,y) 
    
    { 
        if ( x==y) { 
            
            return 3 * ( x + y) ;
        }
        else {    

            return (x + y) ;
        }
        
    }

    console.log(sumTriple(10,20));

    console.log(sumTriple(10,10));

    









    // EXERCISE 17  To compute the absolute difference between  a specified number and 19.

    //  bir sayinin 19 ile arasindaki afrki bul. 19 dan kucuk ise 19-x,  19 dan büyük ise (x-19) * 3



    
function diff_num(n) {

    if (n <= 19) {

        return (19 - n) ;
        
    }

    else {

        return (n-19) * 3 ;
    }
    
}

console.log(diff_num(12));

console.log(diff_num(19));

console.log(diff_num(22));








// EXERCISE 18     To check two given numbers and return true if one of the number is 50 or if their sum is 50

//   2 sayidan  bir tanesi yada iki sayinin toplami 50 ise true olacak.



    function test50(x,y)

{ 
    return ( ( x==50 || y == 50) || ( x + y == 50 ) ) ;

}

    console.log(test50(50,50));

    console.log(test50(20,50));

    console.log(test50(20,20));

    console.log(test50(20,30));



    function test40(a,b) 
    
    {
        return ( ( a == 40 || b == 40) || (a+b == 40));

    }
    
    console.log(test40(40,40));

    console.log(test40(30,30));

    console.log(test40(10,30));

    
    








    // EXERCISE 19  to check whether a given integer is within 20 of 100 or 400.

    // Eger verilen sayiyi 100 den veya 400 den cikardigimizda sonuc 20 den kucuk ise true.


    
    function testhundred(x) {

        return ( (Math.abs(100-x)<= 20 )  || (Math.abs(400-x) <=20  ) ) ;

    }

    console.log(testhundred(10));

    console.log(testhundred(90));

    console.log(testhundred(99));

    console.log(testhundred(199));

    console.log(testhundred(200));


    







    // EXERCISE 20  To check from two given integers, whether one is positive and another one is negative.

    //   Sayilardan biri pozitif olsun digeri negativ olsun. Eger böyle ise sonuc true olsun. Gegilse false


    function positive_negative(x,y) {

        if ((x<0 && y>0)  || (x>0 && y<0) )
        
        {
            return true;
            
        }

        else {
            return false
        }
        
    }

    console.log(positive_negative(2,2));

    console.log(positive_negative(-2,2));

    console.log(positive_negative(2,-2));

    console.log(positive_negative(-2,-2));

    
    







    // EXERCISE 21  Create a new string adding "Py" in front of a given string.

    //              If the given string begins with "Py" then return the original string.


    function string_check(str1) {

        if (str1 === null || str1 === undefined || str1.substring(0,2) === "Py") {
   
            return str1 ;              //  Notiz:  Bu satirdaki kodu sildigimizde sadece 2. return kodu calisacagindan, Normal Python olarak yazilmis stringler de dahil olmak üzere  hepsinin basina py koyacaktir. Cünkü ikinci return kodunda "Py" + str1 diyoruz. Bu nedenle normal Python yazilari PyPython olacak
        }
        
            return "Py" + str1;
    }



    console.log(string_check("Python") );

    console.log(string_check("thon"));

    console.log(string_check(""));

    console.log(string_check("abc"));

    









    // EXERCISE 22    Remove a character at the specified Position of a given string and return the new string

    // Bir dizenin belirtilen bir karakterini cikar ve yeni dizeyi döndür.

    // Notiz : Burada char_pos : karakter position /  substring: altdize / Formulün mantigini tam anlamadim ama asagida console.log icerisine hangi sayiyi yazarsak dizenin o karakterini cikariyor 



    function remove_character(str, char_pos) {

        part1 = str.substring (0, char_pos);

        part2 = str.substring (char_pos + 1, str.length);

        return ( part1 + part2);

    }

        console.log(remove_character("Python", 0));
    
        console.log(remove_character("Python", 3));

        console.log(remove_character("Python",5));

        
    

    function remove_character(str, char_pos) {

        part1 = str.substring (0, char_pos);

        part2 = str.substring (char_pos + 1, str.length)

        return (part1 + part2 ) ;
        
    }


    console.log(remove_character( "Tarik", 0));

    console.log(remove_character("Tarik", 1));

    console.log(remove_character("Tarik", 2));
    
    








    // Exercise 23   Create a new string from a given string, changing the position of first and last character

    // Ilk ve son karakterin yerini degistirerek yeni string olusturma





    function first_last(str1) {

        if (str1.length <= 1) {
    
            return str1;
        }
        
        mid_char = str1.substring( 1, str1.length - 1);

        return ( str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0) ;
    }


    console.log(first_last("a"));

    console.log(first_last("ab"));

    console.log(first_last("abcdefg"));

    // Notiz :  Burada str1.lenght-1: stringin son harfidir. Baslangicta ilk eleman 0. eleman olur ama son eleman -1 olarak adlandirilir.

    //          mid_ char : stringin ortasi yani middle.  mid_char i tanimlarken su sekilde tanimlamis. Stringin ortasi 1. eleman ile string.lenght-1 inci elemanin arasinda kalan kisim.

    //         Sonra ikinci return formülünde önce en son elemani getir + stringin ortasini + en son da ilk elemani getir demisiz.
    
    //         Ilk ve son karakteri cagirirken str1.charAt kullanmis, orta icin mid_char 



    function first_last(str1) {

        if (str1<= 1) {

            return str1;
            
        }
        
            mid_char = str1.substring(1, str1.length - 1);

            return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);

    }

        
        console.log(first_last("tarik"));

        console.log(first_last("sitki"));
        
        









        // Exercise 24 :  


        function front_back(str) {

            first = str.substring(0,1) ;

            return first + str + first ;
            
        }

            console.log(front_back("a"));

            console.log(front_back("ab"));

            console.log(front_back("abc"));
            
            
            