fs = require('fs');

fs.readFile('nodeJS/pies.txt', 'utf8', function(err, content){
    console.log('first file: ');
    console.log(content);
});
fs.readFile('nodeJS/pies.jpg', 'utf8', function(err, content){
    console.log('photo loaded');
});
fs.readFile('nodeJS/pies3.txt', 'utf8', function(err, content){
    console.log('third file: ');
    console.log(content);
});