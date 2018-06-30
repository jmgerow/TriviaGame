
$(document).ready(function() {
var startButton = "Start";
var timer = 10;
var correctGuesses = 0;
var incorrectGuesses = 0;
var unansweredQuestions = 0;
var answerMaster = "";
var guess = "";
var counter = 0;      

var questions = [
         {
            question: "Which actor was in both 'Jurassic Park' and 'Thor Ragnarok'?",
            choices: ["Ryan Reynolds", "Chris Pratt", "Jeff Goldblum", "Heath Ledger"],
            answer: "Jeff Goldblum"
        },
         {
            question: "What car did Baby drive in the opening scene of 'Baby Driver'?",
            choices: ["Chevy Camaro", "Subaru WRX", "Dodge Charger", "Dodge Caravan"],
            answer: "Subaru WRX"
        },
         {
            question: "What movie did Jason Bateman and Rachel McAdams recently star in?",
            choices: ["Game Night", "The Arrival", "The Circle", "Fast and Furious"],
            answer: "Game Night"
        },
        {
            question: "Which actor has not played James Bond?",
            choices: ["Daniel Craig", "George Lazenby", "Roger Moore", "Harrison Ford"],
            answer: "Harrison Ford"
        },
        {
            question: "How fast does the Delorean need to move in order to initiate time travel in 'Back to the Future'?",
            choices: ["55mph", "77mph", "105mph", "88mph"],
            answer: "88mph"
        },
        {
            question: "What is the most confusing show ever made?",
            choices: ["Westworld", "Westworld", "Westworld", "Westworld"],
            answer: "Westworld"
        }
             
    ];
    
    var intervalId;
    
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    };


    var decrement = function(){
        timer--;
        $("#timer").html(timer);
        if (timer === 0){       
        
            stop();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Time's up!");
            $("#firstChoice").html("The correct answer is " + answerMaster);
            unansweredQuestions ++;
            counter ++;

            setTimeout(autoTransition, 1000 * 3);  
                console.log("questionProgress " + counter);

                function autoTransition() { 
                timer = 10;
                run();    
                questionOne();
            }
            // questionProgress();
            console.log("counter timeup" + counter);
        };
    }



    // function decrement() {
       
    //     timer--;
    //     $("#timer").html(timer);
       
    // if (timer > 0) {
    //     run();
    // };
    // };

    function stop() {
        clearInterval(intervalId); 
        $('#timer').empty(); 
        
    };   


     //begin game
     $("#start").append(startButton);

     // load first question and code timer
     $("#start").on("click", function() {
     
        $("#timer").html(timer);
         
            

    run(); 
    questionOne();
     
     })

    // var checkTimer = function () {
    //     if (timer === 0){

    //     }
    // }
     
    // variable to call questions based on var counter value
    
    var questionOne = function() {
        run();
        $("#resetButton").empty();
        $("#start").empty();
        $(guess).empty();
        $(answerMaster).empty();
        
        timer = 10;
        answerMaster = questions[counter].answer;
        
      
       
    
        $("#question").html(questions[counter].question);

        $("#firstChoice").html(questions[counter].choices[0]);
        $("#secondChoice").html(questions[counter].choices[1]);
        $("#thirdChoice").html(questions[counter].choices[2]);
        $("#fourthChoice").html(questions[counter].choices[3]);

        $("#firstChoice").on("click", function() {
        
            guess = questions[counter].choices[0];
            stop();
            answerChecker();   
        });
        $("#secondChoice").on("click", function() {
            
            guess = questions[counter].choices[1];
            stop();
            answerChecker();   
        });
        $("#thirdChoice").on("click", function() {
            
            guess = questions[counter].choices[2];
            stop();    
            answerChecker();  
        });
        $("#fourthChoice").on("click", function() {
            
            guess = questions[counter].choices[3];
            stop();
            answerChecker();  
        });

        

        console.log("counter " + counter);
        // console.log("guess " + guess); 
        // console.log(nextQuestion);
        console.log("correct " + correctGuesses);
        console.log("incorrect guesses " + incorrectGuesses);
        console.log(unansweredQuestions);
        console.log("answer " + answerMaster);
       //need to fix progression to next question
        console.log("questions length " + questions.length); 
       
    };

    //const answerChecker = function (guess, answerMaster) {
    // switch(guess===answerMaster): {
        //case true:

        //break;

        //default:

        //break;

    // }
    


    // answerChecker determines if user guess is correct or not and establishes next step
    // to do - if statement for incorrect answers is not currently working. see below
    var answerChecker = function(){
        if (guess === answerMaster){
            $("#timer").empty();
            $("#firstChoice").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Correct!");
            correctGuesses ++;
            counter ++;
            stop();
            setTimeout(autoTransition, 1000 * 3);  
         
            function autoTransition() { 
            timer = 10;    
            questionOne();
            }
            // questionProgress();
            console.log("counter correct" + counter);
    
        };
        // the second if statement to determine when an answer is incorrect is causing the counter
        // to double up and is breaking the game.  I am not sure why this is occuring since
        // this should only be called when the guess does not equal the correct answer.
        // this is currently commented out to allow game to run smoothly for correct guesses:

        //  else if (guess !== answerMaster) {
        //     $("#timer").empty();
        //     $("#secondChoice").empty();
        //     $("#thirdChoice").empty();
        //     $("#fourthChoice").empty();
        //     $("#question").html("Wrong!");
        //     $("#firstChoice").html("The correct answer is " + answerMaster);
        //     incorrectGuesses ++;
        //     counter ++;
        //     stop();
        //     setTimeout(autoTransition, 1000 * 3);  
         
        //     function autoTransition() { 
        //     timer = 5;    
        //     questionOne();
        //     }
        //     // questionProgress(); 
        //     console.log("counter incorrect" + counter);
        // };
        
        // runs finalScore once all questions are completed
        if (counter >= questions.length){
            finalScore();
           }; 
        };
    
       
    // var questionProgress = function (){
    //     if (counter < questions.length){
    //      counter ++;
         
        //  setTimeout(autoTransition, 1000 * 3);  
        //  console.log("questionProgress " + counter);
        //  function autoTransition() { 
        //  questionOne();
        //  }
        // };
        
        
    //  };
    
    //finalScore displays values for correct guesses, incorrect guesses, and unanswered questions
    var finalScore = function(){
        $("#timer").empty();
        stop();
        $("#question").empty();
        $("#firstChoice").html("Correct guesses: " + correctGuesses);
        $("#secondChoice").html("Incorrect guesses: " + incorrectGuesses);
        $("#thirdChoice").html("Unanswered questions: " + unansweredQuestions);
        $("#resetButton").html("Start Over?");
        $("#resetButton").on("click", function() {
            startButton = "Start";
            timer = 20;
            correctGuesses = 0;
            incorrectGuesses = 0;
            unansweredQuestions = 0;
            answerMaster = "";
            guess = "";
            counter = 0;    
            questionOne();   
        });
        
    }; 
    

});  

