window.onload = function init() {
  const orderSubmit = document.getElementById("orderSubmit");
  const cupOption = document.getElementById("cupOption");
  const coneOption = document.getElementById("coneOption");

  hideToppings();

  cupOption.onclick = hideToppings;
  coneOption.onclick = hideToppings;

  orderSubmit.onclick = totalPayment;
};

function hideToppings() {
  const cupOption = document.getElementById("cupOption").checked;
  const toppingsCheckbox = document.getElementById("toppingsCheckbox");

  if (cupOption) {
    toppingsCheckbox.style.display = "block";
  } else {
    toppingsCheckbox.style.display = "none";
  }
}

function totalPayment() {
  const numberOfScoop = Number(document.getElementById("scoopAmount").value);

  const coneOption = document.getElementById("coneOption").checked;
  const cupOption = document.getElementById("cupOption").checked;

  const sprinkleBox = document.getElementById("sprinkleBox").checked;
  const whipcreamBox = document.getElementById("whipcreamBox").checked;
  const hotfudgeBox = document.getElementById("hotfudgeBox").checked;
  const cherryBox = document.getElementById("cherryBox").checked;

  const basePriceTotal = document.getElementById("basePriceTotal");
  const taxAppllied = document.getElementById("taxAppllied");
  const entireTotal = document.getElementById("entireTotal");

  let oneScoop = 2.25;

  if (numberOfScoop > 1) {
    oneScoop += 1.25 * (numberOfScoop - 1);
  }

  toppingsTotal = 0;
  if (cupOption) {
    if (sprinkleBox) {
      toppingsTotal += 0.5;
    }
    if (whipcreamBox) {
      toppingsTotal += 0.25;
    }
    if (hotfudgeBox) {
      toppingsTotal += 1.25;
    }
    if (cherryBox) {
      toppingsTotal += 0.25;
    }
  } else {
    toppingsTotal = 0;
  }

  let basePrice = oneScoop + toppingsTotal;
  basePriceTotal.innerText = basePrice;

  let taxAmount = basePrice * 0.08;

  taxAppllied.innerText = taxAmount;

  let totalDue = taxAmount + basePrice;

  entireTotal.innerText = totalDue;
}
