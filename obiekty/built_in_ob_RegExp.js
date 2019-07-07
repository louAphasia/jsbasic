var re=new RegExp('j.*t','g');  // 'gmi - global zwraca wszystkie dopasowanie domyslnie false zwraca pierwsze
   // m - multiline i  ignorecase wszystkie sa domyslnie false  a pojawienie sie pierwszej litery przelacza na true
console.log(re.global, re.lastIndex);
re.lastIndex=12;
// latindex od ktorego ma  zaczac przeszukiwania
var dopas=re.test("javascript jest bot jejtis");
console.log(dopas);
var tabdop=/j.*t/gmi.exec("javavascript jest jest");
console.log(tabdop);
var tab=re.exec("javavascript jest jest"); // why null
console.log(tab);
