// dostęp do obiektu rodzica  - korzysta z metody i dodaje cos od siebie

function Figura(){};
Figura.prototype.name='figura';
Figura.prototype.toString=function(){
    var wynik=[];
if(this.constructor.xess){
    wynik[wynik.length]=this.constructor.xess.toString();
}
wynik[wynik.length]=this.name;
return wynik.join(', ');
};

function Figura2D(){};

//obsluga przez konstruktor
var F=function () {};
F.prototype=Figura.prototype;
Figura2D.prototype=new F();
Figura2D.prototype.constructor=Figura2D;
Figura2D.xess=Figura.prototype;
//rozszerzenie prototypu
Figura2D.prototype.name='cd figura';

function Trojkat(bok,wys){
    this.bok=bok;
    this.wys=wys;
}
//obsluga dziedziczrnia tymczasowy konstruktor F
F.prototype=Figura2D.prototype;
Trojkat.prototype=new F();
Trojkat.prototype.constructor=Trojkat;


Trojkat.xess=Figura2D.prototype;
//rozszerzenie prototypu
Trojkat.prototype.name='trojkat';
Trojkat.prototype.getArea=function () { return this.bok*this.wys/2;};

var g=new Figura();
var d=new Figura2D();
var t=new Trojkat(5,10)
console.log(t.toString());
console.log(d.toString());

// __proto__ zmiana nowsze to samo Object.PrototypeOf()
var proto = {};
var obj = Object.create(proto);
console.log(Object.getPrototypeOf(g));

// kod obslugujjacy wew funkcji

function parent(){};
function child(){};
//dziedziczenie wew funkcji wzorzec/////////////////////////////////////////////////
function extend(child,parent){
    var F=function () {};
    F.prototype=parent.prototype;
    child.prototype=new F();
    child.prototype.constructor=child;
    child.xxx=parent.prototype; //wskaznik dziecka do prototypu rodzica np uzywanego w metodzie this.constructor.xxx
}


var Fig =function(){};
var Fig2 =function(){};
Fig.prototype.name='fig';
Fig.prototype.toString=function () {
    return this.name;
};
Fig2.prototype.name='2';

// dziedziczenie przez KOPIOWANIE POL///////////////////////////////////////

function extend2(child,parent){
    var p=parent.prototype;
    var c=child.prototype;
    //kopiujemy wszystkie pola z rodzica do child
    for(var i in p){
        c[i]=p[i];
    }
    c.xess=p; //wskaznik child do rodzica
}

extend2(Fig2,Fig);
var f2=new Fig2();
console.log(f2.name);
console.log(Fig2.prototype.name);
console.log(f2.__proto__.hasOwnProperty('name'));
console.log(Object.getPrototypeOf(f2).hasOwnProperty('name'));

// uwaga kopiowanie pol typy proste a referencja  zmiana a nadpisanie
var A=function (){};
var B=function(){};


A.prototype.tab=[1,2,3];
A.prototype.name='na';
extend2(B,A);
B.prototype.name+='a';
B.prototype.tab=['a'] //referencja ale nadpisanie
console.log(B.prototype.name, A.prototype.name)
console.log(A.prototype.tab, B.prototype.tab)

///KOPIOWANIE Z OBIEKTU ///////////////////////
function extendFromOb(p){
    var c={};
    for(var i in p){
        c[i]=p[i];
    }
    c.xess=p;
    return c;
}

var figura={
    name:'figuura',
    toStr: function(){ return this.name}
};

var drugiOb=extendFromOb(figura);
//trzeba jawnie przypisywac polom obiektu
drugiOb.name='drugi';
drugiOb.toStr=function(){
    return this.xess.toStr() + '.'+this.name;
}