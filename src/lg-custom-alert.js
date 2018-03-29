 /**
  * Give <button lg-alert = '[scope function to be called after success]' > </button>
  * Attribute lg-message= message to be shown on alert modal - mandatory
  * Attribute lg-size= size of the modal sm,lg,md,xs not-mandatory
  * Attribute lg-type= delete or confirm mandatory
  * informative alert lg-type = ok
  * All other things, this directive will take care
  * ------ steps processing ---------------
  * show alert
  * on success calls the scope function
  * */

angular.module('lg.customAlert', [])

    .directive('lgAlert',['$log', '$uibModal', function ($log, $uibModal) {

        return {
            restrict: 'EA',                                                     // only for element and attributes
            scope: {
                lgAlert     : '&',
                lgSize      : '@',
                lgMessage   : '@',
                lgType      : '@'
            },
            link: function (scope, element, attr) {
                if(!scope.lgAlert){
                    $log.error('Function to be called in $scope is missing');
                    throw "Function to be called in $scope is missing";
                    return false;
                }
                if(!scope.lgMessage){
                    $log.error('Missing message');
                    throw "Missing message to be displayed";
                    return false;
                }
                // binding the click for the event
                element.bind('click', function() {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        size: (scope.lgSize) ? scope.lgSize : 'sm',
                        templateUrl: "lg-custom-alert/alertModal.html",
                        controller: ['$scope', '$sce', function ($scope, $sce) {
                            $scope.modal_message = $sce.trustAsHtml(scope.lgMessage);
                            $scope.type = scope.lgType;
                            $scope.btn_type = {
                                'delete'    : 'danger',
                                'confirm'   : 'primary',
                                'proceed'   : 'primary',
                                'ok'        : 'primary'
                            }[scope.lgType];
                            $scope.show_cancel = (scope.lgType === 'ok') ? false : true;
                            $scope.call_fun = function () {
                                modalInstance.close();
                                scope.lgAlert();
                            };
                            $scope.close_modal = function () {
                                modalInstance.close();
                            };
                        }]
                    });
                });
            }
        }

    }]);
