
const strobj='{"a":1,"b":"h"}';
const obj=JSON.parse(strobj);
console.log(obj);
obj.c=2;
console.log(obj);
const strobj2=JSON.stringify(obj);
console.log(strobj2);
const strobj3=JSON.stringify(obj,null,2);
console.log(strobj3);