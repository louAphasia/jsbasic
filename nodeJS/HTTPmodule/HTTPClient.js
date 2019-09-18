const {request}=require("http");
let requestStream=request({
    hostname:"eloquent",
    path:"/20_node.html",
    method:"GET",
    headers:{Accept:"text/html"}
},response=> {
    console.log("Server responded with status code"
        , response.statusCode);
});
requestStream.end();