angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends

	friendService.getFriends().then(function(response){
		console.log(response);
		$scope.friends=response.data.friends;
		$scope.currentUser={
			name:response.data.currentUser
		}
	})
});
