function getPast(){
    $.get( "http://localhost:8000/Eat", function(data) {
  
  alert(data);
});
}

var myViewModel = {
    getPast : getPast,
    personName: 'Bob',
    personAge: 123
};

ko.applyBindings(myViewModel);
