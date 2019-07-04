function sumaa(){
    var i=0,res=0;
    var liczbapara=arguments.length;
    for(i=0;i<liczbapara;i++){
        res+=arguments[i];}
    return res;
    }

    var w=sumaa(1,2,3);
console.log(w);
console.log(parseInt('0377'));

eval('var i=2');
console.log(i);

var x=123;
function f() {
    console.log(x);
    var x = 1;
    console.log(x);
}
f();

function m(){
    local=2;
    console.log(x);
}
m();  //przy pierwszym tworzeniu funkcji powstaje i zmienna juz istnieje bez var const - m zasieg globalny
console.log('local '+local);

var n=function () {return 1;};
var newf=n;
delete n
console.log(typeof n);
console.log(typeof newf);

//funkcja z parametrem funkcja
function razydwa(a,b,c,d,callback){
    var i,arr=[];
    for(i=0;i<4;i++){
        arr[i]=callback(arguments[i]*2);}
    return arr;
    }
var arrr=razydwa(1,2,3,4,function (a){return a+1;} );
console.log(arrr);

// funckcja anonimowa samowywolujaca sie
(
    function () {
        console.log(1);

    }
)();

// funkcja z return jako innej funkcji [sama dziala TYLKO po przypisaniu do zmiennej
function a(){
    console.log('nad');
    return function(){ return console.log('2222');};
}

a();
console.log('1111-----------')
var zawarta=a();
console.log('222-----------')
zawarta();
console.log('3333-----------')

//wyswietlaja sie ciala dwoch funkcji 'nad' i z '222'
a()();
console.log('-----------')
var a=a(); //przypisanie do funkcji a jej funkcj z return wew.
a();
//
var a=function(){
    function ini(){
        console.log('juz');
    }
    function norma(){
        console.log('praca');
    }
    ini();
    return norma;
}(); //uruchomia sie sama  > ini()

a(); //przypisanie robi tylko 'praca'