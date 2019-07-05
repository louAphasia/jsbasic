book={
    title:'Honor',
    pages:600,
    author:{
        name: 'Elif',
        surname: 'Shafak'
    },
    describe:function (x) {
        return console.log(book.title+book.pages+book.author.name+x)
    }
};

console.log(book.author['name']);
var key='name';
console.log(book.author.key);
book.describe('nr1');

book.country='turkey';
delete book.pages;

book.describe('bez page');


function Book(pages){
    this.title='unknown';
    this.pages=pages;
    this.auto=function(){
        return this.title+ " ma "+ this.pages + " stron";
    }
}
var book2=new Book(500);
console.log(book2.auto());

console.log(book2.constructor);
var book4=new book2.constructor(300);

console.log(book2 instanceof Book);
console.log(book4 instanceof Object);
console.log(book instanceof Object);

console.log(book instanceof Book);
console.log(book4.constructor);

//tworzenie obiektow za pomoca funkcji
function factory(name){
    return {
        name:name
    };
}
//bez new jak zwykly konstruktor
var a=factory('jeden');
console.log(a.name);
// return z konstruktorem

function B(){ this.a=1;
return b=2;};//poniewaz b:2 to obiekt klucz i wartosc a jaby bylo b=2
var c=new B();
console.log(c.a);
console.log(c.b);
// referencja a zmiany w obiekcie oryginal
var ory={ ile:1};
var kopia=ory;
console.log(ory.ile, kopia.ile);
kopia.ile=100;
console.log(ory.ile, kopia.ile);
//porownywanie obiektow ta referencja do tego samego obiektu a nie identycznosc pol
var ide={name:1};
var ide2={name:1};
console.log(ide===ide2);
console.log(ide==ide2);
var ide1=ide;
console.log(ide===ide1);


