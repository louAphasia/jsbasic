var obiekt={
    name:"Nadi",
    miau: function(){
        return "Jestem "+ this.name;
    }
}
function F(){};

F.prototype=obiekt;
var obiekt2=new F();

console.log( obiekt2.name, obiekt2.miau());

// dopisanie do prototype
//konstruktor do wyt. obiektow
function Tool(name,color){
    this.name=name;
    this.color=color;
    this.whois=function(){
        return "it's "+ this.color+this.name;
    }
}

Tool.prototype.price=100;
Tool.prototype.mark=4;
Tool.prototype.info=function () {
    return this.price + " a ocena users " + this.mark;};


//nadpisanie prototype

Tool.prototype= {
    size:1000,
    quantity:100000,
    mow: function(){
        return this.size + " ilosc "+ this.quantity + " tego ";
    }
}
var nowytool=new Tool("gadget","red");
//console.log(nowytool.whois(), nowytool.info());
//console.log(nowytool.price, nowytool.mark);
console.log(nowytool.size, nowytool.mow(), nowytool.name, nowytool.whois(), nowytool.price);
var nowszy=new Tool("kamerka", "pink");

console.log(nowszy.size, nowszy.toString(),nowszy.mow());

// pola prototypu i wlasne

function Ob(name){
    this.name=name;
}
Ob.prototype.name="Lol";
var neww=new Ob('wlasne');
console.log(neww.name);
delete neww.name;
console.log(neww.name);
// wlasnosci property hasOwn i is Enumerable
neww.name='nowe'; //nadane jeszcze raz wlasne nie prototypu
console.log(neww.hasOwnProperty('name'),);
console.log(neww.propertyIsEnumerable('name'));

//
function Test(name,color){
    this.name=name;
    this.color=color;
    this.metoda=function(){ return 1;}
}

Test.prototype.DATE=3;
var no=new Test('a','red');


console.log(no.propertyIsEnumerable('DATE'));  // false mimo ze ponizej jest wyliczony bo prototype pola nie uwzglednia

for(var pole in no){
    console.log(pole + "=" + no[pole]);
}
//jak sprawdzic czy jest wyliczalne pole z lancucha prototypow a nie wlasne
console.log(no.constructor.prototype.propertyIsEnumerable('DATE'));  //TERAZ JEST TRUE
console.log(no.isPrototypeOf('DATE')); //BO DATE POWSTAŁO ZA POMOCA PROTOTYPE WLASNE JEST TYLKO  color name

console.log('--------------------------');
//czy konkretny obiekt jest protoypem innego
var kotek={
    cute:true,
    eat:'royal',
    drink:'water'
};
//tworzymy konstruktor
function Animal(name){
    this.name=name;
};

function Tiger(){};

function Lion(){};

Lion.prototype=Object.create(Tiger.prototype);
var lion=new Lion();

console.log(Tiger.prototype.isPrototypeOf(lion));


    Animal.prototype=kotek;


var tiger=new Animal('kot');
console.log(kotek.isPrototypeOf(tiger));

// ukryte powiazanie
var ape= new Animal('czlowiek');
ape.drink='wszystko';
ape.cute=false;
ape.nowacecha='java';
console.log(ape.nowacecha, ape.drink);
// pole eat nie jest wlasnym polem ape zostaje sprowadzone z prototypu
console.log(ape.eat);
 // pokaze pola prototypu  prototype pole konstruktora a __proto__ pole instancju
console.log(ape.__proto__);

console.log(ape.constructor); //function object
console.log(typeof ape.constructor.prototype); //object
ape.constructor='nic';
console.log(ape.eat);  //nadal jest powiazanie
console.log(ape.constructor.prototype); // nadal powiazanie jest ale typ konstruktora undefinded
console.log(ape.constructor);  //nic
console.log(ape.__proto__);
// dodawanie do prototypow pol objektów wbudowanych np Array

Array.prototype.inArray=function (n) {
    for(var i=0, len=this.length; i<len;i++){
        if(this[i]===n){
            return true;
        }
    }
    return false;
};

var t=[1,33,44,55];
console.log(t.inArray(33), t.inArray('red'));

String.prototype.reverse=function(){
    return Array.prototype.reverse.apply(this.split("")).join('');
};

var s='abcdefghij';
console.log(s.reverse());

// Pulapki z prototypami
function Dog(){ this.ogon=true;};
var pies=new Dog();
var Haund=new Dog();

Dog.prototype.hau=function(){
    return "Hau";
};
console.log(pies.hau());
console.log(pies.constructor);
console.log(pies.constructor.prototype.constructor);

//nadpisanie prototype
Dog.prototype={ cute: true, bark: "hauaaa"};
console.log(pies.hau());
var lessi=new Dog();
//console.log(lessi.hau());  typeerror nie ma dostepu
console.log(lessi.cute, lessi.ogon); //ma dostep do pola wlasnego dog ogon i nadpisanego protoypu

console.log(pies.constructor);
console.log(lessi.constructor); // object  a jest nadpisany pies  dlatego przy nadpisaniu trzeba dopisac
Dog.prototype.constructor=Dog;
console.log(lessi.constructor); // i teraz wskazuje poprawnie
console.log(lessi.ogon);
console.log(pies.constructor.prototype.bark);




