$(document).ready(function () {
    // Function to validate the form
    $("#studentForm").submit(function () {
        // Get input values
        var name = $("#name").val();
        var rollNo = $("#rollNo").val();
        var age = $("#age").val();
        var course = $("#course").val();
        var email = $("#email").val();

        // Regular expression for email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Reset any previous error messages
        $(".error").text("");

        // Validate name (non-empty)
        if (name === "") {
            $("#nameError").text("Name is required.");
            return false; // Prevent form submission
        }

        // Validate roll number (non-empty)
        if (rollNo === "") {
            $("#rollNoError").text("Roll No is required.");
            return false; // Prevent form submission
        }

        // Validate age (non-empty and numeric)
        if (age === "" || isNaN(age)) {
            $("#ageError").text("Age must be a numeric value.");
            return false; // Prevent form submission
        }

        // Validate course (non-empty)
        if (course === "") {
            $("#courseError").text("Course is required.");
            return false; // Prevent form submission
        }

        // Validate email (non-empty and valid format)
        if (email === "") {
            $("#emailError").text("Email is required.");
            return false; // Prevent form submission
        } else if (!emailRegex.test(email)) {
            $("#emailError").text("Enter a valid email address.");
            return false; // Prevent form submission
        }

        // If all validations pass, the form will submit normally
        return true;
    });
});
