const questions = [

   { question:"How many dogs does IA Jamey have?",
    choices: [1,2,3,4],
    answer:1 
   },
   { question:"How many guitars does he have?",
    choices: [1,2,3,4],
    answer:3 
   },
   { question:"what is Jamey's favorite color",
    choices: ["grey", "yellow", "neon pink", "red"],
    answer: "grey"
   },
   { question:"What is the name of Jamey's favorite guitar?",
    choices: ["Martin", "Fender", "Yamaha", "Gibson"],
    answer:"Martin"
   } 
    
    
    
    ]

    // if (answer === choices[answer] ){

    //   // do stuff
    // }

   
   let currentQuestionIndex = 0;
    

    // const question1 = document.getElementById("question1")


    const question = document.getElementById("question");
    const answer = document.getElementById("answers");
    const feedback = document.getElementById("feedback");

    
    // initialize question
    question.innerHTML = questions[0];

    function askQuestion() {
        question[currentQuestionIndex].question
    }
    
    
    
