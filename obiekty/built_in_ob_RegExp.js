var re=new RegExp('j.*t');  // 'gmi - global zwraca wszystkie dopasowanie domyslnie false zwraca pierwsze
   // m - multiline i  ignorecase wszystkie sa domyslnie false  a pojawienie sie pierwszej litery przelacza na true
console.log(re.global, re.lastIndex);
re.lastIndex=12;
// latindex od ktorego ma  zaczac przeszukiwania
var dopas=re.test("javascript jest bot jejtis");
console.log(dopas);
var tabdop=/j.*t/gmi.exec("javavascript jest jest");  //tak jest ok ale tablicę
console.log(tabdop);
var tab=re.exec("javavascript jest jest"); // why null  // JAK FLAGI SA W RE 'GMI'
console.log(tab);
// metody String Obiektu których parametrem jest RegExp

var tekst=new String("Helloello");
console.log(tekst.match(/ll/g));
console.log(tekst.search(/ll/i));  // i = ignorewielkosc liter

var tekstm= new String("alA@mail.com");
console.log(tekst.replace(/[A-Z]/,""));
console.log(tekst.replace(/[A-Z]/,"+$&"));
console.log(tekstm.replace(/(A)(@.*)/,"$1_username_$2"));

function replacematch(match){
    return "_"+ match.toUpperCase();
}
var newt=tekst.replace(/e/g,replacematch);
console.log(newt);
// przechowuje
var glob;
var re=/(.*)@(.*)\.(.*)/; // cos@cos.cos
var callback=function(){
    glob=arguments;
    return arguments[1]+ ' na serwerze '+ arguments[2]+ ' kropka '+ arguments[3];
};
console.log("magdasagda@gmail.pl".replace(re,callback));
console.log(glob);
//split

var csv="raz,dwa,trzy";
console.log(csv.split(/\s*,\s*/));

//string normalny
console.log(tekst.replace('e','xxx'));//tylko pierwszy