import * as readline from 'readline';

const guessing = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Game {
    constructor(public name: string) {}

    play(): void {
        console.log(`Welcome to the ${this.name}!`);
    }
}

class GuessingGame extends Game {
    constructor() {
        super("Guessing Game");
    }

    play(): void {
        console.log(`Welcome to the ${this.name}!`);
        console.log("If you guess wrong, the computer keeps on guessing until you guess right.\n");

        const hardNumber = Math.floor(Math.random() * 100) + 3;
        let attempts = 0;

        function makeGuess() {
            guessing.question("Guess a number between 1 and 100: ", (answer) => {
                const userGuess = parseInt(answer);

                if (isNaN(userGuess)) {
                    console.log("Please enter a valid number.");
                    makeGuess();
                } else {
                    attempts++;

                    if (userGuess === hardNumber) {
                        console.log(`Congratulations! You guessed the correct number ${hardNumber} in ${attempts} attempts.`);
                        askToContinue();
                    } else if (userGuess < hardNumber) {
                        console.log("Too low! Try again.");
                        makeGuess();
                    } else {
                        console.log("Too high! Try again.");
                        makeGuess();
                    }
                }
            });
        }

        makeGuess();
    }
}

class CarRacingGame extends Game {
    constructor() {
        super("Car Racing Game");
    }

    play(): void {
        console.log(`Welcome to the ${this.name}!`);
        console.log("Predict which car would win each race.\n");

        const cars = ["Red Car", "Blue Car", "Green Car", "Yellow Car"];

        function startRace() {
            const winningCarIndex = Math.floor(Math.random() * cars.length);
            const winningCar = cars[winningCarIndex];
            
            guessing.question("Which car do you think will win? (Enter the car's number): ", (answer) => {
                const selectedCarIndex = parseInt(answer) - 1;

                if (isNaN(selectedCarIndex) || selectedCarIndex < 0 || selectedCarIndex >= cars.length) {
                    console.log("Invalid car number. Please try again.");
                    startRace();
                } else {
                    const selectedCar = cars[selectedCarIndex];
                    if (selectedCarIndex === winningCarIndex) {
                        console.log(`Congratulations! Your ${selectedCar} won the race.`);
                    } else {
                        console.log(`Sorry, your ${selectedCar} didn't win. The ${winningCar} won.`);
                    }
                    askToContinue();
                }
            });
        }

        startRace();
    }
}

function askToContinue() {
    guessing.question("Would you like to continue or quit? (c/q): ", (answer) => {
        if (answer.toLowerCase() === 'c') {
            displayMenu();
        } else if (answer.toLowerCase() === 'q') {
            console.log("Thank you for playing!");
            guessing.close();
        } else {
            console.log("Invalid choice. Please try again.");
            askToContinue();
        }
    });
}

function displayMenu() {
    console.log("Select a game to play:");
    console.log("1. Guessing Game");
    console.log("2. Car Racing Game");
    console.log("0. Exit");

    guessing.question("Enter your choice: ", (choice) => {
        if (choice === '1') {
            new GuessingGame().play();
        } else if (choice === '2') {
            new CarRacingGame().play();
        } else if (choice === '0') {
            console.log("Thank you for playing!");
            guessing.close();
        } else {
            console.log("Invalid choice. Please try again.");
            displayMenu();
        }
    });
}

function startGame() {
    guessing.question("Please enter your name: ", (answer) => {
        console.log(`Welcome, ${answer}!\n`);
        displayMenu();
    });
}

startGame(); 