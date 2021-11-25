// PACKAGE IMPORTATION //
const express = require('express');
const apiRoute = require('./routes/api');
const bodyParser = require('body-parser');
const app = express();

//CORS error treatment//
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

// JSON OBJECT EXTRACTION.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use('/api', apiRoute);

module.exports = app;
