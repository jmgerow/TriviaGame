
var startButton = "Start";
var timer = 20;
var correctGuesses = 0;
var incorrectGuesses = 0;
var unansweredQuestions = 0;
var answer = "";
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
            choices: ["Date Night", "The Arrival", "The Circle", "Fast and Furious"],
            answer: "Date Night"
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
    
          

$(document).ready(function() {
     //begin game
     $("#start").append(startButton);

     // load first question
     $("#start").on("click", function() {
     
        $("#timer").html(timer);
        var intervalId;
    
            function run() {
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
            };
     
    
            function decrement() {
               
                timer--;
                $("#timer").html(timer);
                if (timer === 0){       
                
                stop();
                $("#secondChoice").empty();
                $("#thirdChoice").empty();
                $("#fourthChoice").empty();
                $("#question").html("Time's up!");
                $("#firstChoice").html("The correct answer is " + answer);
                unansweredQuestions ++;
                questionProgress();
                console.log("counter timeup" + counter);
            };
            };
      
            function stop() {
                clearInterval(intervalId);  
            };    


    run(); 
    questionOne();
     
     })

    // load questionOne
    
    var questionOne = function() {
        $("#resetButton").empty();
        $("#start").empty();
        $(guess).empty();
        $(answer).empty();
        timer = 20;
        answer = questions[counter].answer;
        
      
       
    
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

        

        console.log("counter " + counter);
        console.log("guess " + guess); 
        // console.log(nextQuestion);
        console.log("correct " + correctGuesses);
        console.log("incorrect guesses " + incorrectGuesses);
        console.log(unansweredQuestions);
        console.log("answer " + answer);
       //need to fix progression to next question
        console.log("questions length " + questions.length); 
       
    };

    
    var answerChecker = function(){
        if (guess === answer){
            $("#timer").empty();
            $("#firstChoice").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Correct!");
            correctGuesses ++;
            questionProgress();
            console.log("counter correct" + counter);
    
        }; 
        // the second if statement to determine when an answer is incorrect is causing the counter
        // to double up and is breaking the game.  I am not sure why this is occuring since
        // this should only be called when the guess does not equal the correct answer.
        if (guess != answer) {
            $("#timer").empty();
            $("#secondChoice").empty();
            $("#thirdChoice").empty();
            $("#fourthChoice").empty();
            $("#question").html("Wrong!");
            $("#firstChoice").html("The correct answer is " + answer);
            incorrectGuesses ++;
            questionProgress(); 
            console.log("counter incorrect" + counter);
        };
         
        };
    
    
    var questionProgress = function (){
        if (counter < questions.length){
         counter ++;
         
         setTimeout(autoTransition, 1000 * 3);  
         console.log("questionProgress " + counter);
         function autoTransition() { 
         questionOne();
         }
        };
        
        if (counter >= questions.length){
         finalScore();
        };
     };
    
    var finalScore = function(){
        $("#timer").empty();
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
            answer = "";
            guess = "";
            counter = 0;    
            questionOne();   
        });
        
    }; 
    

});  

