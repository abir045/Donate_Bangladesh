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

function showSectionById(id) {
  // hide all the sections
  document.getElementById("donation-data").classList.add("hidden");
  document.getElementById("history").classList.add("hidden");

  //show the section with the provided id as parameter

  document.getElementById(id).classList.remove("hidden");
}

// active button change color

function changeColor(id) {
  document
    .getElementById("show-donation-data")
    .classList.remove("bg-[#B4F461]");

  document
    .getElementById("show-donation-history")
    .classList.remove("bg-[#B4F461]");

  document.getElementById(id).classList.add("bg-[#B4F461]");
}

// showing donation data
document
  .getElementById("show-donation-data")
  .addEventListener("click", function () {
    showSectionById("donation-data");
    changeColor("show-donation-data");
  });

// showing history data

document
  .getElementById("show-donation-history")
  .addEventListener("click", function () {
    showSectionById("history");
    changeColor("show-donation-history");
  });

//  Handling donation in the first card

document
  .getElementById("donate-1st-card")
  .addEventListener("click", function () {
    const donationAmount = getInputFieldValue("1st-card-input");
    const cardBalance = getTextBalance("1st-card-balance");

    const accountBalance = getTextBalance("account-balance");

    const modal = document.getElementById("my_modal_1");

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

    modal.showModal();
  });

// handling donation in the second card

document
  .getElementById("donate-2nd-card")
  .addEventListener("click", function () {
    const donationAmount = getInputFieldValue("2nd-card-input");
    const cardBalance = getTextBalance("2nd-card-balance");

    const accountBalance = getTextBalance("account-balance");

    const modal = document.getElementById("my_modal_2");

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

    modal.showModal();
  });

//handling donation in the 3rd card

document
  .getElementById("donate-3rd-card")
  .addEventListener("click", function () {
    const donationAmount = getInputFieldValue("3rd-card-input");
    const cardBalance = getTextBalance("3rd-card-balance");

    const accountBalance = getTextBalance("account-balance");

    const modal = document.getElementById("my_modal_3");

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

    modal.showModal();
  });
