// fetch("http://localhost:3000/courses")
//   .then((response) => response.json())
//   .then((courses) => {
//     let courseContainer = document.querySelector("#course-container");
//     courses.forEach((course) => {
//       let courseCard = document.createElement("div");
//       courseCard.className = "course-card";

//       let courseName = document.createElement("h2");
//       courseName.innerText = `${course.dept}`;
//       courseCard.appendChild(courseName);

//       let courseNumber = document.createElement("h3")
//       courseNumber.innerText =`${course.courseNum}`;
//       courseCard.appendChild(courseNumber)

//       let courseTitle = document.createElement("h4");
//       courseTitle.innerText = `${course.courseName}`;
//       courseCard.appendChild(courseTitle)

//       let detailLink = document.createElement("a");
//       detailLink.href = "#";
//       detailLink.innerText = "Detail";
//       detailLink.onclick = () => {
//         showCourseDetail(course);
//       };
//       courseCard.appendChild(detailLink);

//       courseContainer.appendChild(courseCard);
//     });
//   });

// function showCourseDetail(course) {
//   let modal = document.querySelector("#modal");
//   let instructorElement = document.querySelector("#instructor");
//   let startDateElement = document.querySelector("#startDate");
//   let numDaysElement = document.querySelector("#numDays");

//   instructorElement.innerText = `Instructor: ${course.instructor}`;
//   startDateElement.innerText = `Start Date: ${course.startDate}`;
//   numDaysElement.innerText = `Course Length: ${course.numDays} days`;

//   modal.style.display = "block";
// }

// document.addEventListener("click", (event) => {
//   if (
//     event.target === document.getElementById("modal") || event.target.className === "close") {
//     document.getElementById("modal").style.display = "none";
//   }
// });

async function fetchAndDisplayCourses() {
  try {
    let response = await fetch("http://localhost:3000/courses");
    let courses = await response.json();

    let courseContainer = document.querySelector("#course-container");
    courseContainer.innerHTML = "";

    for (let course of courses) {
      let courseCard = document.createElement("div");
      courseCard.className = "course-card";

      let courseName = document.createElement("h2");
      courseName.innerText = `${course.dept}`;
      courseCard.appendChild(courseName);

      let courseNumber = document.createElement("h3");
      courseNumber.innerText = `${course.courseNum}`;
      courseCard.appendChild(courseNumber);

      let courseTitle = document.createElement("h4");
      courseTitle.innerText = `${course.courseName}`;
      courseCard.appendChild(courseTitle);

      let detailLink = document.createElement("a");
      detailLink.href = "#";
      detailLink.innerText = "Detail";
      detailLink.onclick = () => {
        showCourseDetail(course);
      };
      courseCard.appendChild(detailLink);

      courseContainer.appendChild(courseCard);
    }
  } catch (error) {
    console.error(error);
  }
}

function showCourseDetail(course) {
  let modal = document.querySelector("#modal");
  let instructorElement = document.querySelector("#instructor");
  let startDateElement = document.querySelector("#startDate");
  let numDaysElement = document.querySelector("#numDays");

  instructorElement.innerText = `Instructor: ${course.instructor}`;
  startDateElement.innerText = `Start Date: ${course.startDate}`;
  numDaysElement.innerText = `Course Length: ${course.numDays} days`;

  modal.style.display = "block";
}

document.addEventListener("click", (event) => {
  if (
    event.target === document.getElementById("modal") ||
    event.target.className === "close"
  ) {
    document.getElementById("modal").style.display = "none";
  }
});

fetchAndDisplayCourses();