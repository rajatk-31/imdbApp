const app=angular.module("myapp",[])

app.controller('aCtrl', function($scope) {
	$scope.actors = [{name:'Sharukh Khan'},{name:'Amir Khan'},{name:'Alia Bhatt'},{name:'Kadar Khan'}]
});