//Write your code here
const input = require('sync-input');

let currencies = {'USD': 1.0, 'JPY' : 113.5, 'EUR' : 0.89, 'RUB' : 74.36, 'GBP' : 0.75}

function Currency(country, value) {
    this.country = country;
    this.value = value;

    this.usdEquivalence = function() {
        console.log(`1 USD equals ${this.country} ${this.value}`);
    };

    this.usdConversion = function(quantity) {
        let result = (Number(quantity) * Number(this.value)).toFixed(4);
        console.log(`Result: ${quantity} USD equals ${result} ${this.country}`);
    };
}

console.log("Welcome to Currency Converter!");

for (let item in currencies){
    let x = new Currency(currencies[item], item);
    x.usdEquivalence();
}

console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
// console.log(`I can convert USD to these currencies: ${Object.keys(currencies).join(", ")}`)
console.log("Type the currency you wish to convert: USD")
// let baseCurrency = input("From: >").toUpperCase();
let targetCurrency = input("To: >").toUpperCase();
if (currencies[targetCurrency] === undefined){
    console.log("Unknown currency");
}
else {
    let amount = input("Amount: >");
    if (isNaN(amount)) {
        console.log("The amount has to be a number")
    } else {
        if (Number(amount) < 1) {
            console.log("The amount cannot be less than 1")
        } else {
            const tc = new Currency(targetCurrency, currencies[targetCurrency]);
            tc.usdConversion(amount);
        }
    }
}