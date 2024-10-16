console.log("Hello, World!");

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1){
        console.log("Rock");
    }
    else if (choice==2){
        console.log("Paper");
    }
    else console.log("Scissors");
}
for (let i=0; i<20;i++){
    getComputerChoice();
}
