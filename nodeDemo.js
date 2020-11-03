const http = require("https");

const options = {
	"method": "GET",
	"hostname": "rapidapi.p.rapidapi.com",
	"port": null,
	"path": "/statistics",
	"headers": {
		"x-rapidapi-key": "dcab7cf4a8mshebe0b1c9fd71d1bp1da46djsn8a2996cbb4d4",
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();