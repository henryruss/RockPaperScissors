console.log("Hello, World!");

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1){
        console.log("rock");
        return "rock";
    }
    else if (choice==2){
        console.log("paper");
        return "paper";
    }
    else console.log("scissors");
    return "scissors";
}
    

    function getHumanChoice(){
        let choice = prompt("Rock, Paper, or Scissors?", "Rock, Paper, or Scissors?").toLowerCase();
        if ((choice === "rock")||(choice==="paper")||(choice==="scissors")){
        console.log(choice);}
        else console.error("Error: Invalid choice. Please enter either Rock, Paper, or Scissors.");
        return choice;
    }
    

    let humanScore = 0;
    let computerScore = 0;

    function playRound(huChoice, coChoice){
        if (huChoice === coChoice){
            console.log(huChoice+" "+coChoice+" "+"Tie!")
        }
        else if (huChoice === "rock"){
            if (coChoice === "scissors"){
                ++humanScore;
                console.log("You win! "+huChoice+" beats "+coChoice+". Player: "+ humanScore+" Computer"+computerScore);
            }
            else {++computerScore
            console.log("You lose! "+coChoice+" beats "+huChoice+". Player: "+ humanScore+" Computer"+computerScore);
            }
        }
        else if (huChoice === "paper"){
            if (coChoice === "rock"){
                ++humanScore;
                console.log("You win! "+huChoice+" beats "+coChoice+". Player: "+ humanScore+" Computer"+computerScore);
            }
            else {++computerScore
                console.log("You lose! "+coChoice+" beats "+huChoice+". Player: "+ humanScore+" Computer"+computerScore);
            }
        }
        else {
            if (coChoice === "paper"){
                ++humanScore;
                console.log("You win! "+huChoice+" beats "+coChoice+". Player: "+ humanScore+" Computer"+computerScore);
            }
            else {++computerScore
                console.log("You lose! "+coChoice+" beats "+huChoice+". Player: "+ humanScore+" Computer"+computerScore);
            }
        }
    }
        

        function playGame(){
        for (let i =0; i<5;i++){
            let humanSelection=getHumanChoice();
            let computerSelection=getComputerChoice();
            playRound(humanSelection,computerSelection);
        }
        if (humanScore==computerScore){
            console.log("Still on the same level... for now.")
        }
        else if (humanScore>computerScore){
            console.log("You win! Maybe there is hope for us!")
        }
        else console.log("The takeover is inevitble.")
        }
        playGame();
    
