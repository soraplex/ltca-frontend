async function fetchCourses() {
  try {
    let response = await fetch("http://localhost:3000/courses");
    let courses = await response.json();
    let tableBody = document.querySelector("#coursesTableBody");

    for (const course of courses) {
      let row = tableBody.insertRow();

      let cell1 = row.insertCell();
      cell1.innerText = course.dept;

      let cell2 = row.insertCell();
      cell2.innerText = course.courseName;

      let cell3 = row.insertCell();
      cell3.innerText = course.courseNum;

      let detailAnchor = document.createElement("a");
      detailAnchor.href = `details.html?courseid=${course.id}`;
      detailAnchor.text = "See details";
      let cell4 = row.insertCell();
      cell4.appendChild(detailAnchor);

      let editAnchor = document.createElement("a");
      editAnchor.href = `edit.html?id=${course.id}`;
      editAnchor.text = "Edit";
      let editCell = row.insertCell();
      editCell.appendChild(editAnchor);

      let deleteAnchor = document.createElement("a");
      deleteAnchor.href = `delete.html?id=${course.id}`;
      deleteAnchor.text = "Delete";
      let deleteCell = row.insertCell();
      deleteCell.appendChild(deleteAnchor);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchCourses();
