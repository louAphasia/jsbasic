function f(name) {
    if(name==3)return;
    if(name==4)
        return name;
}

console.log(f(3))
console.log(f(4))

console.log(+'a')

var arr1=[1,2];
var arr2=[...arr1]
var arr3=arr1;
console.log(arr2);
console.log(arr3);

var res1={name:"timi", marks:35};
var res2={name:'jullu', marks:89};

var clone={res1};
var clone1=[res1];

var clone3=res1;
var clone2={...res1};
res1={name:'nos'}
console.log(clone)
console.log(clone1)

console.log(clone2)
console.log(clone3)

var to1=["abc","avc"];
var sum=["alal",...to1,"buu"];
console.log(sum);

var tab=[22,33];
var tab1=tab;
tab1.push(4);
console.log(tab1);
console.log(tab);