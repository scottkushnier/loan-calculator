window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      // console.log('event fired')
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 1000;
  document.getElementById("loan-years").value = 1;
  document.getElementById("loan-rate").value = 0.10;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  payment_string = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(payment_string);
}

function formatWithTwoDecimals(number) {
  s = Math.round(number*100)/100 + "";
  if (s.indexOf('.') == -1) {                  // handle "92" --> "92.00"
    s += ".00";
  } else if (s.indexOf(".") == (s.length - 2)) {      // handle "92.4" --> "92.40"
    s += "0";
  }
  return(s);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthly_rate = values.rate / 12.0;
  let payment = values.amount * (monthly_rate) / (1.0 - (1 / (1.0 + monthly_rate) ** (values.years * 12)));
  let payment_string = formatWithTwoDecimals(payment);
  return(payment_string);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  payment_span = document.querySelector('#monthly-payment');
  // console.log(payment_span);
  payment_span.innerText = monthly;
}
