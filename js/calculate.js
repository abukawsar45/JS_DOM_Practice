// connect calculate button
document.getElementById('btn-calculate').addEventListener('click',function(){
    const  inputTotalIncome = inputData ('total-income');
    const foodCost = inputData ('food-cost');
    const rentCost = inputData ('rent-cost');
    const clothesCost = inputData ('clothes-cost');
    const totalCost = foodCost + rentCost + clothesCost;
    const restBalance = inputTotalIncome - totalCost;
    const totalCostDisplay = document.getElementById('total-expenses');
    totalCostDisplay.innerText = totalCost;
    const currentBalance = document.getElementById('current-balance');
    currentBalance.innerText = restBalance;
})
// connect save button
document.getElementById('btn-save').addEventListener('click', function(){
    const saveInputField =  inputData('input-save-value');
    const totalSaveWithHundred = saveInputField / 100;
    const totalBalance = balanceTextData ('current-balance');
    const totalSave = totalBalance * totalSaveWithHundred;
    const TotalSaveDisplayId = document.getElementById('total-save-display');
    TotalSaveDisplayId.innerText = totalSave;
    const payBill = totalBalance - totalSave;
    const remainingBalanceId = document.getElementById('remaing-balance');
    remainingBalanceId.innerText = payBill
})