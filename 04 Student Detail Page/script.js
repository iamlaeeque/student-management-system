$(document).ready(function() {
    // Sample student data (you can replace this with your data)
    const studentData = {
        name: "John Doe",
        roll: "12345",
        age: "20",
        course: "Computer Science",
        email: "john@example.com"
    };

    // Display student data
    $("#student-name").text(studentData.name);
    $("#student-roll").text(studentData.roll);
    $("#student-age").text(studentData.age);
    $("#student-course").text(studentData.course);
    $("#student-email").text(studentData.email);

    // Edit button click handler
    $(".edit-button").click(function() {
        // Redirect to an edit page or implement an edit form here
        alert("Edit button clicked. Implement your edit functionality.");
    });

    // Delete button click handler
    $(".delete-button").click(function() {
        // Implement delete functionality here (e.g., show a confirmation dialog)
        if (confirm("Are you sure you want to delete this student?")) {
            // Perform the delete operation
            alert("Student deleted successfully.");
            // Redirect to the student list or do whatever is required after deletion.
        }
    });
});
