let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };

  const drawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#081b31";
  };

  const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lost!";

    }
  };

    const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
  };

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});