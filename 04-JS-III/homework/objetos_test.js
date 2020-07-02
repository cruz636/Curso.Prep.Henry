/*
/var objeto = {
	propiedad1 : valor1,
	....
	propiedad2 : valor2,
}
*/












const usuario = {
	username : 'juan.perez',
	password : 'asdj',
	lovesJS : true,
	favoriteNumber : 34,
	decirHola : function(){
		console.log("Hola a todos!,mi nombre es "+this.username);
	}

};

usuario.decirHola();

/*for(let clave in usuario){
	console.log(clave);
	console.log(usuario[clave]);
}
*/

