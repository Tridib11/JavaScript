var users=[
    {name:"Tridib",age:21},
    {name:"Rohan",age:13}
];
function printAllUsers(users){
    for(let i=0;i<users.length;i++){
        const toLog=users[i].name+ " 's age is " +users[i].age;
        console.log(toLog);
    }
}
printAllUsers(users);