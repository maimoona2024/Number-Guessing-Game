#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to CLI Number Guessing Game.\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
async function main() {
    const answer = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Enter your Guessed Number (number limit from 1 to 5):",
        },
    ]);
    const userGuessedNumber = answer.userGuessedNumber;
    if (userGuessedNumber === randomNumber) {
        console.log("Congratulations! You guessed the Correct Number.");
    }
    else {
        console.log("Sorry, You guessed the wrong number.");
    }
}
main();
