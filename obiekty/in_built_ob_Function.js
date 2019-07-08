// konstruktor Function

var suma=new Function('a,b','return a+b;');
console.log(suma(2,3));

var arg=new Function('a,b,c,d','return arguments;');
console.log(arg(2,3,44,55));

console.log(suma.length, arg.length);
function ccc(){
    return 'aaa';
};
console.log(suma.constructor, ccc.constructor);
console.log('-----------------------------------');
//caller metoda

function A(){return A.caller};
function B(){
    return A()};

console.log(B());
console.log(A.caller); //nie moze z zewnatrz funkcji wewnetrznej A funckja zwraca kto ja wywoluje
//przydatne kto ja wywolal to funkcja ma sie zachowywac odmiennie

console.log('METODY FUNCTION-----------------------------------');
function abc(a,b,c){
    return arguments;
};
console.log(B.toString());

var obiekt={
    name:"tom",
    mow: function(who){
        return console.log(who+this.name);}
};
obiekt.mow('uuu');

var my={
    name: 'luki'
};
obiekt.mow.call(my,'yyy');
obiekt.mow.call('','un');

obiekt.mow.apply(my,['my'])
obiekt.mow.call(my,['my'])
// arguments
function s(x,y){ return arguments.length}; //2
console.log(s(2,5));
function r(x,y){ return arguments.callee}; //function r
console.log(r(2,5));

(
    function(count){
        if (count<5){
            console.log(count);
            arguments.callee(++count);
        }
    }
)(1);

console.log('-------------- sum up ');

function FF(){
    function C(){
        return this; // obiekt global odnosi się
    }
    return C();
}

function CC(){
    return this
}
var o=new FF();
var oo=new CC();
console.log(oo);
console.log(o);

function BB(){
    this.a=1;
    return false;
}
console.log(new BB()); // return object type a BB{ a:1}