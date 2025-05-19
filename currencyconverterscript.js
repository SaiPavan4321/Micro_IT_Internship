    function convertCurrency() {
      const amount = parseFloat(document.getElementById('amount').value);
      const from = document.getElementById('fromCurrency').value;
      const to = document.getElementById('toCurrency').value;

      if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        return;
      }
      const mockRates = {
        "USD": 1,
        "EUR": 0.92,
        "GBP": 0.80,
        "JPY": 130.50,
        "INR": 83.00,
        "CAD": 1.35,
        "AUD": 1.50,
        "CHF": 0.91,
        "CNY": 7.10,
        "ZAR": 18.30
      };
      const result = ((amount / mockRates[from]) * mockRates[to]).toFixed(2);
      document.getElementById('result').innerText = 
        `${amount} ${from} = ${result} ${to}`;
    }