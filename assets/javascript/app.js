// need to have page open with start button.  document.ready?
// need to enable on click for start button
// need to display first question with timer, question, and 4 possible answers. 
// need to show if answer was correct or not by writing to html
// need to automatically go to next question
// when all questions are completed, show score
// add reset button to score page to reset game

var startButton = "Start";
var timer = 20;
var correctGuesses = 0;
var incorrectGuesses = 0;
var unansweredQuestions = 0;
// var answer = [];
// var guess = [];
var questions = [
         {
            question: "first question",
            choices: ["first", "second", "third", "fourth"],
            answer: "first"
        },
         {
            question: "second question",
            choices: ["first2", "second2", "third2", "fourth2"],
            answer: "second2"
        },
         {
            question: "third question",
            choices: ["first3", "second3", "third3", "fourth3"],
            answer: "third3"
        },
        {
            question: "fourth question",
            choices: ["first3", "second3", "third3", "fourth3"],
            answer: "third3"
        },
        {
            question: "fifth question",
            choices: ["first3", "second3", "third3", "fourth3"],
            answer: "third3"
        },
        {
            question: "sixth question",
            choices: ["first3", "second3", "third3", "fourth3"],
            answer: "third3"
        },
        {
            question: "seventh question",
            choices: ["first3", "second3", "third3", "fourth3"],
            answer: "third3"
        },
        {
            question: "eighth question",
            choices: ["first3", "second3", "third3", "fourth3"],
            answer: "third3"
        }      
    ];

var nextQuestion = false;    
var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      };
    
      function decrement() {
    
        timer--;

        $("#timer").html(timer);
      } ;   

        

$(document).ready(function() {
     //begin game
     $("#start").append(startButton);

     // load first question
     $("#start").on("click", function() {
       
 
     questionOne();
     
     })

    var counter = 0;
    var finalScore= function(){
        $("#question").empty();
        $("#firstChoice").html("Correct guesses: " + correctGuesses);
        $("#secondChoice").html("Incorrect guesses: " + incorrectGuesses);
        $("#thirdChoice").html("Unanswered questions: " + unansweredQuestions);
        $("#fourthChoice").empty();
    } 
    
    // load questionOne
    
    var questionOne = function() {
        $("#start").empty();
        var answer = questions[counter].answer;
        var guess = "";
        $("#timer").html(timer);
        run();

        $("#question").html(questions[counter].question);

        $("#firstChoice").html(questions[counter].choices[0]);
        $("#secondChoice").html(questions[counter].choices[1]);
        $("#thirdChoice").html(questions[counter].choices[2]);
        $("#fourthChoice").html(questions[counter].choices[3]);

        $("#firstChoice").on("click", function() {
        
            guess = questions[counter].choices[0];
            answerChecker();   
        });
        $("#secondChoice").on("click", function() {
            
            guess = questions[counter].choices[1];
            answerChecker();   
        });
        $("#thirdChoice").on("click", function() {
            
            guess = questions[counter].choices[2];
            answerChecker();  
        });
        $("#fourthChoice").on("click", function() {
            
            guess = questions[counter].choices[3];
            answerChecker();  
        });

        var answerChecker = function(){
        if (guess === answer){
            $("#timer").empty();
            $("#firstChoice").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Correct!");
            correctGuesses ++;
            nextQuestion = true;
        } else {
            $("#timer").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Wrong!");
            $("#firstChoice").html("The correct answer is " + answer);
            incorrectGuesses ++;
            nextQuestion = true;
        }
        // timer is not expiring at 0 - need to fix
        if (timer === 0){
            $("#timer").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Time's up!");
            $("#firstChoice").html("The correct answer is " + answer);
            unansweredQuestions ++;
            nextQuestion = true; 
        };
        };
        console.log(counter);
        console.log(guess); 
        console.log(nextQuestion);
       //need to fix progression to next question 
       if (counter < questions.length){
        counter ++;
        setTimeout(fiveSeconds, 1000 * 5);   
        //insert 4 second delay here before recalling question
        function fiveSeconds() {
        questionOne();
        };
       } else{
        // finalScore();
       }


  
    };
       


});    