'use strict'
// 1行目に記載している 'use strict' は削除しないでください

document.addEventListener("click", (event) => {
  let inputValue = "";
  switch (event.target.id) {
    case "syokuhi":
      inputValue = "食費";
      break;
    case "kotei":
      inputValue = "固定費";
      break;
    case "mizunetu":
      inputValue = "水道光熱費";
      break;
    case "nitiyouhinn":
      inputValue = "日用品費";
      break;
    case "gaisyoku":
      inputValue = "外食費";
      break;
    case "docter":
      inputValue = "医療費";
      break;
    case "kyouiku":
      inputValue = "教育費";
      break;
    case "special":
      inputValue = "特別費";
      break;
    case "cureka":
      inputValue = "クレジットカード";
      break;
  }

  if (inputValue !== "") {
    document.getElementById("description").value = inputValue;
    console.log(inputValue);
  }
});

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("transaction-form");
  const descriptionInput = document.getElementById("description");
  const amountInput = document.getElementById("amount");
  const transactionList = document.getElementById("transaction-list");
  const totalDisplay = document.getElementById("total");

  let total = 0;

  form.addEventListener("submit", (e) => {
    e.preventDefault();//サイトページのリロードを止める

    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);

    if (description === "") {
      alert("内容を入力！");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      alert("金額を入力！");
      return;
    }


    const listItem = document.createElement("li");
    listItem.textContent = `${description}: ${amount}円`;
    transactionList.appendChild(listItem);

    
    total += amount;
    totalDisplay.textContent = total;

    
    form.reset();
  });
});



