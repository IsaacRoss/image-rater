'use strict';

angular.module('imageraterApp')
  .directive('addTags', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "views/templates/add-tags.html",
        scope: {

        },
        controller: function($scope) {
            var tags = $scope.tags = [];

            $scope.selected = undefined;
            $scope.taglist = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        },
        link: function(scope, element, attrs, controller) {
            angular.element('.ir-taglist').on('click', function() {
                $(this).find('input').focus();
            });
            element.on('keydown', function(event) {
                if(isEnterKey(event.keyCode) && scope.selected !== "") {
                    scope.$apply(scope.addToList());
                }
                if(isDeleteKey(event.keyCode) && scope.selected === "") {
                    scope.$apply(scope.deleteFromList(scope.tags, scope.tags.length-1));
                }
            });

            scope.addToList = function(){
                var newTag = scope.selected;
                var oldTag;

                if(newTag){
                    angular.forEach(scope.tags, function(selected){
                        if(newTag.toLowerCase() === selected.toLowerCase()) {
                            alert("You have already added that tag");
                            oldTag = true;
                        }
                    });
                    if(!oldTag) {
                        scope.tags.push(scope.selected);
                    }
                    scope.selected = "";
                }                
            }

            scope.deleteFromList = function(array, index){
                array.splice(index, 1);
            }

            function isEnterKey(keycode) {
                return event.keyCode === 13;
            }
            function isDeleteKey(keycode) {
                return event.keyCode === 8;
            }
        }
    };
  });