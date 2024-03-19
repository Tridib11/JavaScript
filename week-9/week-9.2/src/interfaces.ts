interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function isLegal(user: User) {
    return user.age > 18;
}

function greet(user: User) {
    console.log(user.firstName);
}

const user: User = {
    firstName: "Tridib",
    lastName: "Ghosh",
    age: 20
};

greet(user);
if (isLegal(user)) {
    console.log(user.age);
    
}