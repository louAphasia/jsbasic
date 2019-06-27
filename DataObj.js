const boj={
    name:'ula',
    age:29,
    url:'img/agata.jeg'
};
const object=new Object({a:1,b:2});
a=Object.keys(object);
b=Object.entries(object);
c=Object.values(object);
d=boj.valueOf('name');
console.log(c);
console.log(d);
console.log(b);
// clone
const o1={a:1};
const o2=o1;
console.log(o2);
o1.a=2;
console.log(o2);
const o3=Object.assign({},o1);
o1.a=3;
console.log(o3);