document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOut = getInputFieldValueById('cash-out-input');
   const pinNumber = getInputFieldValueById('cash-out-pin-input')

   if(isNaN(cashOut)){
    alert('Failed');
    return;
   }

   if(pinNumber === 2580){

    const balance = getTextFieldValueById('account-balance');
    if(cashOut > balance){
        alert('you do not have enough money to cash out')
        return;
    }
   
    const updateBalance = balance - cashOut;

    document.getElementById('account-balance').innerText = updateBalance;

  const div = document.createElement('div');
  div.classList.add('bg-purple-300');
  div.innerHTML = `
  <h4 class = "text-2xl font-bold"> Cash Out </h4>
   <p> ${cashOut} withdraw. New Balance ${updateBalance}</p>
  `

  document.getElementById('transaction-section').appendChild(div)
   }
   else{
    alert('Fuck of')
   }
})