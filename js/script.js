var MAX_TIP_RANGE = 10;
var MAX_SPLIT_RANGE = 10;
var CURRENCY = "€";
var PERSENT = "%";

var totalTipAmount;
var totalToPay;

function update() {

    updateSection1();
    updateSection2();
}
function updateSection1() {
    let billValue = Number(document.getElementById('billInput').value);
    let tipPersentValue = document.getElementById('tipRange').value * 100 / MAX_TIP_RANGE;

    totalTipAmount = billValue * tipPersentValue / 100;
    totalToPay = billValue + totalTipAmount;

    updateTipSelectedSpanWithValue(tipPersentValue);
    updateTipValueSpanWithFormatedValue(totalTipAmount);
    updateTotalValueSpanWithFormatedValue(totalToPay);
}

function updateSection2() {
    let splitValue = Number(document.getElementById("splitRange").value);
    document.getElementById("splitValue").innerHTML = splitValueText(splitValue);

    document.getElementById('tipEachSpan').innerHTML = calculateTipEach(totalTipAmount, splitValue);

    totalEach = totalToPay / splitValue;
    document.getElementById("totalEachSpan").innerHTML = formatMoney(totalEach);
}

function updateTipSelectedSpanWithValue(value) {
    let selectTipSpan = document.getElementById("tipSelected");
    selectTipSpan.innerHTML = value + PERSENT;
}

function updateTipValueSpanWithFormatedValue(value) {
    let selectTipSpan = document.getElementById("tipValue");
    selectTipSpan.innerHTML = formatMoney(value);
}

function updateTotalValueSpanWithFormatedValue(value) {
    let selectTipSpan = document.getElementById("totalValue");
    selectTipSpan.innerHTML = formatMoney(value);
}

function splitValueText(splitValue) {
    if (splitValue == 1) {
        return splitValue + " person";
    }
    return splitValue + " people";
}

function calculateTipEach(totalTipAmount, splitValue) {
    let tipEachValue = totalTipAmount / splitValue;
    return "(" + formatMoney(tipEachValue) + ")";
}

function formatMoney(value) {
    let ceiledValue = (Math.ceil(value*100)) / 100;
    value = ceiledValue.toFixed(2);
    return value + CURRENCY;
}

let mainContainer = document.getElementById('mainContainer');
mainContainer.addEventListener("input", update);