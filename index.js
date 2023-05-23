const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/callback-endpoint', (req, res) => {
	console.log(req.query);
	res.send(req.query);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});