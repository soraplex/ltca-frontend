window.onload = init;

function init() {
  const addBtn = document.getElementById("addBtn");
  const subBtn = document.getElementById("subBtn");
  const multBtn = document.getElementById("multBtn");
  const divBtn = document.getElementById("divBtn");

  addBtn.onclick = addClicked;
  subBtn.onclick = subClicked;
  multBtn.onclick = multClicked;
  divBtn.onclick = divClicked;
}

function addClicked() {
  const num1Field = document.getElementById("numberField1");
  const num2Field = document.getElementById("numberField2");
  const answerField = document.getElementById("answer");

  const num1 = Number(num1Field.value);
  const num2 = Number(num2Field.value);

  const result = num1 + num2;
  answerField.value = result;

}
function subClicked() {

    const num1Field = document.getElementById('numberField1');
    const num2Field = document.getElementById('numberField2');
    const answerField = document.getElementById('answer');
  
    const num1 = Number(num1Field.value);  
    const num2 = Number(num2Field.value);
  
    const result = num1 - num2;
    answerField.value = result;

  }
  
  function multClicked() {
  
    const num1Field = document.getElementById('numberField1');
    const num2Field = document.getElementById('numberField2');
    const answerField = document.getElementById('answer');
  
    const num1 = Number(num1Field.value);  
    const num2 = Number(num2Field.value);
   
    const result = num1 * num2;
    answerField.value = result;
  }

  function divClicked() {

    const num1Field = document.getElementById('numberField1');
    const num2Field = document.getElementById('numberField2');
    const answerField = document.getElementById('answer');
  
    const num1 = Number(num1Field.value);
    const num2 = Number(num2Field.value);
  
    if (num2 === 0) { 
      answerField.value = "Error: Cannot divide by zero!";
    } else {
      const result = num1 / num2; 
      answerField.value = result.toFixed(2);
    } 
  }