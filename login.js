// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     // Get form values
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     // Simple validation
//     var passwordPattern = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;

//     // Simple validation
//     if (username === "" || password === "") {
//       displayErrorMessage("Please fill in both fields.");
//     } else if (!passwordPattern.test(password)) {
//       displayErrorMessage(
//         "Password must be at least 8 characters, include one letter and one number."
//       );
//     } else {
//       displayErrorMessage("Login successful!", "success");
//     }
//   });
function validatePassword() {
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("passwordError");

  // Password validation rule
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long, contain a number, and an uppercase letter.");
      return false; // Prevent form submission
  } else {
      passwordError.style.display = "none";
      return true;
  }
}