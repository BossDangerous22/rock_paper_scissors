let wins = 0;
let ties = 0;
let losses = 0;

const rounds = parseInt(prompt("How many rounds do you want to play?"));

for (let i = 0; i < rounds; i++) {
    const userChoice = prompt("Enter 'r' for Rock, 'p' for Paper, or 's' for Scissors:");
    const computerChoice = Math.floor(Math.random() * 3); // Generates random number between 0 and 2

    let result;

    switch (userChoice) {
        case 'r':
            if (computerChoice === 0) {
                result = "It's a tie!";
                ties++;
            } else if (computerChoice === 1) {
                result = "You lose! Paper beats Rock.";
                losses++;
            } else {
                result = "You win! Rock beats Scissors.";
                wins++;
            }
            break;
        case 'p':
            if (computerChoice === 0) {
                result = "You win! Paper beats Rock.";
                wins++;
            } else if (computerChoice === 1) {
                result = "It's a tie!";
                ties++;
            } else {
                result = "You lose! Scissors beats Paper.";
                losses++;
            }
            break;
        case 's':
            if (computerChoice === 0) {
                result = "You lose! Rock beats Scissors.";
                losses++;
            } else if (computerChoice === 1) {
                result = "You win! Scissors beats Paper.";
                wins++;
            } else {
                result = "It's a tie!";
                ties++;
            }
            break;
        default:
            alert("Invalid choice. Please enter 'r', 'p', or 's'.");
            i--; // Decrement i to repeat the current round
            continue; // Skip the rest of the loop iteration
    }

    alert(result);
}

// Alert the final results after all rounds are completed
alert(`Wins: ${wins}\nTies: ${ties}\nLosses: ${losses}`);
