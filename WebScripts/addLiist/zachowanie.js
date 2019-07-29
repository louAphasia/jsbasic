var myevent=document.body;
myevent.addEventListener('my', 'submit', function (e) {
  myevent.stopPropagation(e);
  var 
  //walidacja
    var el=document.getElementById('szukaj');
    if(!el.value){
        myevent.preventDefault(e);
        alert("prosze wprowadzic zapytanie");
    }
});