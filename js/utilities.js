// input data catch function
function inputData (inputFieldId){
    const customerInput = document.getElementById(inputFieldId);
    const totalInputString = customerInput.value;
    const totalInputValue = parseFloat(totalInputString)
    customerInput.value = '';
    return totalInputValue;
}
// inneerText function
function balanceTextData (balanceTextId){
    const TextBalanceId =  document.getElementById(balanceTextId);
    const balanceTextString = TextBalanceId.innerText;
    const balanceTexttoNumber = parseFloat(balanceTextString);
    return balanceTexttoNumber
}