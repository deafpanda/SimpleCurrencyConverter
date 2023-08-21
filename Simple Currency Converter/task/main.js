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

    this.baseConversion = function(base, quantity) {
        let baseCurrency = currencies[base];
        let result = (Number(quantity) * Number(this.value)/Number(baseCurrency)).toFixed(4);
        console.log(`Result: ${quantity} ${base} equals ${result} ${this.country}`);
    };
}

function getCurrencyName(prompt) {
    let name = input(`${prompt}: >`).toUpperCase();
    if (currencies[name] === undefined) {
        console.log("Unknown currency");
        return false;
    } else {
        return name;
    }
}

console.log("Welcome to Currency Converter!");
for (let item in currencies){
    let x = new Currency(currencies[item], item);
    x.usdEquivalence();
}

console.log("What do you want to convert?")
let baseCurrency = getCurrencyName('From');
if (baseCurrency) {
    let targetCurrency = getCurrencyName('To');
    if (targetCurrency) {
        let amount = input("Amount: >");
        if (isNaN(amount)) {
            console.log("The amount has to be a number")
        } else {
            if (Number(amount) < 1) {
                console.log("The amount cannot be less than 1")
            } else {
                const tc = new Currency(targetCurrency, currencies[targetCurrency]);
                // tc.usdConversion(amount);
                tc.baseConversion(baseCurrency, amount)
            }
        }
    }
}