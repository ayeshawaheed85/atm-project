export interface User {
    id: string;
    pin: string;
    balance: number;
}

export function authenticateUser(id: string,
     pin: string): User | undefined {
    // Simulate user authentication 
    const users: User[] = [
        { id: "123", pin: "456", balance: 1000 },
        { id: "789", pin: "012", balance: 500 },
        // Add more users as needed
    ];

    return users.find(user => user.id === id && user.pin === pin);
}
