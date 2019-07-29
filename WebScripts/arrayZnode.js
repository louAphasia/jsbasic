var arrayish={0:"jeden",1:"dwa",length:2};
var real =Array.prototype.slice.call(arrayish,0);
real.forEach(function (elt) { console.log(elt);
});