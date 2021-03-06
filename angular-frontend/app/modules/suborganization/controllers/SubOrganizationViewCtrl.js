"use strict";

var app = angular.module('ng-laravel');
app.controller('SubOrganizationViewCtrl',function($scope,SubOrganizationService,$stateParams,$translatePartialLoader,trans){

    /*
     * Show suborganization
     */
    SubOrganizationService.show($stateParams.id).then(function(suborganization) {
        $scope.suborganization = suborganization;
        $scope.isSaving = true;
    });

});

