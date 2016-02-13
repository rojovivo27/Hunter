Ti.API.info('seeded:' + Ti.App.Properties.hasProperty("seeded"));

if(!Ti.App.Properties.hasProperty("seeded")){
	
	
	/*
	var names = ["Jeff Haynie","Nolan Wright","Blain Hamon","Aaron Saunders","Aldo Hernandez"];
	
	for(var i=0, j=names.length ; i<j ; i++){
		var criminal = Alloy.createModel("Fugitives", {name: names[i]});
		criminal.save();
	}
	*/
	
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function () {
		Ti.API.info('got data from the network: ' + this.responseText);
		
		var people = JSON.parse(this.responseText);
		for(var i=0, j=people.length ; i<j ; i++){
			var criminal = Alloy.createModel("Fugitives", {name: people[i].name});
			criminal.save();
			
			console.info("name: " + people[i].name);
		}
		
		Ti.App.Properties.setBool('seeded',true);
		
		Alloy.Collections.Fugitives.fetch();
		
	};
	
	xhr.open("GET","http://jsonplaceholder.typicode.com/users");
	xhr.send();
	
	$.index.open();
	
} else {
	
	Alloy.Collections.Fugitives.fetch();
	$.index.open();
	
}





//Pasos para traer datos de una BD local

//Create - Database
//Populate - Records
//Bind - Model and User Interface
//Fetch - Data