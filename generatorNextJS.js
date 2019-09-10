function *foo(x){
    yield x+1;
    yield y=6;
    let z=yield 5 ;
    return z+x+y;  //x=5 y =6 a z podstawiamy 8
}

var gen=foo(5);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next(8))
