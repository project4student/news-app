const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, "statics");

app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, err => {
	if (err) return console.log(err);
});