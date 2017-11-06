angular
	.module('app')
	.config( function ($stateProvider, $urlRouterProvider){
		$stateProvider
			.state( 'home',{
				url: '/',
				controller: 'HomeController as ctrl',
				templateUrl: '../index.html'
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