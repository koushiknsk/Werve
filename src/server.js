// initialize the express application
const express = require("express");
const app = express();

// initialize the Fitbit API client
const FitbitApiClient = require("fitbit-node");
const client = new FitbitApiClient({
	clientId: "22DNXB",
	clientSecret: "ad6c235e4a602e93705b25795294a617",
	apiVersion: '1.2' // 1.2 is the default
});

// redirect the user to the Fitbit authorization page
app.get("/", (req, res) => {
    console.log("Authorizing")
	// request access to the user's activity, heartrate, location, nutrion, profile, settings, sleep, social, and weight scopes
    res.redirect(client.getAuthorizeUrl('activity heartrate location nutrition profile settings sleep social weight', 'http://127.0.0.1:3000/callback')); 
});

// handle the callback from the Fitbit authorization flow
app.get("/callback", (req, res) => {
    // exchange the authorization code we just received for an access token
    console.log(req.query.code)
	client.getAccessToken(req.query.code , 'http://127.0.0.1:3000/callback').then(result => {
		// use the access token to fetch the user's profile information
		client.get("/activities/steps/date/today/1m.json", result.access_token).then(results => {
			res.send(results[0]);
		}).catch(err => {
			res.status(err.status).send(err);
		});
	}).catch(err => {
		res.status(err.status).send(err);
	});
});


// launch the server
app.listen(3000,function(){
    console.log("Serving static on 3000");
  });