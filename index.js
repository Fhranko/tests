const express = require('express');

const app = express();

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());

const cors = require('cors');

var corsOptions = {
	origin: '*',
};

app.use(cors(corsOptions));

const port = 8080;

app.get('/', (req, res) => {
	res.send('Hello callback!');
});

app.get('/callback-endpoint', (req, res) => {
	console.log(req.query);
	res.send(req.query);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
