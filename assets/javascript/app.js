// need to have page open with start button.  document.ready?
// need to enable on click for start button
// need to display first question with timer, question, and 4 possible answers. 
// need to show if answer was correct or not by writing to html
// need to automatically go to next question
// when all questions are completed, show score
// add reset button to score page to reset game

var startButton = "Start";
var timer = 90;
var firstQuestion = "first question";
var firstChoices = ["first", "second", "third", "fourth"];
var firstAnswer = [];
var firstGuess = [];


$(document).ready(function() {

    $("#start").append(startButton);

    $("#start").on("click", function() {

        $("#start").empty();
 

        $("#timer").append(timer);

        $("#question").append(firstQuestion);

        $("#firstChoice").append(firstChoices[0]);
        $("#secondChoice").append(firstChoices[1]);
        $("#thirdChoice").append(firstChoices[2]);
        $("#fourthChoice").append(firstChoices[3]);
    })

    
        


});    