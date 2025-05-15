// Greeting Function Based on Time of Day
window.onload = function () {
    let hours = new Date().getHours();
    let greeting = '';
    
    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting);
}

// Form Validation for Contact Form
function validateForm() {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    
    // Simple email validation using Regex
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }
    return true;
}
