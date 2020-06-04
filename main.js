
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
        
        









        // Exercise 24 :    To create a new string from a given string with the first character of the given string added at the front and back.

        //  Verilen string in ilk harfini stringin basina ve sonuna ekleyerek  yeni bir string olusturma. Baslangicta ilk harften 2 tane oluyor.


        function front_back(str) {

            first = str.substring(0,1) ;      //  substring parantezinin icerisine (0,1) yazdigimizda 0 ile 1 karakteri rasindaki sayiyi yada harfi alir. yani burada o harf ilk harf oluyor ve "a" dir. 
            
                                            //  Eger sadece 0 demis olsak 0. karakter dahil olmak üzere ondan sonraki tüm karakterleri yani tum kelimeyi yada harf grubunu aliyor. bu da console da söyle görünür. a= aaa  /   ab = abab /  abcabc
                                            
                                            //  Eger sadece 1 dersek, o zaman 2. karakter dahil olamak üzere ondan sonraki tüm kelimeyi alir. bu da console da;   a = a (cünkü alabilecegi 2. harf yok )   ab = babb  /   abc = bcabcbc

            return first + str + first ;
            
        }

            console.log(front_back("a"));

            console.log(front_back("ab"));

            console.log(front_back("abc"));
            
            
            










            // Exercise 25  To check whether a given Positve number is a multiple of 3 or a multiple of 7

            //  Bir sayinin 3 ün yada 7 nin kati olup olamadigini kontrol et

            function test37(x) {

                if (x % 3 == 0 || x % 7 == 0) {

                    return true ;
                }
                else {
                    return false ;
                }
            }

            console.log(test37(12));

            console.log(test37(14));

            console.log(test37(10));

            console.log(test37(11));





      

            // Exercise 26   To create a new string from a given string taking the last 3 characters and added at both the front and back

            //  Verilen dizenin son 3 harfini kopyalayarak yeni bir dizi olustur. Bu 3 harfi stringin basina ekle. "Ing String Ing"

            
            function front_back3(str) {

                if (str.length >= 3) {

                    str_len = 3;               //  str_len nedir anlamadim ama formülden bu satiri silince ayni sekilde calismaya devam ediyor

                    back = str.substring(str.length - 3);

                    return back + str + back ;
                    
                }
                
                    else return false
            }


            console.log(front_back3("abc"));

            console.log(front_back3("ab"));

            console.log(front_back3("abcd"));

            
            
            
           




    



        // Exercise 27         Check whether a string starts with 'Java' and false otherwise 





            function start_spec_str(str) {

                if (str.length < 4 ) {

                    return false;
                    
                }

                front = str.substring(0,4);

                if ( front == 'Java') {

                    return true;
                }

                else {

                    return false;
                }
                
            }
           


            console.log(start_spec_str("JavaScript"));

            console.log(start_spec_str("Java"));

            console.log(start_spec_str("Python"));
            
            
            







        

            
            


        //Exercise 28    Check whether two given integer values are in the range 50-99. Return true if either of them are in the said range.
        
        //  Eger verilen 2 sayidan herhangi bir tanesi 50-99 araliginda ise true degerini verir. 
        
        //  NOTIZ : Iki degerinde bu aralikta olamsina gerek yok


        




        function check_numbers(x,y) {

            if ( ( x>= 50 && x<= 99) || ( y>= 50 && y <= 99)   ) {

                return true;
                
            }

            else {

                return false;
            }
            
        }


            console.log(check_numbers(12,101));

            console.log(check_numbers(52,80));

            console.log(check_numbers(15,99));










            




            // Exercise 29    Check whether three given integer values are in the range 50-99

            //  **************   Burada kritik husus:  Eger verilen sayilardan herhangi biri 50-99 araliginda ise true verir. 3 Tanesinin de olmasina gerek yok.
            
            //  **************   Ama üc tanesi de aralikta degilse false.  Zum beispiel console 2.     


                function check_three_nums(x,y,z) {

                  return ( x>= 50 && x<= 99 || y >= 50 && y <= 99 || z >= 50 && z <= 99);
  
                }

                console.log(check_three_nums(50,90,99));

                console.log(check_three_nums(5,9,199));

                console.log(check_three_nums(65,89,199));

                console.log(check_three_nums(65,9, 199));
                













                


            // Exercise 30    



            function check_script(str)
{
  if (str.length < 6) {
    return str;
  }
  let result_str = str;
    
  if (str.substring(10, 4) == 'Script') 
    {
    
   result_str = str.substring(0, 4) + str.substring(10,str.length);
      
  }
  return result_str;
}

