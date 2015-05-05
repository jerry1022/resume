'use strict';

/**
 * @ngdoc overview
 * @name myResumeApp
 * @description
 * # myResumeApp
 *
 * Main module of the application.
 */

var myResumeApp = angular.module('myResumeApp', ['ngRoute','ResumeControllers']); 
  
    myResumeApp.config(function ($routeProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl'
      })
      .when('/skill', {
        templateUrl: 'views/skill.html',
        controller: 'SkillCtrl'
      })
      .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
