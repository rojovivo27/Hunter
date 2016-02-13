Ti.API.info('seeded:' + Ti.App.Properties.hasProperty("seeded"));

if(!Ti.App.Properties.hasProperty("seeded")){
	var names = ["Jeff Haynie","Nolan Wright","Blain Hamon","Aaron Saunders","Aldo Hernandez"];
	
	for(var i=0, j=names.length ; i<j ; i++){
		var criminal = Alloy.createModel("Fugitives", {name: names[i]});
		criminal.save();
	}
	
	Ti.App.Properties.setBool('seeded',true);
}

Alloy.Collections.Fugitives.fetch();


$.index.open();


//Pasos para traer datos de una BD local

//Create - Database
//Populate - Records
//Bind - Model and User Interface
//Fetch - Data