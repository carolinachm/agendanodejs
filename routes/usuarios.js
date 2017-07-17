module.exports = function(app){

	var usuario    = app.controllers.usuarios;
	//var autenticar = require('../middleware/autenticar');

	app.route('/usuarios').get(usuario.index);
	
	app.route('/usuarios/create')
		.get(usuario.create)
		.post(usuario.post);

	app.route('/usuarios/show/:id').get(usuario.show);
	app.route('/usuarios/delete/:id').post(usuario.delete);

	app.route('/usuarios/edit/:id')
		.get(usuario.edit)
		.post(usuario.update);
}