console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));











            // Exercise 31 



            function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(1,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,510,440));
            








    // Exercise 32   To find a value which is nearest to 100 from two different given integer values.

    //  Verilen degerlerden 100 e en yakin olanini bulma.  ( 100-90 = 10   100- 89= 11 )




    function near_100(x,y) {

        if (x != y) 
        
        {

            x1 = Math.abs(x - 100);            // Bu formülde kritik olan nokta burasi. Birincisi diger if leri buradaki if in icerisine yazdik. Ikincisi ise verilen sayilardan 100 cikardigimizda hangisinin sonucu daha kücük ise formül sonucu o sayiya dönüstürüyor ve consol da o sayiyi gösteriyor.

            y1 = Math.abs(y - 100);    
        
        if (x1<y1) {

            return x;
    
        }

        if (y1<x1)   {

            return y;
            
        }

           
        return 0;
    }   

        else 

            return false;

    
}


        console.log(near_100(90,89));
        
        console.log(near_100(-90, -89));

        console.log(near_100(90,90));





           
                    


                   
            








        // Exercise 33    Check whether two numbers are in range 40...60 or 70.100

        //  Verilen 2 sayinin 40-60 yada 70-100 araliginda olup olmadigini kontrol ediyoruz.

        // Ama kritik olan su. X ve Y ikisi birden ya 40-60 yada ikisi birden 70-100 araliginda olacak. Biri 40-60 birisi de 70-100 araliginda olmaz.


        
        
        
        function numbers_ranges(x,y) {

            if ((x>= 40 && x <= 60 && y>=40 && y <= 60)      // Burada kritik olan husus su. Ilk if den sonra iki tane normal parantez ile basliyoruz.  Ama bu parantez if condition un en sonunda yine 2 tane ile kapaniyor. Eger bunu unutur isek formül calismiyor.

                || 

             (x>=70 && x<=100 && y>=70 && y<= 100))
            
            {

                  return true;  
            }

                  else {

                    return false;
                  }

        }





        console.log(numbers_ranges(44,56));

        console.log(numbers_ranges(70,95));

        console.log(numbers_ranges(50,89));


        
        













          // Exercise 34    Find the larger number from the two given positive integers.   Verilen iki sayidan hangisinin büyük oldugunu bul




          function max_townums(x,y) {

            if (  ( x >=40) &&  (x<=60) && (y>=40) && (y<=60) ) {

                if (x === y) {

                    return "Numbers are the same";
                    
                }

                else if (x>y) {                                   //     ************   Burada kritik olan yer burasi. Else if kullaniyor.

                    return x;
                }
                 
                else {

                    return y;
                }
            }


                else {                                          // Bu else ilk bastaki ana if'in else si diger else ler ise ana if'in icerisinde bulunan if lerin elseleri. 
                                                                // Bu else diyor ki: Eger sayilar ilk if de verilen 40 ila 60 araliginda degil iseler hic buyugu kucugu bulmaya ugrasma sayilar bu aralikta degillerdir yaz. 
                    return "Numbers don't fit in range"
                }
              
          }



          console.log(max_townums(45,60));

          console.log(max_townums(25,60));        

          console.log(max_townums(45,80));

          console.log(max_townums(45,45));






         
                    
                    












          // *************************   Bu formüldeki ctr,   charAt,   let   tabirlerini bilmedigim icin formülü anlamadim. **********************

          // Exercise 35   Check whether a specified character exists within the 2nd to 4th position in a given string

          // Belirtilen karakterin 2. ve 4. position da olup olmadigini kontrol et





          function check_char(str, char) 
          
          {

            ctr = 0;

            for ( let i = 0; i < str.length; i++)

            { 
                if (str.charAt(i)   == char) {

                    ctr++;
                    
                }
              
          }

                return ( ctr >=2 && ctr <= 4) ;
                
        }



        console.log( check_char("Python" , "y"));

        console.log( check_char("JavaScript" , "a"));

        console.log( check_char("Console" , "o"));

        
        
        
                    
         
       




         















          // Exercise 36   Check whether the last digit of the three given positive integers is same 

          //   Verilen üc degerin son basamaklarinin ayni olup olmadigini kontrol et



                function last_digit(x, y , z) 
                
                {

                    if ( ( x > 0) && y > 0 && z > 0 )
                    
                    {

                        return ( x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
                        
                    }
  
                    else 

                        return false;
                }


                console.log(last_digit(20, 30, 400));           //   Burada kritik olan husus su. Verilen degerler tek basamakli sayi oldugunda, örnegin 20 yerine 2 yazdigimizda sonucu false veriyor.

                console.log(last_digit(-20, 30, 400));

                console.log(last_digit(20, -30, 400));

                console.log(last_digit(20, 30, -400));












            
                        
                
                
                
                




         







                // Exercise 37    Create new string with first 3 characters are in lower case

                // Ilk 3 karakteri kücük harf yapma




                function upper_lower(str) {

                    if (str.length < 3 ) {

                        return str.toUpperCase();
                        
                    }
                    
                    front_part = ( str.substring(0,3)).toLowerCase();

                    back_part = str.substring(3, str.length);

                    return front_part + back_part;
                }




                console.log(upper_lower("Python"));

                console.log(upper_lower("Py"));

                console.log(upper_lower("JAVAScript"));














                // Exercise 38   




                function exam_status(totmarks,is_exam)
                {
                if (is_exam) {
                  return totmarks >= 90;
                }
               return (totmarks >= 89 && totmarks <= 100);
               }
              
              console.log(exam_status("78", " "));
              console.log(exam_status("89", "true "));
              console.log(exam_status("99", "true "));













              // Exercise 39    






              function sortaSum(x, y) 
              {
               const sum_nums = x + y;
               if (sum_nums >= 50 && sum_nums <= 80) {
                 return 65;
               }
               return 80;
             }
             
             console.log(sortaSum(30,20));
             console.log(sortaSum(90,80));











             //  Exercise 40






             function check8(x, y) {
                if (x == 8 || y == 8) {
                  return true;
                }
              
                if (x + y == 8 || Math.abs(x - y) == 8)
                {
                  return true;
                }
              
                return false;
              }
              
              console.log(check8(7, 8));
              console.log(check8(16, 8));
              console.log(check8(24, 32));
              console.log(check8(17, 18));












              // Exercise 41      Check three given numbers, if the three numbers are same return 30, otherwise return 20 and if two numbers are same return 40
              
              //  Eger verilen 3 sayi da birbirine esit ise 30 a ,  2 sayi esit ise 40 a ,  hicbiri esit degil ise 20 ye dönüstür.




              function three_numbers(x, y, z) {

                if ( x == y && y == z) {

                    return 30 ;
                    
                }


                if ( x == y || y == z || x == z) {

                    return 40 ;
                    
                }

                    return 20;
                  
              }



              console.log(three_numbers(8,8,8));

              console.log(three_numbers(8,8,18));
        
              console.log(three_numbers(8,7,18));









              // Exercise 42   







              function number_order(x, y, z ) {
                if ( y > x && z > y) 
                {
                  return "strict mode";    
                }
                else if(z > y) 
                 return "Soft mode";
                else
                  return "Undefinded";
              }
              
              console.log(number_order(10,15,31));
              console.log(number_order(24,22,31));
              console.log(number_order(50,21,15));











              // Exercise 43  





              function same_last_digit(p, q, r) {
                return (p % 10 === q % 10) ||
                       (p % 10 === r % 10) ||
                       (q % 10 === r % 10);
                       
            }
            
            console.log(same_last_digit(22,32,42));

            console.log(same_last_digit(102,302,2));

            console.log(same_last_digit(20,22,45));








            // Exercise 44





            function lessby20_others(x, y, z) 
            {
            return (x >= 20 && (x < y || x < z)) ||
            (y >= 20 && (y < x || y < z)) ||
            (z >= 20 && (z < y || z < x));
            }



            console.log(lessby20_others(23, 45, 10));

            console.log(lessby20_others(23, 23, 10));

            console.log(lessby20_others(21, 66, 75));
              
              








                // Exercise 45  Check two given integer values and return true if one of the number is 15 or if their sum or difference is 15

                // Eger sayilardan biri 15 ise, yada farklari yada toplamlari 15 ise true degeri döndür.




                    function test_number(x,y) {


                        return ( x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);
 
                    }



                    console.log(test_number(15,9));

                    console.log(test_number(25,15));

                    console.log(test_number(7,8));

                    console.log(test_number(25,10));

                    console.log(test_number(5,9));

                    console.log(test_number(7,9));









                    // Exercise 46    Check from two given non-negative integers that whether one of the numver is multiple of 7 or 11

                    // verilen 2 sayidan bir tanesinin 11 veya 7 nin kati olup olmadigini kontrol edin




                    function valCheck(a,b) {

                        if ( ! ((a % 7 == 0 || a % 11 == 0 ) && (b % 7 == 0 || b % 11 == 0))) {           //  Formulün basinda ! isareti var. 

                            
                            return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));

                        }

                            else 

                            return false;
                        
                    }
                    
                            console.log(valCheck(14,21));         //************** Notiz:    Bu satirda True asagidaki satirda false veriyor. Sebebi bu satirdaki iki sayida 7 nin kati. Formül sayilardan birinin 7 yada 11 in kati olup olmadigini kontrol etmek icin yazilmistir.

                            console.log(valCheck(14,20));        //  Birinci sayi 7 nin ikinci sayi 11 in kati olsa da false veriyor.

                            console.log(valCheck(16,20));







                        

                            // Exercise 47      Check whether a given number presents in the range 40 - 10000

                            //  Verilen bir sayinin 40 ila 10000 araliginda olup olmadigini kontrol edin






                            function test_digit(x,y,n)
                            
                            {

                                if (n< 40 || n > 10000) 

                                    return false;

                                else

                                    if (n>= x && n <= y) 

                                        return true;

                                    else

                                        return false;
                                        
                                    }
                                    
                                

                                    console.log(test_digit(40,4000,45));

                                    console.log(test_digit(80,320,79));

                                    console.log(test_digit(89,4000,30));













                                    // Exercise 48 





                                    function string_reverse(str) 
                                    {
                                        return str.split("").reverse().join("");
                                    }
                                    
                                    console.log(string_reverse("w3resource"));
                                    console.log(string_reverse("www"));
                                    console.log(string_reverse("JavaScript"));







                                    //  Exercise 49







                                    function string_reverse(str) 
                                    function LetterChanges(text) {
                                    //https://goo.gl/R8gn7u
                                    var s = text.split('');
                                    for (var i = 0; i < s.length; i++) {
                                    // Caesar cipher
                                    switch(s[i]) {
                                    case ' ':
                                    break;
                                    case 'z':
                                    s[i] = 'a';
                                    break;
                                    case 'Z': 
                                    s[i] = 'A';
                                    break;
                                    default:
                                    s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
                                    }
                                    
                                    // Upper-case vowels
                                    switch(s[i]) {
                                    case 'a': case 'e': case 'i': case 'o': case 'u':
                                    s[i] = s[i].toUpperCase();
                                    }
                                    }
                                    return s.join('');
                                    }
                                    console.log(LetterChanges("PYTHON"));
                                    console.log(LetterChanges("W3R"));
                                    console.log(LetterChanges("php"));







                                        // Exercıse 50


                                        function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));





                                        // Exercıse 51



                                        function time_convert(num)
                                        { 
                                         var hours = Math.floor(num / 60);  
                                         var minutes = num % 60;
                                         return hours + ":" + minutes;         
                                       }
                                       
                                       console.log(time_convert(71));
                                       console.log(time_convert(450));
                                       console.log(time_convert(1441));


                                    
                                    
                                    



                                       // Exercise 52




                                       function alphabet_Soup(str) { 

                                        return str.split("").sort().join("");
                                             
                                    }
                                    
                                    console.log(alphabet_Soup("Python"));
                                    
                                    console.log(alphabet_Soup("Exercises"));






                                    // Exercise 53


                                    function ab_Check(str)
                                    {
                                       return (/a...b/).test(str) || (/b...a/).test(str);
                                    }
                                   
                                   console.log(ab_Check("Chainsbreak"));
                                   console.log(ab_Check("pane borrowed"));
                                   console.log(ab_Check("abCheck"));













                     
                                
                            











                            
                            
                            
                    














                  
                    
                    
                    


                       

                    
          
          
          

