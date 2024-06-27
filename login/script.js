const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Function to handle adding/removing class
const toggleClass = (element, className) => {
  element.classList.toggle(className);
  console.log(`Toggled class '${className}' on element with ID '${element.id}'`);
};

// Function to disable button
const disableButton = (button) => {
  button.disabled = true;
  console.log(`Button with ID '${button.id}' is disabled`);
};

// Function to debounce click events
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// Register button event
registerBtn.addEventListener("click", debounce(() => {
  toggleClass(container, "active");
  registerBtn.textContent = "Registered"; // Update button text
  disableButton(registerBtn);
}, 300));

// Login button event
loginBtn.addEventListener("click", debounce(() => {
  toggleClass(container, "active");
  loginBtn.textContent = "Logged In"; // Update button text
  disableButton(loginBtn);
}, 300));
