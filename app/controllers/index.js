
var names = ["Jeff Haynie","Nolan Wright","Blain Hamon","Aaron Saunders","Aldo Hernandez"];

for(var i=0, j=names.length ; i<j ; i++){
	var criminal = Alloy.createModel("Fugitives", {name: names[i]});
	criminal.save();
}



Alloy.Collections.Fugitives.fetch();


$.index.open();

