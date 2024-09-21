
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('add-money-input');
    const inputPin = getInputFieldValueById('pin-input');
  
    if(isNaN(addMoney)){
        alert('Failed');
        return;
       }

    if(inputPin === 2580){

        const balance = getTextFieldValueById('account-balance')
        const updateBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = updateBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText =  ` Added: ${addMoney} Tk. New Balance: ${updateBalance} `;
        console.log(p);

        document.getElementById('transaction-section').appendChild(p);

    }
    else{
        alert('Failed! Try Again later')
    }
})