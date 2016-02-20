var args = arguments[0] || {};
/*
var array = [
	{
		title: "Mr. Ace Ventura"
	},
	{
		title: "Miss Ivanna"
	},
	{
		title: "Mr. Simpson"
	},
];
/*
for (i = 0; i < array.length; i++) { 
    
}
*/
//$.table.setData(array);

var fugitivesCollection = Alloy.Collections.Fugitives;

function filtrar(_collection) {
    return fugitivesCollection.filter(function(_i){
        return !_i.attributes.captured;
    });
}

$.table.addEventListener('click', function(_e) {
    var detailController = Alloy.createController('FugitiveDetail', {
        parentTab : $.tabFugitives,
        data : fugitivesCollection.get(_e.rowData.model)
    });
    $.tabFugitives.open(detailController.getView());
});