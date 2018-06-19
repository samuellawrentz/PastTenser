var verb= ko.observable();
var pasttense = ko.observable('');
var participle = ko.observable('');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPast(){
    $.get( "https://pastenser.herokuapp.com/" + capitalizeFirstLetter(verb()), function(data) {  
  pasttense(data['past tense']);
  participle(data['past participle']);
});
}

var myViewModel = {
    getPast : getPast,
	verb: verb,
	pasttense: pasttense,
	participle: participle
};

ko.applyBindings(myViewModel);
