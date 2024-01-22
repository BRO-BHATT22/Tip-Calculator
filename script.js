function calculateAndDisplay()
{
    //Get the input values from our HMTL forms
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value
    
    //Calculate tip, total bill, and amount per person using helper functions
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calculateAmtPerPers(totalBill, numOfPpl)


    //Display anthe results in the HTML document
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText

}





























/* let bill = 120 
let numberOfPeople = 5
let serviceQuality = 'Great'

function calculateTip(quality) {
    if(quality === 'Great'){
        return bill * .2
    } else if(quality === 'Good'){
        return bill * 0.15
    }else if(quality === 'Poor'){
        return bill * .10
    } else {
        //alert{'Please Select valid vale. Try again'}
    }
}

let tip = calculateTip(serviceQuality)

 function calculateTotalBill(bill, tip){
    return bill + tip

 }

 let totalBill = calculateTotalBill(bill, tip)

 function calcAmtPerPrs(totalBill, numberOfPeople){
    return totalBill/numberOfPeople

 }

let amtPerPers = calcAmtPerPrs(totalBill, numberOfPeople)


console.log ('Tip: $' + tip)
console.log('Total Bill: $' + totalBill)
console.log('Amount per person: $' + amtPerPers)
 */