var verb= ko.observable();
function getPast(){
    $.get( "https://pastenser.herokuapp.com/" + verb(), function(data) {
  
  alert(data['past tense']);
});
}

var myViewModel = {
    getPast : getPast,
    personName: 'Bob',
    personAge: 123,
	verb: verb
};

ko.applyBindings(myViewModel);
