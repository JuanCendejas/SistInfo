var express = require('express');
var router = express.Router();

//Aqui van las rutas y metodos
//http://127.0.0.1:300/campeones/
router.get('/', (req,res,next)=>{
  res.send('Bienvenido');
});

router.get('/garen',(req,rest,next)=>{
  res.render('campeongaren',{nombre:'Garen' , pasiva: 'perseverancia'});
});

module.exports = router;
