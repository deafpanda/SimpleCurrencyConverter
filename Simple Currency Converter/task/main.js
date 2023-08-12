//Write your code here
let currencies = {'USD': 1.0,
    'JPY' : 113.5,
    'EUR' : 0.89,
    'RUB' : 74.36,
    'GBP' : 0.75
}

console.log("Welcome to Currency Converter!");
for (let item in currencies){
    console.log(`1 USD equals ${currencies[item]} ${item}`);
}