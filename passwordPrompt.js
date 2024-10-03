let correctPassword = "your_correct_password";
let password;

do {
  password = prompt("Enter your password:");

  if (password !== correctPassword) {
    alert("Incorrect password. Please try again.");
  }
} while (password !== correctPassword);

console.log("Access granted.");