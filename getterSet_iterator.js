console.log('---funkcje set iget');
var getValue, setValue;
(function(){
    var secret=0;
    getValue=function(){
        return secret;
    };
    setValue=function(v){
        secret=v;
    };
})();

console.log(getValue());
setValue(1234);
console.log(getValue());

console.log('--------ITERATOR---');

function it(x){
    var i=0;
    return function(){
        return x[i++];
    };
}

var next=it([1,22,3,4]);
console.log(next());
console.log(next());
