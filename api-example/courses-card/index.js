async function fetchCourses() {
  try {
    let response = await fetch("http://localhost:3000/courses");
    let courses = await response.json();
    let container = document.querySelector("#courseDisplayContainer");

    for (const course of courses) {
      let card = document.createElement("div");
      card.className = "card";

      let dept = document.createElement("p");
      dept.textContent = `Department: ${course.dept}`;
      card.appendChild(dept);

      let courseName = document.createElement("p");
      courseName.textContent = `Course Name: ${course.courseName}`;
      card.appendChild(courseName);

      let courseNum = document.createElement("p");
      courseNum.textContent = `Course Number: ${course.courseNum}`;
      card.appendChild(courseNum);

      let anchor = document.createElement("a");
      anchor.href = `details.html?courseid=${course.id}`;
      anchor.textContent = "See details";
      card.appendChild(anchor);

      container.appendChild(card);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchCourses();
