#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.red(`----------------------------------------- WELCOME TO ADVENTURE GAME -----------------------------------------------`));
// 1. Creating class for player
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
// 2. Creating class for opponent
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// 3. Taking input for player name:
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name: ",
    },
]);
// 4.Input for opponent name:
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Select your opponent",
    choices: ["Skeleton", "Alien", "Zombie"],
});
// 5. Decalring variable to store player and oppoent name:
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
// 6. Inialize do while loop
do {
    // 7. Condition if opponent is Skeleton
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Drink Portion", "Run for your life.."],
        });
        // => Player select attack
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.green(`\n${p1.name} your fuel is ${p1.fuel}.`));
                console.log(chalk.gray(`\n${o1.name} fuel is ${o1.fuel}.\n`));
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright(`You loose. Better luck Next Time!`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.greenBright(`${p1.name} your fuel is ${p1.fuel}.`));
                console.log(chalk.gray(`${o1.name} fuel is ${o1.fuel}.`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellowBright(`\n \t \t \tCongratulation! ${p1.name} you win.`));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drink health Portion, now your fuel is ${p1.fuel}.`);
        }
        if (ask.opt === "Run for your life..") {
            console.log(chalk.redBright(`You loose. Better luck Next Time!`));
            process.exit();
        }
    }
    // 8. Condition If opponent is Alien:
    if (opponent.select === "Alien") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Drink Portion", "Run for your life.."],
        });
        // => Player select attack
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.green.bold(`\n${p1.name} your fuel is ${p1.fuel}.`));
                console.log(chalk.italic.gray(`\n${o1.name} fuel is ${o1.fuel}.`));
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright.italic(`You loose. Better luck Next Time!`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`\n${p1.name} your fuel is ${p1.fuel}.`));
                console.log(chalk.gray.italic(`\n${o1.name} fuel is ${o1.fuel}.`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellowBright.bold(`\n \t \t \tCongratulation! ${p1.name} you win.`));
                    process.exit();
                }
            }
        }
        //
        if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.blueBright(`You drink health Portion, now your fuel is ${p1.fuel}.`));
        }
        if (ask.opt === "Run for your life..") {
            console.log(chalk.redBright.italic("You loose. Better luck Next Time!"));
            process.exit();
        }
    }
    // 9.Condition If opponent is zombie
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Drink Portion", "Run for your life.."],
        });
        // => When player select attack:
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.greenBright.bold(`${p1.name} your fuel is ${p1.fuel}.`));
                console.log(chalk.gray(`${o1.name} fuel is ${o1.fuel}.`));
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright(`You loose. Better luck Next Time!`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} your fuel is ${p1.fuel}.`));
                console.log(chalk.italic.gray(`${o1.name} fuel is ${o1.fuel}.`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellowBright.bold(`\n \t \t \tCongratulation! ${p1.name} you win.`));
                    process.exit();
                }
            }
        }
        // => When player select drink portion:
        if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.greenBright(`\nYou drink health Portion, now your fuel is ${p1.fuel}.\n`));
        }
        //    => When player select run for life:
        if (ask.opt === "Run for your life..") {
            console.log(chalk.redBright(`\nYou loose. Better luck Next Time!\n`));
            process.exit();
        }
    }
} while (true);
