/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const indexF = 3.281
const indexG = 0.264
const indexP = 2.204
let inputNumber = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")
let ulF = document.getElementById("ul-F")
let ulG = document.getElementById("ul-G")
let ulP = document.getElementById("ul-P")

convertBtn.addEventListener("click", function convert(){
    let listResultF = ""
    let listResultG = ""
    let listResultP = ""
    
    let resultF = inputNumber.value * indexF
    let resultG = inputNumber.value * indexG
    let resultP = inputNumber.value * indexP
    let resultM = inputNumber.value / indexF
    let resultL = inputNumber.value / indexG
    let resultK = inputNumber.value / indexP
    
    listResultF = `<p>${inputNumber.value} meters =  ${resultF.toFixed(3)} feet | ${inputNumber.value} feet =  ${resultM.toFixed(3)} meters</p>`
    ulF.innerHTML = listResultF
    
    listResultG = `<p>${inputNumber.value} liters = ${resultG.toFixed(3)} gallons | ${inputNumber.value} gallons = ${resultL.toFixed(3)} liters</p>`
    ulG.innerHTML = listResultG
    
    listResultP = `<p>${inputNumber.value} kilograms = ${resultP.toFixed(3)} pounds | ${inputNumber.value} pounds = ${resultK.toFixed(3)} kilograms</p>`
    ulP.innerHTML = listResultP
})