(function () {
    'use strict';

    angular.module('app')
        .controller('AppCtrl', [ '$scope', '$rootScope', '$route', '$document', '$location', AppCtrl]);


    function AppCtrl($scope, $rootScope, $route, $document, $location) {

        var s = $scope,
            rs = $rootScope;

        var date = new Date();
        var year = date.getFullYear();

        $scope.main = {
            brand: 'MICROJOBS',
            name: 'Lisa',
            year: year
        };

        $scope.pageTransitionOpts = [
            {
                name: 'Fade up',
                "class": 'animate-fade-up'
            }, {
                name: 'Scale up',
                "class": 'ainmate-scale-up'
            }, {
                name: 'Slide in from right',
                "class": 'ainmate-slide-in-right'
            }, {
                name: 'Flip Y',
                "class": 'animate-flip-y'
            }
        ];

        $scope.admin = {
            layout: 'boxed',                                 // 'boxed', 'wide'
            menu: 'vertical',                               // 'horizontal', 'vertical', 'collapsed'
            fixedHeader: true,                              // true, false
            fixedSidebar: true,                             // true, false
            pageTransition: $scope.pageTransitionOpts[0],   // unlimited
            skin: '21'                                      // 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
        };

        $scope.$watch('admin', function(newVal, oldVal) {
            if (newVal.menu === 'horizontal' && oldVal.menu === 'vertical') {
                $rootScope.$broadcast('nav:reset');
            }
            if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
                if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
                    $scope.admin.fixedHeader = true;
                    $scope.admin.fixedSidebar = true;
                }
                if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
                    $scope.admin.fixedHeader = false;
                    $scope.admin.fixedSidebar = false;
                }
            }
            if (newVal.fixedSidebar === true) {
                $scope.admin.fixedHeader = true;
            }
            if (newVal.fixedHeader === false) {
                $scope.admin.fixedSidebar = false;
            }
        }, true);

        $scope.color = {
            primary: '#7992BF',
            success: '#A9DC8E',
            info: '#6BD5C3',
            infoAlt: '#A085E4',
            warning: '#ECD48B',
            danger: '#ED848F',
            gray: '#DCDCDC'
        };

        $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
            $document.scrollTo(0, 0);
        });

        $scope.goTo = function(href) {
            window.location = href;
        }
    }

})();
