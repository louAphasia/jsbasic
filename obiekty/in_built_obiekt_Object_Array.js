var o2=new Object();
console.log(o2.valueOf());

o={name:2344, value:2234};
var ss=o.toString();
console.log(ss);
console.log('Object'+o);
console.log('Object'+o.valueOf());
console.log('============');

console.log(o);


console.log(o.valueOf());
console.log('--------ARRAY');

//Array
var m=new Array(5);
var n=new Array(1,2,3,'rr');
console.log(m.valueOf());
console.log(n.valueOf());
console.log(m.toString());
console.log(n.toString());

//array metody  length sort slice join pop push
n.length=5;
console.log(n);

var g=n.slice(0,4);
console.log(g);
console.log(g.pop());
console.log(n.splice(0,2))



