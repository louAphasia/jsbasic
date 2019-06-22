//nr
const strObjnum=new Number('123');
const num=strObjnum.valueOf();
const numStr=strObjnum.toString();
console.log(strObjnum===123);
console.log(strObjnum==123);
console.log(15===Number.parseInt('15',10));

//str

const strObj=new String("abcde");
const str=strObj.valueOf();
strObj.match(/ab/);
str.match(/ab/);
const str1="React";
const newStr="abcde".substr(1,2);

// pattern regex

const str2="A";
const pattern=/[A-Z]+/;
console.log('ab'.match(pattern));
console.log('AB'.match(pattern));

console.log(pattern.test(str2));
