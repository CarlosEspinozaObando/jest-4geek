// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = amount => {
    let yen_value = 108.78;
    let convertion = amount * yen_value;

    return convertion;
}

const fromEuroToDollar = amount => {
    let oneDolarEquivalent = oneEuroIs.USD;
    let convertion = amount * oneDolarEquivalent;

    return convertion;
}

const fromYanToPound = amount => {
    let pound_value = 0.0065;
    let convertion = amount * pound_value;

    return convertion;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYanToPound };