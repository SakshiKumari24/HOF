
var items = {
    "item1": 10,
    "item2": 20,
    "item3": 30,
};
function convertToINR(priceUSD) {
    var exchangeRate = 80;
    return priceUSD * exchangeRate;
}
var pricesINR = Object.fromEntries(
    Object.entries(items).map(([item, priceUSD]) => [item, convertToINR(priceUSD)])
);
console.log("Prices in INR:", pricesINR);
