(function(){
  var app = angular.module('quoteApp',[]);
    
    
    app.controller('quote', ['$scope', '$http', function($scope, $http){
         var ctrl = this;
         ctrl.quotes = ["The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
"I have realized that the past and future are real illusions, that they exist in the present, which is what there is and all there is.",
"Trying to define yourself is like trying to bite your own teeth.",
"No valid plans for the future can be made by those who have no capacity for living now.",
"Never pretend to a love which you do not actually feel, for love is not ours to command.",
"Zen does not confuse spirituality with thinking about God while one is peeling potatoes. Zen spirituality is just to peel the potatoes.",
"You and I are all as much continuous with the physical universe as a wave is continuous with the ocean.",
"But I'll tell you what hermits realize. If you go off into a far, far forest and get very quiet, you'll come to understand that you're connected with everything.",
"I owe my solitude to other people.",
"But my dear man, reality is only a Rorschach ink-blot, you know."];
        ctrl.getQuote = function() {
            ctrl.quote = ctrl.quotes[Math.floor(Math.random()*ctrl.quotes.length)];
        };
        ctrl.getQuote();
    }]);
    
})();