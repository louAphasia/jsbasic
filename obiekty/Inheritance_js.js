//budujemy konstruktory obiektow ktore maja dziedziczyc
function Figura(){
    this.name='figura'; // moze byc w prototypie  Figura.prototype.name='figura'
    this.toString=function(){ // moze być jako Figura.prototype.toString=function()
        return this.name;
    };
};

function Figura2D(){
    this.name='figura2d';
}
function Trojkat(bok,wys){
    this.name='trojkat';
    this.bok=bok;
    this.wys=wys;
    this.pobierzpole=function(){
        return this.bok*this.wys/2;};
    }
//dziedziczenie
Figura2D.prototype=new Figura();
Trojkat.prototype=new Figura2D();

console.log("przed ustawieniem constructora ", Figura2D.prototype.constructor); //napisze caly funckjr najwyz rzedu Figura
//ustawiamy constructor prototypu
Figura2D.prototype.constructor=Figura2D;
Trojkat.prototype.constructor=Trojkat;

var myt=new Trojkat(5,10);
console.log(myt.pobierzpole());
//czy korzysta metody Figury ktora odziedziczyl figura2d z ktorej trojkat dziedziczy
console.log(myt.toString());

console.log(myt.constructor, Trojkat.prototype.constructor);
//dziedziczy po instancji obiektu z konstruktora funkcji a nie klasie ogolnej / po prostu ze stworzonego konkretnego obiektu
console.log(myt instanceof Figura2D, myt instanceof Figura, myt instanceof Trojkat);

console.log(Trojkat.isPrototypeOf(myt), Figura2D.isPrototypeOf(myt), Figura.isPrototypeOf(myt), String.isPrototypeOf(myt));
//nie konstruktor a ! prototyp
console.log(Trojkat.prototype.isPrototypeOf(myt), Figura2D.prototype.isPrototypeOf(myt), Figura.prototype.isPrototypeOf(myt), String.prototype.isPrototypeOf(myt));
// sprawdzenie co jest wlasnym polem
console.log(myt.hasOwnProperty('bok'), myt.hasOwnProperty('toString'), myt.hasOwnProperty('pobierzpole'));

//przenosze wspolnych pol do prototypu i rozszerzanie prototypow POLA I METODY  ktore dla kazdej instancji danego obiektu sa takie same
console.log('-------------------------------------------------------------');
function General(){};
General.prototype.name="top";
function Lower(){};
Lower.prototype=new General();
Lower.prototype.constructor=Lower;
Lower.prototype.name="nizszy";
Lower.prototype.toShow=function () { return this.name;}
function Lowest(my) {
    this.my = my;
};
Lowest.prototype=new Lower();
Lowest.prototype.constructor=Lowest;

Lowest.prototype.name='najnizszy';
Lowest.prototype.metoda=function () { return 2*this.my;

};
var n=new Lowest(5);
console.log(n.metoda(), n.toShow());
console.log(n.hasOwnProperty('toShow'), n.hasOwnProperty('my'));
//dziedzizenie samego Prototypu tylko bez obiektu
function Ala(){};
Ala.prototype.na="122";
Ala.prototype.toDos=function(){ return this.na };


Boo.prototype=Ala.prototype;
Boo.prototype.constructor=Boo;
function Boo(){};
Boo.prototype.na=1234;
Boo.prototype.todo=function () { return this.na *2;};
var b=new Boo();

console.log(b.todo(), b.toDos());
console.log(b instanceof Boo, b instanceof Ala, Boo.prototype.isPrototypeOf(b));

var a= new Ala();
console.log(b.na,'ala  obiekt',a.na, Boo.prototype.na, Ala.prototype.na); //wszystkie maja 1234 na przy Instancji tego nie ma

console.log('--------KONSTRUKTOR TYMCZASOWY new F()');
//rodzic
function Father(){};
Father.prototype.name="tim";
Father.prototype.toStr=function(){
    return this.name;
};
//child
function Son(){};
//konstruktor
var F=function(){};
F.prototype=Father.prototype;
Son.prototype=new F();
Son.prototype.constructor=Son;

Son.prototype.name="jon";
function grandson(age){ this.age=age;};

F.prototype=Son.prototype;
grandson.prototype=new F();
grandson.prototype.constructor=grandson;

grandson.prototype.name="kole";
grandson.prototype.show=function(){ return this.name + this.age};

var x=new grandson(11);
console.log(x.toStr(), x.show())

var s=new Son();

// __proto__ zmiana nowsze to samo Object.PrototypeOf()
//console.log(Object.getPrototypeOf(g));

console.log(x.__proto__.__proto__.constructor);
console.log(Object.getPrototypeOf(x));

console.log(x.name, s.name);



