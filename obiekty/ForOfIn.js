let iterable=[2,3,4,5];

iterable.forEach(function (a) {
console.log(a);
});

for(let i in iterable){
    console.log("in",i)
};

for(let i of iterable){
    console.log("of",i)
};

