app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/states/home/ob.home.template.html',
        resolve: {
        	loggedInUser: function(AuthService){
                console.log('in state')
        		return AuthService.getLoggedInUser()
        	},
            isLoggedIn: function(AuthService){
                return AuthService.isAuthenticated()
            }
        },
        controller: 'HomeCtrl'
    });
});