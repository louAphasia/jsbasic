

function doWork() {
    AAction()
        .then(data=> {
            console.log(data);
        })
        .catch(error=> {
            console.log(error);
        });
}

doWork();