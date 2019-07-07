function moze(){
    return 0;
}

try{
    var total=moze();
    if(total===0){
    throw new Error("dzielenie przez o ");
    }else{
        console.log(50/total);
    }
}catch (e){
    console.log(e.name + ": " + e.message);
}finally{
    console.log("wreszcie");
}
// rzucony tez obiekt nie nalezacy do obiektow Error
try {
    var x = 2
    if (Number.isFinite(x) == true) {
        throw {
            name: "o rany",
            message: "ups"
        }
    }
    }catch (m){
    console.log(m.name, m.message)
}
