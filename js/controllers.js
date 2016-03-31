'use strict';

angular.module('myApp',[])

 .controller('MenuController', ['$scope', function($scope) {

            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;

            $scope.dishes=[
                        {
                           name:'Hor d’ oeuvres (passed or plated)',
                           image: 'img/shrimp.jpg',
                           category: "one",
                           label:'Hot',
                           description:'Pulled Pork Potstickers- bbq dipping sauce (or) Grilled Shrimp Cocktail– lemon aioli and cocktail sauce–GF (or) Goat Cheese Risotto Balls- sherry dijon dipping sauce',
                           comment: ''
                        },
                        {
                           name:'Second Course',
                           image: 'img/soups.jpeg',
                           category: 'two',
                           label:'',
                          description:'Lobster Bisque– corn and red pepper relish (or) Tomato Basil Soup– basil creme fraiche–GF',
                           comment: ''
                        },
                        {
                           name:'Third Course',
                           image: 'img/salad.jpg',
                           category: 'three',
                           
                           
                           description:'Hearts of Romaine Salad– asiago cheese, creamy parmesan dressing and roasted garlic crustini–GF (or) Arugula Salad- roasted pears, red onion, goat cheese and honey vinaigrette–GF',
                           comment: ''
                        },
                        {
                           name:'Main Course',
                           image: 'img/crabcakes.jpg',
                           category: 'four',
                           label:'',
                           
                           description:'House-Made Potato Gnocchi – mushroom, tomato and asiago (or) Crab Cake– garlic sauteed baby spinach and creamed corn sauce–GF (or) Bruschetta crusted Salmon – grilled asparagus and balsamic vinegar reduction–GF (or) Roasted Chicken Breast- mashed potatoes and roasted garlic jus–GF (or) Grilled Rib Eye Steak– fingerling potato, shiitake mushrooms and rosemary jus–GF',
                           comment: ''
                        }];

   $scope.select = function(setTab) {
                $scope.tab = setTab;

                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };

            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])


 .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };

            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];

            $scope.channels = channels;
            $scope.invalidChannelSelection = false;

        }])

        .controller('FeedbackController', ['$scope', function($scope) {

            $scope.sendFeedback = function() {

                console.log($scope.feedback);

                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

    .controller('DishDetailController', ['$scope', function($scope) {

            var dish={
       
            name: 'Hor d’ oeuvres',
            image: 'img/shrimp.jpg',
            category: "one",
                           label:'Hot',
                           description:'Pulled Pork Potstickers- bbq dipping sauce (or) Grilled Shrimp Cocktail– lemon aioli and cocktail sauce–GF (or) Goat Cheese Risotto Balls- sherry dijon dipping sauce',
        
            comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }

                           ]
                    };

            $scope.dish = dish;

        }])

        .controller('DishCommentController', ['$scope', function($scope) {

            var newComment = function() {
              return {
                  rating:5,
                  comment:null,
                  author:null,
                  date:null
              };
            };
            
            //Step 1: Create a JavaScript object to hold the comment from the form
            $scope.comment = newComment();

            $scope.isValid = function() {
              return !($scope.comment.comment == null || $scope.comment.author == null);
            };

            $scope.submitComment = function () {

                //Step 2: This is how you record the date
                $scope.comment.date = new Date().toISOString();

                // Step 3: Push your comment into the dish's comment array
                $scope.dish.comments.push($scope.comment);

                //Step 4: reset your form to pristine
                $scope.commentForm.$setPristine();

                //Step 5: reset your JavaScript object that holds your comment
                $scope.comment = newComment();
            };
        }])

;
