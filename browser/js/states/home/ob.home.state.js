app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/states/home/ob.home.template.html',
        resolve: {
        	loggedInUser: function(AuthService){
        		return AuthService.getLoggedInUser()
        	}
        },
        controller: 'HomeCtrl'
    });
});