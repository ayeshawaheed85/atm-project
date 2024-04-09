#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const atm_js_1 = require("./atm.js");
const user_js_1 = require("./user.js");
const prompt = (0, prompt_sync_1.default)();
function startATM() {
    console.log("Welcome to the ATM!");
    const userId = prompt("Enter User ID: ");
    const pin = prompt("Enter PIN: ");
    const user = (0, user_js_1.authenticateUser)(userId, pin);
    if (user) {
        console.log(`Authentication successful. Welcome, ${userId}!`);
        showMenu(user);
    }
    else {
        console.log("Invalid user ID or PIN. Please try again.");
        startATM();
    }
}
function showMenu(user) {
    console.log(`
    Menu:
    1. Check Balance
    2. Withdraw
    3. Exit
    `);
    const choice = Number(prompt("Enter your choice: "));
    switch (choice) {
        case 1:
            console.log(`Your balance: $${(0, atm_js_1.checkBalance)(user)}`);
            break;
        case 2:
            const amount = Number(prompt("Enter amount to withdraw: "));
            console.log((0, atm_js_1.withdraw)(user, amount));
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
