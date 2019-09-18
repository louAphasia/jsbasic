var http=require("http"), fs=require("fs");  // const {createServer} =require("http")
var methods=Object.create(null);  //zamiast var to const

http.createServer(function (request,response) {   // createServer((request, response) =>{
    function respond(code,body,type){               // let handler=methods[request.method] || notAllowed;
        if (!type)type="text/plain";   // handler(request)
        response.writeHead(code, {"Content-Type": type});   //.catch (error => { if (error.status!=null) return error;
        if(body&&body.pipe)
            body.pipe(response);
        else
            response.end(body)
    }
    if(request.method in methods)
        methods[request.method](urlToPath(request.url), respond, request);
    else
        respond(405, "metoda" + request.method+ "jest niedozwolona");
}).listen(8000);

function urlToPath(url) {
    var path = require("url").parse(url).pathname;
    return "." + decodeURIComponent(path);
}

//konfiguracja funkcji GET
methods.GET=function(path,respond){
    fs.stat(path, function(error,stats){
        if (error&& error.code=="ENOENT")
            respond(404, "file not found");
        else if (error)
            respond(500, error.toString());
        else if (stats.isDirectory())
            fs.readdir(path, function(error,files){
                if (error)
                    respond(500, error.toString());
                else
                    respond(200, files.join("\n"));
            });
        else
            respond(200, fs.createReadStream(path), require("mime").lookup(path));
    });
};

//
methods.GET=function(path){
    return inspectPath(path).then(function(stats){
        if (!stats)
            return {code:404, body:"File not found"};
        else if (stats.isDirectory())
            return fsp.readdir(path).then(function(files){
                return {code:200, body: files.join("\n")};
            });
        else
            return {code:200,
            type: require("mime").lookup(path),
            body: fs.createReadStream(path)};
    });
};

function inspectPath(path){
    return fsp.stat(path).then(null, function(error){
        if (error.code =="ENOENT") return null;
        else throw error
    });
}

methods.DELETE=function(path,respond){
        fs.stat(path,function(error,stats) {
            if(error && error.code=="EOENT")
                respond(204);
            else if (error)
                respond(500, error.toString());
            else if(stats.isDirectory())
            fs.rmdir(path,respondErrorOrNothing(respond))
            else fs.unlink(path,respondErrorOrNothing(respond));
        });
    };

function respondErrorOrNothing(respond) {
    return function(error){
        if (error)
            respond(500,error.toString());
        else
            respond(204)
    };
}
//
methods.PUT=function(path,respond,request){
    var outStream=fs.createWriteStream(path);
    outStream.on("error", function(error){
        respond(500,error.toString());
    });
    outStream.on("finish", function () {
        respond(204);
    });
    request.pipe(outStream)
};
//

var Promise=require("promise");
var fs=require("fs");

var readFile=Promise.denodeify(fs.readFile);
readFile("file.txt","utf8").then(function(content){
    console.log(" plik zawiera " + content);
}, function (error) {
    console.log("nie mozna odczytac pliku"+ error);
});