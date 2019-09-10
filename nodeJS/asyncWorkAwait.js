function asyncAction() {
    return new Promise((resolve,reject)=> {
        const successTimeout = Math.random() * 100;
        const errorTimeout = Math.random() * 100;

        setTimeout(() => {
            resolve('success');
        }, successTimeout);
        setTimeout(()=> {
            reject('error');
        }, errorTimeout);
    });
}

async function doWo() {
    try{
        const data=await asyncAction();
        console.log(`message =${data}`);
    }catch(error) {
        console.log(`message=${error}`);
    }
}

doWo()