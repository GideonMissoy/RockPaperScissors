//const getComputerChoice = (rpsChoices) => {
//same as :
function getComputerChoice(rpsChoices) {
	rpsChoices = ["Rock", "Paper", "Scissors"];
	let computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
	return computerChoice;
}

//const getResult = (playerChoice, computerChoice) => {
//arrow function same as:
function getResult(playerChoice, computerChoice) {
	let score;
	if (playerChoice === computerChoice) {
		score = 0;
	} else if (playerChoice === "Rock" && computerChoice === "Scissors") {
		score = 1;
	} else if (playerChoice === "Scirrors" && computerChoice === "Paper") {
		score = 1;
	}
	else if (playerChoice === "Paper" && computerChoice === "Rock") {
		score = 1;
	} else {
		score = -1;
	}
	return score;
}

//const showResult = (score, playerChoice, computerChoice) => {
//arrow function same as:
function showResult(score, playerChoice, computerChoice) {
	let result = document.getElementById("result");
	switch (score) {
		case -1:
			result.innerText = `You lose!`;
			break;
		case 0:
			result.innerText = `It's a draw.`;
			break;
		case 1:
			result.innerText = `You win`;
			break;
	}
	let playerScore = document.getElementById("player-score");
	playerScore.innerText = `${Number(playerScore.innerText) + score}`;
	let hands = document.getElementById("hands");
	hands.innerText = `👱${playerChoice} vs ${computerChoice}🖥️`;
}

//Calculating who won then displaying
function onClickRPS(playerChoice) {
	const computerChoice = getComputerChoice();
	const score = getResult(playerChoice.value, computerChoice);
	showResult(score, playerChoice.value, computerChoice);
	console.log(showResult);
}

function playGame() {
	let RPSButtons = document.querySelectorAll(".rpsButton");
	rpsButtons.forEach((rpsButton) => {
		rpsButton.onClick = () => onClickRPS(rpsButton);
	});

	const endGameButton = document.getElementById("endGameButton");
	endGameButton.onClick = () => endGame();
}

function endGame() {
	const playerScore = document.getElementById("player-score");
	const hands = document.getElementById("hands")
	const result = document.getElementById("result");
	playerScore.innerText = "";
	hands.innerText = "";
	result.innerText = "";
}

playGame();
