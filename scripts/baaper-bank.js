
function balanceUpdate(deposit){
    const balance = document.querySelector('.js-balance-value');
    let totalBalance = Number(balance.innerHTML);
    totalBalance += deposit;
    balance.innerHTML = `${totalBalance}`;
} 

function balanceAfterWithdraw(withdraw) {
    const balance = document.querySelector('.js-balance-value');
    let totalBalance = Number(balance.innerHTML);
    totalBalance -= withdraw;
    balance.innerHTML = `${totalBalance}`;
}

// console.log(totalBalance);
function addDeposit() {
    const inputDepositElement = document.querySelector('.js-deposit');
    const deposit = Number(inputDepositElement.value);
    console.log(deposit);
    const showDeposit = document.querySelector('.js-deposit-value');
    console.log(showDeposit.innerHTML);
    let exDeposit = Number(showDeposit.innerHTML) + deposit;
    showDeposit.innerHTML = `${exDeposit}`;
    balanceUpdate(deposit);
    inputDepositElement.value = '';

}

function withdrawMoney(){
    const inputWithdrawElement = document.querySelector('.js-withdraw');
    const withdraw = Number(inputWithdrawElement.value);
    // console.log(withdraw);
    const showWithdraw = document.querySelector('.js-withdraw-value');
    let exWithdraw = Number(showWithdraw.innerHTML) + withdraw;
    showWithdraw.innerHTML = `${exWithdraw}`;
    balanceAfterWithdraw(withdraw);
    inputWithdrawElement.value = '';
}