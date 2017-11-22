
/***************************************** */
/**STANDARD SETUP (all general to setting up a server with express) */

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

/**END OF STANDARD SETUP */
/***************************************** */







/***************************************** */
/**LASTLY - execute Listen to port */
app.listen(PORT, function() {
    console.log('App listening on port ' + PORT + '!');
});