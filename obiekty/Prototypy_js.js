var obiekt={
    name:"Nadi",
    miau: function(){
        return "Jestem "+ this.name;
    }
}
function F(){};

F.prototype=obiekt;
var obiekt2=new F();

console.log( obiekt2.name, obiekt2.miau());