"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdraw = exports.checkBalance = void 0;
function checkBalance(user) {
    return user.balance;
}
exports.checkBalance = checkBalance;
function withdraw(user, amount) {
    if (amount <= user.balance) {
        user.balance -= amount;
        return `Withdrawn $${amount}. Remaining balance: $${user.balance}`;
    }
    else {
        return "Insufficient balance.";
    }
}
exports.withdraw = withdraw;
