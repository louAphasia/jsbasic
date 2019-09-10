var fetch=require('node-fetch');

const cityAPI='https://www.mocky.io/v2/5a945fa435000074009b0e78';
const weatherAPI='https://mocky.io/v2/5a947dfa35000072009b0eb97city=';

function *app(){
    const city=yield fetch(cityAPI).then(r=>r.json());
    const weather=yield fetch(weatherAPI+city.name).then(r=>r.json());
    console.log(city.name);
    console.log(weather.temp+weather.unit);
}

const generator=app();
start(generator);

function start(generator){
    runner();
    function runner(resume){
        const next=generator.next(resume);
        const promise=next.value;
        if (next.done){return; }
        promise.then(result=>runner(result))
    }
}

// zamist generatora *app na async
async function app1() {
    const city = await fetch(cityAPI).then(r=>r.json());
    const weather = await fetch(weatherAPI + city.name).then(r => r.json());
    console.log(city.name)
}


