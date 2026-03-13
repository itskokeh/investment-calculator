// DOM Elements
const initialAmountInput = document.getElementById('initialAmount') as HTMLInputElement;
const rateInput = document.getElementById('rate') as HTMLInputElement;
const daysInput = document.getElementById('days') as HTMLInputElement;
const calculateBtn = document.getElementById('calculateBtn') as HTMLButtonElement;
const futureValueSpan = document.getElementById('futureValue') as HTMLSpanElement;
const interestEarnedSpan = document.getElementById('interestEarned') as HTMLSpanElement;

// Investment calculation function
function calculateInvestment(
    principal: number,
    annualRate: number,
    months: number,
){
    const monthlyRate = (annualRate / 12)
    let balance = principal;

    for (let i = 0; i < months; i++) {
        const interest = balance * monthlyRate;
        balance += interest
    }
    
    balance = parseFloat(balance.toFixed(2))
    
    return {
        balance,
    };
}

// Event listener for calculate button
calculateBtn.addEventListener('click', () => {
    // Get input values
    const initialAmount = parseFloat(initialAmountInput.value);
    const annualRate = parseFloat(rateInput.value);
    const days = parseFloat(daysInput.value);
    
    // Validate inputs
    if (isNaN(initialAmount) || isNaN(annualRate) || isNaN(days)) {
        alert('Please enter valid numbers in all fields');
        return;
    }
    
    // Calculate and display results
    const result = calculateInvestment(initialAmount, annualRate, days);
    
    // futureValueSpan.textContent = `₦${result.futureValue.toLocaleString()}`;
    interestEarnedSpan.textContent = `₦${result.balance.toLocaleString()}`;
});