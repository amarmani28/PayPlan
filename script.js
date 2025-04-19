function payPlan() {
    const loanAmountValue = parseFloat(document.getElementById("Loan-amount").value);
    const interestRateValue = parseFloat(document.getElementById("Interest-rate").value);
    const monthsToPayValue = parseFloat(document.getElementById("Months-to-pay").value);
  
    if (!loanAmountValue || !interestRateValue || !monthsToPayValue) {
      document.getElementById("payment").innerHTML;
      return;
    }
    if (monthsToPayValue === 0) {
      document.getElementById("payment").innerHTML = "Months to Pay cannot be zero.";
      return;
    }
    const interestPayment = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
    const monthlyPayment = (loanAmountValue / monthsToPayValue + interestPayment).toFixed(2);
  
    document.getElementById("payment").innerHTML = `Monthly Payment: ₹${monthlyPayment}`;
  }