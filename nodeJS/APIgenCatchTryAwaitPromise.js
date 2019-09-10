var fetch=require('node-fetch');

const cityAPI='https://www.mocky.io/v2/5a945fa435000074009b0e78';
const weatherAPI='https://mocky.io/v2/5a947dfa35000072009b0eb97city=';



// zamist generatora *app na async
async function app1() {
    const city = await fetch(cityAPI).then(r => r.json());
    const weather = await fetch(weatherAPI + city.name).then(r => r.json());
    console.log(city.name);
    console.log(weather.temp + weather.unit);
}
app1();

const request=async ()=>{
    try{
        getSome()
                const data=JSON.parse(await getSome());
                console.log(data)
    }catch(err){
                    console.log(err)
         }catch(err) {
        console.log(err)
    }
}