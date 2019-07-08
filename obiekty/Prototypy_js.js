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
