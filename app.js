let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs["USD"]
}
console.log (fromEuroToDollar(1))

const fromDollarToYen = (dollar) => {
    return dollar * (oneEuroIs["JPY"] / oneEuroIs["USD"]);
}
console.log (fromDollarToYen(1))

const fromYenToPound = (yen) => {
    return yen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
}
console.log (fromYenToPound(1))

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};