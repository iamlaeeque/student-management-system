// Sample student data (replace with your actual data)
const students = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
];

// Function to display the list of students
function displayStudents(studentData) {
    const studentList = $("#studentList");
    studentList.empty(); // Clear the existing list

    studentData.forEach(student => {
        const listItem = $("<li>");
        listItem.text(student.name);
        studentList.append(listItem);
    });
}

// Function to filter students based on user input
function filterStudents(searchText) {
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchText.toLowerCase())
    );
    displayStudents(filteredStudents);
}

// Initial display of all students
$(document).ready(function () {
    displayStudents(students);

    // Handle user input for search
    $("#searchInput").on("input", function () {
        const searchText = $(this).val();
        filterStudents(searchText);
    });
});
