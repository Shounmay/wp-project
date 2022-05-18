const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const { MongoClient } = require('mongodb');
const uri =
	'mongodb+srv://vaibbhav:vaibhav1112@cluster0.ousqe.mongodb.net/Project 0?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
require('./db/conn');
const Register = require('./models/register');
const port = process.env.PORT || 3000;
client.connect();
const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');

app.use([express.static(static_path), express.json(), express.urlencoded()]);
app.set('view engine', 'hbs');
app.set('views', template_path);

app.get('/', (req, res) => {
	res.render('index');
});
app.post('/', async (req, res) => {
	const document = {
		username: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};
	const response = await client
		.db('RegisteredUsers')
		.collection('Users')
		.insertOne(document);
	console.log(document);
});
app.listen(port, () => {
	console.log(`server is at port ${port}`);
});
