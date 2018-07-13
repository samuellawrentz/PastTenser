var verb= ko.observable();
var pasttense = ko.observable('');
var participle = ko.observable('');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Make a mock data call for faster results
(function init(){
    $.get("https://pastenser.herokuapp.com/Load").done(() => true);
})();

function getPast(){
    $.get( "https://pastenser.herokuapp.com/" + capitalizeFirstLetter(verb()), function(data) {  
  pasttense(data['past tense']);
  participle(data['past participle']);
});
}

$('input').on('focus', function(){
    $(this).val('');
});

var myViewModel = {
    getPast : getPast,
	verb: verb,
	pasttense: pasttense,
	participle: participle
};

ko.applyBindings(myViewModel);
