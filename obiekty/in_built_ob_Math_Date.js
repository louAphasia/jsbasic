// Math - glownie stale
Math.PI;

//metody math
var los=Math.random(); //pom 0 a 1 a 0 a 1000 trzeba pomnożyc
var losbig=Math.random()*1000;
console.log(los, losbig);
var minmax=10*Math.random()+5; // od 5 do 15
// min i max [ (max-min)* Math.random()+min
var testowa=5.34456;
console.log( Math.round(testowa), '-----', Math.floor(testowa), "------", Math.ceil(testowa));

var input=15;
console.log(Math.min(Math.max(1,input),12));

console.log('---------------------DATE');

var date=new Date('1 mar 2012 5:30');
console.log(date);
var date1=new Date(2008,0,1,17,05,03,120);
console.log(date1); // godzine cofa why ??????????

console.log(new Date(11503890));
console.log(Date());
var d=new Date();
console.log(d.getDate());

console.log(Date.parse( '2019')) // na milisek od ery uniksa

console.log(new Date(2019,0,1));
console.log(new Date(Date.UTC(2019,0,1)));

//obliczenie w ktorym dniu tygodnia masz urodziny od 0 niedziela 1 ,2,3,4,5,6

function tyg(){
var stat=[0,0,0,0,0,0,0];  // 7 dni tygodnia
for (var i=2019;i<2025;i++){
     stat[new Date(i,6,23).getDay()]++;      //23 lipca [6 oznacza lipiec] a i to rok a getday dzien tyg
};
return stat;
};
console.log(tyg());