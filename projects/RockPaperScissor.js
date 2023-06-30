const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const messageDisplay = document.querySelector('#message');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const options = ['rock','paper', 'scissors'];

let playerScore = 0, computerScore = 0;

const randomChoice =  () => options[Math.floor(Math.random() * options.length)];
console.log(randomChoice());

const playRound = (playerSelection, computerSelection) =>{
    switch(playerSelection){
        case 'rock':
            switch(computerSelection){
                case 'rock':
                    messageDisplay.innerHTML ='Draw';
                    break;
                case 'paper' : 
                    messageDisplay.innerHTML = 'You lose! Paper beats rock';
                    computerScore++;
                    computerScoreDisplay.innerHTML = computerScore; 
                    break;
                case 'scissors':
                    messageDisplay.innerHTML = 'You won! Scissors beats paper';
                    playerScore++;
                    playerScoreDisplay.innerHTML = playerScore;
                    break;       
            }
            break;

        case 'paper':
            switch(computerSelection){
                case 'rock':
                    messageDisplay.innerHTML ='You won! Paper beats rock';
                    playerScore++;
                    playerScoreDisplay.innerHTML = playerScore;

                    break;
                case 'paper' : 
                    messageDisplay.innerHTML = 'Draw';
                    break;
                case 'scissors':
                    messageDisplay.innerHTML = 'You lose! Scissors beats paper';
                    computerScore++;
                    computerScoreDisplay.innerHTML = computerScore; 

                    break;      
            } 
            break;
            
        case 'scissors':
            switch(computerSelection){
                case 'rock':
                    messageDisplay.innerHTML ='You lose! Rock beats scissor';
                    computerScore++;
                    computerScoreDisplay.innerHTML = computerScore; 


                    break;
                case 'paper' : 
                    messageDisplay.innerHTML = 'You win! Scissors beats paper';
                    playerScore++;
                    playerScoreDisplay.innerHTML = playerScore;

                    break;
                case 'scissors':
                    messageDisplay.innerHTML = 'Draw';
                    break;      
            } 
            break;
        default:
            messageDisplay.innerHTML = 'Invalid Input';
            break;
    }
}

rock.addEventListener('click', ()=>playRound('rock', randomChoice()));
paper.addEventListener('click', ()=>playRound('paper', randomChoice()));
scissors.addEventListener('click',()=> playRound('scissors', randomChoice()));

