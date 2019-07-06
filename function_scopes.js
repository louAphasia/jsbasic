function f1(){var a=1; f2();}
function f2(){return console.log(a);}
f1(); //a is not defined
var a=5;
f1();
var a=345;
f1();
console.log(delete a); // false
f1();
delete f2();
f1();
console.log('----------');
//zakres global i lokalne funkcji
function f(){
    var b='b';
    return function () {return b;}
         }
console.log(f());//lokalna zmiennna b nie jest dostępna z przestrzeni globalnej
//  b is not defined  >  console.log(b);

var n=f();
console.log(n()); //'b' pojawia się ma dostep
console.log('-----------');

var p;
function m(){
    var b='b';
    p=function(){
        return b;
    }
}
console.log(m());  //trzeba wywolac funkcje m() a powstalo przypisanie funkcji do p
console.log(p());  // 'b' bo jako przypisana ma dostep do f() zmiennych i globalnych i swoich

var e=3;
function x(){
    var q=1;
    console.log(q,e);
    return function y(){
        var w=2;
        console.log(w,q,e);
    };
};

x();
x()();
r=x();
console.log('-----------');
r();
console.log('----------- 3 domkniecie ');
//z var przypisanie i argumenty
function i(arg){
    o=function(){  // opcja var o=function()  lepsza
        return console.log(arg);
    };
    arg++;
    return o;
}
i(234);
o();
console.log('-----------')
var f=i(2345);
f();
console.log('-----------');
//bez return f child
function t(){
    var u=1;
    console.log(222);
    function yy(){  //nie ma return
        console.log(444444+u);
    }
};
t(); //tylko 222 wyswietli
//domkniecie w petli
console.log('----------- domkniecie i petla')
function k(){
    var j=[];
    var l;
    for(l=0;l<4;l++){
        j[l]=function(){
            return l;  //domkniecie zwraca jej aktualna wartosc referencje
        }
    }
    return j; //zwraca tablice
}

var h=k();
console.log(h[3]());
//PRAWIDLOWO DOMKNIECIE PETLA TABLICA
console.log('----domkniecie petla samowywl.');
var g=v();
// samowywolujaca się
function v(){
    var c=[],i;
    for(i=0;i<3;i++){
        c[i]=(function(x){
            return function(){
                return x;
            }
        })(i);
    }
    return c;
}
console.log(g[0]());
console.log('----domkniecie petla BEZ  samowywl. better look');
function vv(){
    function make(x){
        return function(){
            return x;
        }
    }
    var e=[];
    var i;
    for(i=0;i<3;i++){
        e[i]=make(i);
    }
    return e;
}
var bb=vv();
console.log(bb[1]());
(function(){ for(var i in bb){console.log(bb[i]())}; })();

function xxx(){
    console.log('aaa');
    return function(){
        return 'wew';
    };
};
console.log(xxx());
console.log('-----------');
console.log(xxx()());
console.log('-----------');

var wew=xxx();
console.log('-----------');

console.log(wew());