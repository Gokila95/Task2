var firstapp = angular.module("myApp",['ngRoute','ngSanitize']);
firstapp.config(['$routeProvider', function($routeProvider) {
      $routeProvider.when("/", {templateUrl: "partials/carousel.html"});
      $routeProvider.when("/About", {templateUrl: "partials/About.html", controller: "eventsController"});
$routeProvider.when("/Contact", {templateUrl:"partials/Contact.html",controller:"eventsController"});

}
