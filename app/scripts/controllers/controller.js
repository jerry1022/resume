var myAppModule = angular.module('ResumeControllers', []);

myAppModule.controller('ResumeController', function($scope, $location) {

  var someText = {};
  someText.message = "Jerry's Resuem";
  $scope.someText = someText;

  var headerItems = [{itemName: "Profile"}, {itemName: "Education"}, {itemName: "Skill"}, {itemName: "Experience"}, {itemName: "Portfolio"}];
  $scope.headerItems =  headerItems;

  // this.msg =  "Jerry's msg";

  // var changeTitle =  function () {
  //   var msg = "Jerry's " + $location.path().split("/")[1];
  //     $scope.someText = someText;
  //   };

  // $scope.$watch("$location.path()", this.changeTitle);

});

myAppModule.controller('ExperienceCtrl', function ($scope) {
  var projects = [{icon : "IBM.png", title: "Advisory IT Specialist", content: "Cloud Infastructure (Sofltlayer and IBM CMS) planning and delivery Using Softlayer API implement internal utility and monitoring tools Cloud Computing infra implement Assisted HCMF and  AcBel moved their ERP to the softlayer Large Scale Architecture planning, provision and middleware setting Assisted CHB upgrade middle ware (MQ, WAS and DB2)"},
                  {icon : "promise.png", title: "RAID FW Engineer", content: "RAID Core firmware developement and degug  Promise VTrack – Promise VTrack is a Storage subsystem Responsibility: I was worked in Promise USA to support Firmware development since 2013/6~2013/9, I am in charge of the raid core development. Implement OfflineLD feature"},
                  {icon : "trendmicro.png", title: "Cloud Software Engineer", content: "http://hicloud.hinet.net/s3/products.html hicloud S3, Safesync S3 (hicloud  S3) Project – Safesync S3 project is the project which clone the amazon simple storage service, that provide the cloud storage service like aws s3."}];
  $scope.projects = projects;
  });

myAppModule.controller('SkillCtrl', function ($scope, $location) {
  var canvas = document.getElementById("barChart");
  var context =  canvas.getContext("2d");
  var drawBars = function(bars) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < bars; i ++) {
          var yOff = i * (canvas.height / bars);
          var w = Math.random() * canvas.width;
          var h = canvas.height / bars * 0.3;
          context.fillStyle = "#FF0000";
          context.fillRect(0, yOff, w, h);
          context.strokeRect(0, yOff, w, h);
        }
      };

  drawBars(10);

  var getPath =  function($location) {
    var url = $location.path();
    return url;
  };

  var url = $location.path().split('/')[1];
  $scope.url =  getPath($location);
  //$scope.url = getPath;


  });


// function ExperienceController($scope) {
//   var projects = [{icon : "IBM.png", title: "Advisory IT Specialist", content: "Cloud Infastructure (Sofltlayer and IBM CMS) planning and delivery"},
//                   {icon : "promise.png", title: "RAID FW Engineer", content: "RAID Core firmware developement and degug"},
//                   {icon : "trendmicro.png", title: "Cloud Software Engineer", content: "http://hicloud.hinet.net/s3/products.html hicloud S3"}];
//   $scope.projects = projects;
// }
