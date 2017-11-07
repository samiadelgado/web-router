angular
	.module('app')
	.config( function ($stateProvider, $urlRouterProvider){
		$stateProvider
			.state( 'main',{
				url: '/',
				controller: 'HomeController as ctrl',
				templateUrl: '../main.html'
			})

			.state( 'work',{
				url: '/work',
				controller: 'WorkController as ctrl',
				templateUrl: '../work.html'
			})

			.state( 'contact',{
				url: '/contact',
				controller: 'ContactController as ctrl',
				templateUrl: '../contact.html'
			});

		$urlRouterProvider.otherwise('/');
	});