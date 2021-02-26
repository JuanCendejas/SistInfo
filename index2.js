var Http = require( 'http' );
var fs = require( 'fs' );

var server = Http.createerver(function(request,response){

    fs.readFile('hola.html',function(err,datos){
        console.log('Alguien entró ...1,2,3');
        response.write(datos);
        response.end();
    });
    


})

server.listen( 300,function(){
console.log( 'Escuchando conexion en el puerto 300' );
});