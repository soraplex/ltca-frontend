async function editTableOfCourse() {
  let urlParams = new URLSearchParams(window.location.search);
  let courseId = urlParams.get("id");
  await fetchCourseData(courseId);
}

async function fetchCourseData(courseId) {
  try {
    let response = await fetch(`http://localhost:3000/courses/${courseId}`);
    let course = await response.json();
    document.querySelector("#department").value = course.dept;
    document.querySelector("#name").value = course.courseName;
    document.querySelector("#courseNumber").value = course.courseNum;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

async function editCourseData() {
  try {
    let urlParams = new URLSearchParams(window.location.search);
    let courseId = urlParams.get("id");

    let department = document.querySelector("#department").value;
    let name = document.querySelector("#name").value;
    let courseNumber = document.querySelector("#courseNumber").value;

    let courseData = {
      dept: department,
      courseName: name,
      courseNum: courseNumber,
    };

    let response = await fetch(`http://localhost:3000/courses/${courseId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });
    let data = await response.json();
    console.log("Course updated:", data);
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

editTableOfCourse();