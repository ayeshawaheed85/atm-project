#!/usr/bin/env node
import promptSync from 'prompt-sync';

import { checkBalance, withdraw } from './atm.js';
import { authenticateUser, User } from './user.js';

const prompt = promptSync();

function startATM() {
    console.log("Welcome to the ATM!");
    const userId = prompt("Enter User ID: ");
    const pin = prompt("Enter PIN: ");

    const user = authenticateUser(userId, pin);

    if (user) {
        console.log(`Authentication successful. Welcome, ${userId}!`);
        showMenu(user);
    } else {
        console.log("Invalid user ID or PIN. Please try again.");
        startATM();
    }
}

function showMenu(user : User) {
    console.log(`
    Menu:
    1. Check Balance
    2. Withdraw
    3. Exit
    `);

    const choice = Number(prompt("Enter your choice: "));

    switch (choice) {
        case 1:
            console.log(`Your balance: $${checkBalance(user)}`);
            break;
        case 2:
            const amount = Number(prompt("Enter amount to withdraw: "));
            console.log(withdraw(user, amount));
            break;
        case 3:
            console.log("Exiting ATM. Thank you!");
            break;
        default:
            console.log("Invalid choice. Please try again.");
            showMenu(user);
            break;
    }
}

startATM();
