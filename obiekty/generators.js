function* fibb(){
    let[prev,curr]=[0,1];
    while(true){
        [prev,curr]=[curr,curr+prev];
        yield curr;
    }
}
for(let n of fibb()){
    console.log(n);
    if(n>=1100){
        break;
    }
}