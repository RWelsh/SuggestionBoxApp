app.controller('PostController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) { 
	$scope.post = suggestions.posts[$routeParams.id];

	$scope.addComment = function(){
	//if input empty, don't submit
	if(!$scope.body || $scope.body === "") {
		return;
	}
 
	//push suggestion posts in suggestions.js
	$scope.post.comments.push({
		body: $scope.body,
		upvotes: 0,
	});
 
	//after submit, clear input
	$scope.body = '';
	};

	$scope.upVote = function(comment){
		comment.upvotes += 1;
	};

}]);