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
var questions = {
        questionOne: {
            question: "first question",
            choices: ["first", "second", "third", "fourth"],
            answer: "first"
        },
        questionTwo: {
            question: "second question",
            choices: ["first2", "second2", "third2", "fourth2"],
            answer: "second2"
        },
        questionThree: {
            question: "third question",
            choices: ["first3", "second3", "third3", "fourth3"],
            answer: "third3"
        },    
    };

    var intervalId;
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
    
      //  The decrement function.
      function decrement() {
    
        //  Decrease number by one.
        timer--;

        $("#timer").html(timer);
      }    

// var choices = ["first", "second", "third", "fourth"];
        

$(document).ready(function() {
     //begin game
     $("#start").append(startButton);

     // load first question
     $("#start").on("click", function() {
         // var question = "first question"; 
         // var choices = ["first", "second", "third", "fourth"];
         // var answer = "first";
         // var guess = [];
 
     questionOne();
     
    //  questionTwo();    
   
     })

    // questionOne = function() {
    //     var question = "first question";
    //     var choices = ["first", "second", "third", "fourth"];
    //     var answer = "first";
    //     loadQuestion();
    //     choiceSelector();
    //     answerChecker();
    // }
    
    // load questionOne
    questionOne = function() {
        $("#start").empty();
        var answer = questions.questionOne.answer;
        var guess = "";
        $("#timer").html(timer);
        run();

        $("#question").html(questions.questionOne.question);

        $("#firstChoice").html(questions.questionOne.choices[0]);
        $("#secondChoice").html(questions.questionOne.choices[1]);
        $("#thirdChoice").html(questions.questionOne.choices[2]);
        $("#fourthChoice").html(questions.questionOne.choices[3]);

        $("#firstChoice").on("click", function() {
        
            guess = questions.questionOne.choices[0];
            answerChecker();   
        });
        $("#secondChoice").on("click", function() {
            
            guess = questions.questionOne.choices[1];
            answerChecker();   
        });
        $("#thirdChoice").on("click", function() {
            
            guess = questions.questionOne.choices[2];
            answerChecker();  
        });
        $("#fourthChoice").on("click", function() {
            
            guess = questions.questionOne.choices[3];
            answerChecker();  
        });

        answerChecker = function(){
        if (guess === answer){
            $("#timer").empty();
            $("#firstChoice").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Correct!");
            correctGuesses ++;
        } else {
            $("#timer").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Wrong!");
            $("#firstChoice").html("The correct answer is " + answer);
            incorrectGuesses ++;
        }
        // timer is not expiring at 0
        if (timer === 0){
            $("#timer").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Time's up!");
            $("#firstChoice").html("The correct answer is " + answer);
            unansweredQuestions ++; 
        }
        }
        
       
    }    

    //load questionTwo
    questionTwo = function() {
        $("#start").empty();
        var answer = questions.questionTwo.answer;
        var guess = "";
        $("#timer").append(timer);
        
     

        $("#question").html(questions.questionTwo.question);

        $("#firstChoice").html(questions.questionTwo.choices[0]);
        $("#secondChoice").html(questions.questionTwo.choices[1]);
        $("#thirdChoice").html(questions.questionTwo.choices[2]);
        $("#fourthChoice").html(questions.questionTwo.choices[3]);

        $("#firstChoice").on("click", function() {
        
            guess = questions.questionTwo.choices[0];
            answerChecker();   
        });
        $("#secondChoice").on("click", function() {
            
            guess = questions.questionTwo.choices[1];
            answerChecker();   
        });
        $("#thirdChoice").on("click", function() {
            
            guess = questions.questionTwo.choices[2];
            answerChecker();  
        });
        $("#fourthChoice").on("click", function() {
            
            guess = questions.questionTwo.choices[3];
            answerChecker();  
        });

        answerChecker = function(){
        if (guess === answer){
            $("#timer").empty();
            $("#firstChoice").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Correct!");
            correctGuesses ++;
        } else {
            $("#timer").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Wrong!");
            $("#firstChoice").html("The correct answer is " + answer);
            incorrectGuesses ++;
        }
    
        if (timer === 0){
            $("#timer").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Time's up!");
            $("#firstChoice").html("The correct answer is " + answer);
            unansweredQuestions ++; 
        }
        }
    } 
    // evaluate first question/answer
    // var answer = "first";
    // var guess = "";

    //answerChecker determines win/loss
    // answerChecker = function(){
    // if (guess === answer){
    //     $("#timer").empty();
    //     $("#firstChoice").empty();
    //     $("#secondChoice").empty();
    //     $("#thirdChoice").empty();
    //     $("#fourthChoice").empty();
    //     $("#question").html("Correct!");
    //     correctGuesses ++;
    // } else {
    //     $("#timer").empty();
    //     $("#secondChoice").empty();
    //     $("#thirdChoice").empty();
    //     $("#fourthChoice").empty();
    //     $("#question").html("Wrong!");
    //     $("#firstChoice").html("The correct answer is " + answer);
    //     incorrectGuesses ++;
    // }

    // if (timer === 0){
    //     $("#timer").empty();
    //     $("#secondChoice").empty();
    //     $("#thirdChoice").empty();
    //     $("#fourthChoice").empty();
    //     $("#question").html("Time's up!");
    //     $("#firstChoice").html("The correct answer is " + answer);
    //     unansweredQuestions ++; 
    // }
    // }
    // choiceSelector adds onclick to each choice and evaluates answer
    // choiceSelector = function () {
    // $("#firstChoice").on("click", function() {
        
    //     guess = choices[0];
    //     answerChecker();   
    // });
    // $("#secondChoice").on("click", function() {
        
    //     guess = choices[1];
    //     answerChecker();   
    // });
    // $("#thirdChoice").on("click", function() {
        
    //     guess = choices[2];
    //     answerChecker();  
    // });
    // $("#fourthChoice").on("click", function() {
        
    //     guess = choices[3];
    //     answerChecker();  
    // });
    // }
    

   

  
    
        
});    