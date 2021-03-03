var Http = require( 'http' );
var fs = require( 'fs' );
var url = require('url');

var server = Http.createerver(function(request,response){
    var uri = (request.connection.encrypted ? 'https': 'http') + '://' 
                        + request.headers.host + request.url;
    console.log(uri);                    
    var uri_parseada = url.parse(uri,true);
    console.log(uri_parseada);


//GET y ruta / --> pagina1.html
//POST y ruta / --> pagina2.html
//GET y ruta / mensaje --> recurso.json

if(request.method == 'GET'){
    if(uri_parseada.path == "/"){
        fs.readFile('pagina1.html',function(err,datos){
            console.log('Sirviendo pagina 1 ...1,2,3');
            response.writehead(200,"Conten-Type:text/html");
            response.write(datos);
            response.end();
        }); //a esta parte le falta manejo de errores

    }else{
        if(uri_parseada.path == "/mensaje"){
            fs.readFile('recurso.json',function(err,datos){
                console.log('Sirviendo pagina 1 ...1,2,3');
                response.writehead(200,"Conten-Type:text/json");
                response.write(datos);
                response.end();
            });

    }
    
    } else{
        if(request.method = 'POST'){
            fs.readFile('pagina2.html',function(err,datos){
                console.log('Sirviendo pagina 2 ...1,2,3');
                response.write(datos);
                response.end();
            }); //a esta parte le falta manejo de errores
        } else{
            response.write("Nada que servir");
                
            }
        }
        
    } 

})

server.listen( 300,function(){
console.log( 'Escuchando conexion en el puerto 300' );
});