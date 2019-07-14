// dziedziczenie za pomoca object funkcji schowany konstruktor

function object(p){
    function F(){};
    F.prototype=p;
    return new F();
};
// ze wskaznikiem do parent jak uzywamy

function objectw(p){
    var w;
    function F(){};
    F.prototype=p;
    w=new F();
    w.xess=p;
    return w;
}
var fi={ name: 'figura', toStr: function(){ return this.name}};


var trio=objectw(fi);
trio.name='trio';
trio.toStr=function(){ return this.xess.toStr()+ this.name}

console.log( trio.toStr());

//----------DZIEDZICZENIE PROTOTYPOWE I KOPIOWANIE POL

function objProtoCop(p,extend){
    var n;
    function F(){};
    F.prototype=p;
    n=new F();
    n.xess=p;
    for(var i in extend){
        n[i]=extend[i];
    }
    return n;
}

var fi2=objProtoCop(fi,{ name:'fi2', toStr:function (){ return this.xess.toStr() + ' '+ this.name} });

var trio=objProtoCop(fi2, { name: 'trio', pole: function(){return this.bok * this.wys;}, bok:0, wys:0});

var my=objProtoCop(trio,{bok:5,wys:4,name:"maluszek"});

console.log(my.pole());
console.log(my.toStr());

//DZIEDZICZENIE WIELOKROTNE------------/

function multi(){
    var n={}, staff, j=0, len=arguments.length;
    for(j=0;j<len;j++) {
        extend = arguments[j];
        for (var i in extend) {
            n[i] = extend[i];
        }
    };
    n.x=arguments[1];//n.x wskaznik do drugiego argmentu czyli obiektu figu2
    return n;
    };

figu2={name:'fiz', wymiary:2};

var tot=multi(fi, figu2,{name:'tot',
pole:function(){return this.b*this.a+ this.x.name;
}, b:3,a:5});

console.log(tot.pole(), tot.toStr(), tot.wymiary);


//DZIEDZICZENIE PASOZYTNICZE  z funkcja object()
var obi={
    name:'obi', wymiary:2};

function newobi(b,w){
    var that=object(obi);
    that.pole=function(){ return this.bok*this.wys
    }
    that.bok=b;
    that.wys=w;
    return that;
}

var t=newobi(10,22);
console.log(t.wymiary, t.pole());

//WYPOZYCZENIE KONSTRUKTORA  konstruktor zawsze z new instancja

//rodzic
function Figura(id){
    this.id=id;
}
Figura.prototype.name='figura';
Figura.prototype.toStr=function(){ return this.name};

//dziecko bez dostepu do prototypu
/*function Shape(){
    Figura.apply(this,arguments);}
    Shape.prototype.name='shape';

var test=new Shape(101)
console.log(test.id);
console.log(test.name)
console.log(test.toStr())  //nie ma dostepu do pol prototypu rodzica tylko wlasnych
*/
function Shape(){
    Figura.apply(this,arguments);}  //dziedziczenie pol wlasnych rodica
    Shape.prototype=new Figura(); // trzeba create instnacje aby prototyp rodzica obowiazywal
Shape.prototype.name='shape';

var test=new Shape(101); //wlasne pola rodzica jako wlasne pola dziecka
console.log(test.name);
console.log(test.id);
console.log(test.toStr());

//druga opcja bez dublowania apply i new Figura z funckja kopiowania pol extend2

function extend2(child,parent) {
    var p = parent.prototype;
    var c = child.prototype;
    //kopiujemy wszystkie pola z rodzica do child
    for (var i in p) {
        c[i] = p[i];
    }
    c.xess = p; //wskaznik child do rodzica
}

function Shape1(){
    Figura.apply(this,arguments);}
extend2(Shape1,Figura);
Shape1.prototype.name='shape1';

var ss=new Shape1(222222222222222);

console.log(ss.toStr(), ss.name, ss.id);









