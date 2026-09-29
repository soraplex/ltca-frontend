async function deleteCourseData(){
    try{
        let urlParams = new URLSearchParams(window.location.search);
        let courseId = urlParams.get("id")

        let response = await fetch(`http://localhost:3000/courses/${courseId}`, {
            method: "DELETE",
        });
        let data = await response.json();
        console.log("Course Deleted:", data);
    }catch(error) {
        console.error("Error deleting user:", error)
    } finally {
        window.location.href = 'index.html'
    }
}