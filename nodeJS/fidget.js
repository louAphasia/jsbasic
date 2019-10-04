var figlet=require("figlet");
figlet.text("Witajjjjjjj Nadi ", function (error,data) {
    if(error)
        console.error(error)
    else
        console.log(data);
});