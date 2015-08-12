var appName = 'portfolio';
var app = angular.module(appName, ['ngResource', 'ngRoute', 'example', 'photos', 'replies']);

app.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function() {
	angular.bootstrap(document, [appName]);
});