async function fetchDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  let id = -1;
  if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");

    try {
      const response = await fetch(`http://localhost:3000/courses/${id}`);
      const detail = await response.json();

      let tableBody = document.querySelector("#courseDetailBody");

      let row = tableBody.insertRow();

      let cell = row.insertCell();
      cell.innerText = detail.id;

      let cell1 = row.insertCell();
      cell1.innerText = detail.dept;

      let cell2 = row.insertCell();
      cell2.innerText = detail.courseName;

      let cell3 = row.insertCell();
      cell3.innerText = detail.courseNum;

      let cell4 = row.insertCell();
      cell4.innerText = detail.instructor;

      let cell5 = row.insertCell();
      cell5.innerText = detail.startDate;

      let cell6 = row.insertCell();
      cell6.innerText = `${detail.numDays} days`;

      // Add a new row for the back button
      let backButtonRow = tableBody.insertRow();
      let backButtonCell = backButtonRow.insertCell();
      backButtonCell.colSpan = 7; // Make the cell span all columns

      let backButton = document.createElement("button");
      backButton.textContent = "Back";
      backButton.onclick = function () {
        window.location.href = "index.html";
      };
      backButtonCell.appendChild(backButton);
    
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

fetchDetails();