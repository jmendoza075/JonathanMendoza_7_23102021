require('dotenv').config();
const knex = require('knex')({
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'sqluser',
		password: process.env.MY_SQL_PASSWORD,
		database: process.env.MY_SQL_DBASE,
	},
});
module.exports = knex;
