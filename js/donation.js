function getInputFieldValue(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

function getTextBalance(id) {
  const accountBalance = document.getElementById(id).innerText;
  const balanceNumber = parseFloat(accountBalance);
  return balanceNumber;
}

function SetNewAccountBalance(amount) {
  const amountNumber = parseFloat(amount);
  const accountBalance = document.getElementById("account-balance").innerText;
  const balanceNumber = parseFloat(accountBalance);

  if (
    amountNumber > accountBalance ||
    amountNumber <= 0 ||
    isNaN(amountNumber)
  ) {
    alert("Invalid  donation amount");
    return accountBalance;
  }
  const newBalance = balanceNumber - amountNumber;

  return newBalance;
}

function newCardBalance() {}

document
  .getElementById("donate-1st-card")
  .addEventListener("click", function () {
    const donationAmount = getInputFieldValue("1st-card-input");
    const cardBalance = getTextBalance("1st-card-balance");

    const accountBalance = getTextBalance("account-balance");

    if (
      donationAmount > accountBalance ||
      donationAmount <= 0 ||
      isNaN(donationAmount)
    ) {
      alert("invalid donation amount");
      return;
    }

    const newAccountBalance = SetNewAccountBalance(donationAmount);

    const newCardBalance = cardBalance + donationAmount;

    document.getElementById("1st-card-balance").innerText = newCardBalance;

    document.getElementById("account-balance").innerText = newAccountBalance;
  });

document
  .getElementById("donate-2nd-card")
  .addEventListener("click", function () {
    const donationAmount = getInputFieldValue("2nd-card-input");
    const cardBalance = getTextBalance("2nd-card-balance");

    const accountBalance = getTextBalance("account-balance");

    if (
      donationAmount > accountBalance ||
      donationAmount <= 0 ||
      isNaN(donationAmount)
    ) {
      alert("invalid donation amount");
      return;
    }

    const newCardBalance = cardBalance + donationAmount;

    const newAccountBalance = SetNewAccountBalance(donationAmount);

    document.getElementById("2nd-card-balance").innerText = newCardBalance;

    document.getElementById("account-balance").innerText = newAccountBalance;
  });

document
  .getElementById("donate-3rd-card")
  .addEventListener("click", function () {
    const donationAmount = getInputFieldValue("3rd-card-input");
    const cardBalance = getTextBalance("3rd-card-balance");

    const accountBalance = getTextBalance("account-balance");

    if (
      donationAmount > accountBalance ||
      donationAmount <= 0 ||
      isNaN(donationAmount)
    ) {
      alert("invalid donation amount");
      return;
    }

    const newCardBalance = cardBalance + donationAmount;

    const newAccountBalance = SetNewAccountBalance(donationAmount);

    document.getElementById("3rd-card-balance").innerText = newCardBalance;

    document.getElementById("account-balance").innerText = newAccountBalance;
  });
