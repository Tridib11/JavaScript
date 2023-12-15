function solve(transactions){
    var spendEstimates={};
    for(let i=0;i<transactions.length;i++){
        var t=transactions[i];
        if(spendEstimates[t.category]){
            spendEstimates[t.category]=spendEstimates[t.category]+t.price;
        }
        else{
            spendEstimates[t.category]=t.price;
        }
    }   
    var keys=Object.keys(spendEstimates)
    let answer=[]
    for(let i=0;i<keys.length;i++){
        var category=keys[i]
        var obj={
            category:category,
            totalSpent:spendEstimates[category]
        }
        answer.push(obj)
    }
    console.log(answer);
}
const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];
solve(transactions);