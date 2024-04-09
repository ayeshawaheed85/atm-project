"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
function authenticateUser(id, pin) {
    // Simulate user authentication 
    const users = [
        { id: "123", pin: "456", balance: 1000 },
        { id: "789", pin: "012", balance: 500 },
        // Add more users as needed
    ];
    return users.find(user => user.id === id && user.pin === pin);
}
exports.authenticateUser = authenticateUser;
