var b1=new Boolean(true);
console.log(typeof b1);
console.log(typeof b1.valueOf());

Boolean(b1);
console.log(typeof b1);
var b2=new Boolean(false);
var b3=false;
console.log(typeof b3);
console.log('false boolean  '+Boolean(b3));

console.log("false object  "+Boolean(b2));

// Number
console.log('-----------number object ');

var nr=Number('255');
console.log(typeof nr);
var obnr=new Number('2345.2345');
console.log(typeof obnr);

console.log(obnr.toFixed(7));
console.log(obnr.toExponential());
console.log(obnr.toPrecision(4));

var s=nr.toString(16);
console.log(s);

//String
console.log('--------------Strings');

var stringus='daneproste';
var obstring=new String('objekt');
console.log(typeof stringus);
console.log(typeof obstring);

console.log(stringus[0]);
console.log(obstring[2]);
console.log(obstring.length, stringus.length);

'bezkonstruktora'.length;
console.log('bezkon'[2]);

console.log(Boolean(""), Boolean(new String("")));
// "" to typ prosty false  a KAZDY OBIEKT TO true

var str=new String("very small Small");
var pro=str.toString();
console.log(typeof pro);
console.log(str.toUpperCase());
console.log(str.charAt(5), pro.charAt(2)); //to samo co str[5]  i pro[2]
console.log(str.indexOf('ma'), str.lastIndexOf('ma'),str.indexOf('i'));
var sli=str.slice(1,str.length-1);
console.log(str.substring(0,2));
var sub=str.substring(2,0);
console.log(sli,"-----",sub);

var splitt=str.split('s');
console.log(splitt);
var jjj=splitt.join('xxx');
console.log(jjj);
var mmm=str.concat(" not so much");
console.log(mmm);