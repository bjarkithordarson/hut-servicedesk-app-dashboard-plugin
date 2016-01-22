console.log("Loading hut-servicedesk-app-info-plugin...");

var fs = require('fs');

function Plugin(context) {

	context.UI.addTab("hut-servicedesk-app-dashboard-plugin", "Stöðuskjár", "dashboard", function() {

		fs.readFile(__dirname + '/index.html', 'utf8', function(error, data) {
			context.UI.loadContent(data);
			context.UI.selectTab("hut-servicedesk-app-dashboard-plugin");
		});

	});

}

module.exports = Plugin