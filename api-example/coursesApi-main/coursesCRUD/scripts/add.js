async function addCourseData() {
  try {
    let dept = document.querySelector("#dept").value;
    let courseName = document.querySelector("#courseName").value;
    let courseNum = document.querySelector("#courseNum").value;

    let courseData = {
      dept: dept,
      courseName: courseName,
      courseNum: courseNum,
    };

    let response = await fetch("http://localhost:3000/courses/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });
    let data = await response.json();
    console.log("Courses Added:", data);
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error adding courses:", error);
  }
}