const knex = require('knex')({
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'sqluser',
		password: 'password',
		database: 'grupomania',
	},
});
module.exports = knex;
