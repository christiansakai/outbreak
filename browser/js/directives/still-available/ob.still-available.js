app.directive("stillAvailable", function($rootScope){
	return {
		restrict: 'E',
		templateUrl: 'js/directives/still-available/ob.still-available.html',
		scope: {},
		link: function(scope){
			scope.outbreakLevel = 0;
			//the database should initialize the outbreak level so the above line should not be necessary

			scope.changeTheLevel = function(payload){
				scope.outbreakLevel = payload.outbreakLevel;
				$("#radio_"+scope.outbreakLevel).prop("checked", true)

			}
			$rootScope.$on('stateChange', function(event, payload){
				if(scope.outbreakLevel !== payload.outbreakLevel){
					changeTheLevel(payload);
				}
			})

		}
	};
});