
function computerPlay() {
  let playerOptions = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * playerOptions.length);
  return playerOptions[randomNumber];
} 

function playRound(playerSelection, computerSelection) {
   const roundResult = {
    roundResultMessage: "",
    roundWinner: "",
  };
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        roundResult.roundResultMessage = `No Winner! You both played ${playerSelection}`;
      } else if (computerSelection === "paper") {
        roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        roundResult.roundWinner = "computer";
      } else if (computerSelection === "scissors") {
        roundResult.roundResultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
        roundResult.roundWinner = "player";
      }
      break;
       case "paper":
      if (computerSelection === "rock") {
        roundResult.roundResultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
        roundResult.roundWinner = "player";
      } else if (computerSelection === "paper") {
        roundResult.roundResultMessage = `No Winner! You both played ${playerSelection}`;
      } else if (computerSelection === "scissors") {
        roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        roundResult.roundWinner = "computer";
      }
      break;
       case "scissors":
      if (computerSelection === "rock") {
        roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        roundResult.roundWinner = "computer";
      } else if (computerSelection === "paper") {
        roundResult.roundResultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
        roundResult.roundWinner = "player";
      } else if (computerSelection === "scissors") {
        roundResult.roundResultMessage = `No Winner! You both played ${playerSelection}`;
      }
      break;
    default:
      roundResult.roundResultMessage = "Please play a valid option!";
  }
  return roundResult;
} 
function game() {
  let playerScore = 0,
    computerScore = 0,
    gameResultMessage;
  for (let i = 0; i < 5; i++) {
    let userSelection = prompt(
      `|Round ${i + 1
      }| Enter your selection from the options: [rock, paper, scissors]`
    );
  
  if (formattedUserSelection != "rock" && formattedUserSelection != "paper" && formattedUserSelection != "scissors") {
    alert("Invalid input"), i--  

  } else {
    let { roundResultMessage, roundWinner } = playRound(
      formattedUserSelection,
      computerPlay()
    );
      console.log(`Round ${i + 1}: ${roundResultMessage}`);
    if (roundWinner === "player") { 
        playerScore += 1;
      } else if (roundWinner === "computer") {
        computerScore += 1;
      }
    }
  }
    
    

    if (playerScore === computerScore) {
      gameResultMessage = "The game was a tie";
    } else {
      gameResultMessage =
        playerScore > computerScore
          ? `Congratulations! You won the game! Player Score: ${playerScore} Computer Score: ${computerScore}`
          : `Sorry! You lost the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
    }
    console.log(`END OF GAME! ${gameResultMessage}`);
  }

