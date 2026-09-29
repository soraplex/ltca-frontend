async function fetchDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  let id = -1;
  if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");

    try {
      const response = await fetch(`http://localhost:3000/courses/${id}`);
      const detail = await response.json();

      let container = document.querySelector("#courseDetailContainer");

      let card = document.createElement("div");
      card.className = "card";

      let courseId = document.createElement("p");
      courseId.textContent = `Course ID: ${detail.id}`;
      card.appendChild(courseId);

      let dept = document.createElement("p");
      dept.textContent = `Department: ${detail.dept}`;
      card.appendChild(dept);

      let courseName = document.createElement("p");
      courseName.textContent = `Course Name: ${detail.courseName}`;
      card.appendChild(courseName);

      let courseNum = document.createElement("p");
      courseNum.textContent = `Course Number: ${detail.courseNum}`;
      card.appendChild(courseNum);

      let instructor = document.createElement("p");
      instructor.textContent = `Instructor: ${detail.instructor}`;
      card.appendChild(instructor);

      let startDate = document.createElement("p");
      startDate.textContent = `Start Date: ${detail.startDate}`;
      card.appendChild(startDate);

      let courseLength = document.createElement("p");
      courseLength.textContent = `Course Length: ${detail.numDays} days`;
      card.appendChild(courseLength);

      let backButton = document.createElement("button");
      backButton.textContent = "Back";
      backButton.onclick = function () {
        window.location.href = "index.html";
      };
      card.appendChild(backButton);

      container.appendChild(card);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

fetchDetails();