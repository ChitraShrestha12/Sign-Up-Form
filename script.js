const selectForm = document.querySelector("form");
selectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userData = {};
  for (const [key, value] of formData) {
    userData[key] = value;
  }
  const firstName = document.querySelector("#fname");
  const lastName = document.querySelector("#lname");
  const password = document.querySelector("#password");
  const email = document.querySelector("#email");

  let isValid = true;
  if (!firstName.value) {
    showError(firstName);
    isValid = false;
  }
  if (!lastName.value) {
    showError(lastName);
    isValid = false;
  }
  if (!email.value) {
    showError(email);
    isValid = false;
  }else if(!validateEmail(email.value)){
    alert("Please enter a valid email (e.g., user@example.com)")
    isValid = false
  }
  if (!password.value) {
    showError(password);
    isValid = false;
  }
  if (isValid) {
    selectForm.reset();
    console.log("Form submitted:", userData);
  }
});

function showError(input) {
  input.classList.add("input-with-icon-error");
  const errorMsg = input.nextElementSibling;
  if (errorMsg) errorMsg.classList.add("error");

  input.addEventListener("input", function clearError() {
    input.classList.remove("input-with-icon-error");
    if (errorMsg) errorMsg.classList.remove("error");
    input.removeEventListener("input", clearError);
  });
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}