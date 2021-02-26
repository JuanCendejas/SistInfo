var Http = require( 'http' );
var server = Http.createServer(function(request,response){
    console.log('Alguien entro ');
    console.log(request.url);
    console.log(request);

    response.writeHead(200,"Content.Type");

    if(response.method == 'GET'){
        response.write("<style>h1{color:blue} </style>")
        response.write("<h1> Hola ICO Fes Arag&oacuten, la mejor carrera </h1> ");

    } else{
        response.write("No es get!!");
    }

    response.end();

});

server.listen( 300, function( ){
    console.log( 'Escuchando conexion en el puerto 300');
});