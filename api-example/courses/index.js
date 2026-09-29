async function fetchCourses(){
  try {
    let response = await fetch('http://localhost:3000/courses')
    let studentClasses = await response.json();
    let tableBody = document.querySelector('#coursesTableBody')

    for (const studentClass of studentClasses){
      let row = tableBody.insertRow();

      let cell1 = row.insertCell()
      cell1.innerText = studentClass.dept

      let cell2 = row.insertCell()
      cell2.innerText = studentClass.courseName

      let cell3 = row.insertCell()
      cell3.innerText = studentClass.courseNum

      let anchor = document.createElement('a')
      anchor.href = `details.html?courseid=${studentClass.id}`
      anchor.text = "See details";
      let cell4 = row.insertCell()
      cell4.appendChild(anchor)

    }
  } catch (error) {
    console.error("Error:", error)
  }
}

fetchCourses()