function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1){
        return "rock";
    }
    else if (choice==2){
        return "paper";
    }
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
        // playGame();

        const buttons = document.querySelectorAll("button");
        buttons.forEach((button)=>{
            button.addEventListener('click', () =>{
                huChoice = button.textContent.toLowerCase();
                coChoice = getComputerChoice();
                playRound(huChoice, coChoice);
                scoUpdate();
                // getComputerChoice();
                // console.log("You clicked "+ button.textContent);
            })
        })
        const container = document.querySelector("#score");
        const picks = document.createElement("div");
        const score = document.createElement("div");
        function scoUpdate(){
            if (computerScore == 5 || humanScore == 5) {
                container.innerHTML = "";  // Remove all previous content
                if (computerScore == 5) {
                    container.textContent = "Game over! Computer wins.";
                } else if (humanScore == 5) {
                    container.textContent = "Game over! You win!";
                }
            }
            else{
        picks.textContent = "You picked "+huChoice+", and Computer picked "+coChoice+".";
        score.textContent = "Human: "+humanScore+" Computer: "+computerScore;
        container.append(picks, score);
        }
    }
    
