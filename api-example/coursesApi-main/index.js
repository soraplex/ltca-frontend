async function fetchCourses(){
  try {
    let response = await fetch('http://localhost:3000/courses')
    let courses = await response.json();
    let tableBody = document.querySelector('#coursesTableBody')

    for (const course of courses){
      let row = tableBody.insertRow();

      let cell1 = row.insertCell()
      cell1.innerText = course.dept

      let cell2 = row.insertCell()
      cell2.innerText = course.courseName

      let cell3 = row.insertCell()
      cell3.innerText = course.courseNum

      let anchor = document.createElement('a')
      anchor.href = `details.html?courseid=${course.id}`
      anchor.text = "See details";
      let cell4 = row.insertCell()
      cell4.appendChild(anchor)

    }
  } catch (error) {
    console.error("Error:", error)
  }
}

fetchCourses()