import { User } from "./user";

export function checkBalance(user: User): number {
    return user.balance;
}

export function withdraw(user: User, amount: number): string {
    if (amount <= user.balance) {
        user.balance -= amount;
        return `Withdrawn $${amount}. Remaining balance: $${user.balance}`;
    } else {
        return "Insufficient balance.";
    }
}
