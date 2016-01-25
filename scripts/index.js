/* 
 * Simple script to parse original data file and create separate files for each plow ID.
 */

var fs = require('fs');
fs.readFile('./plow-history.json', function(err, data) {
	var plow_data = {};
	var records = JSON.parse(data);
	for(var i=0; i<records.length; i++) {
		if(records[i].vehicles.length == 0) {
			continue;
		}
		for(var j=0; j<records[i].vehicles.length; j++) {
			if(typeof(plow_data[records[i].vehicles[j].id]) == 'undefined') {
				plow_data[records[i].vehicles[j].id] = new Array();
				plow_data[records[i].vehicles[j].id].push(records[i].vehicles[j]);
			}
			else {
				plow_data[records[i].vehicles[j].id].push(records[i].vehicles[j]);
			}
		}
	}
	for(plow in plow_data) {
		fs.writeFile('./data/' + plow + '.json', JSON.stringify(plow_data[plow]), function(err) {
			if(err) {
				console.log('ERROR: Could not write ' + plow);
			}
		});
	}
});