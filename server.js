var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;
var environment = process.env.environment || 'development';

app.use(express.static('dist'));

app.listen(PORT, function (err) {
	if (err) {
		console.log (err);
	}
  console.log('App listening on port:', PORT);
});