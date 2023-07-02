let celciusInput = document.querySelector('#celcius > Input')
let fahrenhiteInput = document.querySelector('#fahrenhite > Input')
let KelvinInput = document.querySelector('#Kelvin > Input')
let btn = document.querySelector('.button button')
function roundNumber(number){
    return Math.round(number*100)/100
}

// celcius to fahrenite and Kelvin

celciusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5))+32
    let kTemp = cTemp + 273.15

    fahrenhiteInput.value = roundNumber(fTemp)
    KelvinInput.value = roundNumber(kTemp)
})

// fahrenhite to celcius and kelvin 

fahrenhiteInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenhiteInput.value)
    let cTemp = (fTemp-32)*(5/9)
    let kTemp = (fTemp-32)*(5/9)+273.15

    celciusInput.value = roundNumber(cTemp)
    KelvinInput.value = roundNumber(kTemp)
})

// kelvin to celcius and fahrenhite 

KelvinInput.addEventListener('input',function(){
    let kTemp = parseFloat(KelvinInput.value)
    let cTemp = kTemp-273.15
    let fTemp = (kTemp-273.15)*(9/5)+32

    fahrenhiteInput = roundNumber(fTemp)
    celciusInput.value = roundNumber(cTemp)
})
btn.addEventListener('click',()=>{
    celciusInput.value = ""
    fahrenhiteInput.value = ""
    KelvinInput.value =  ""
})