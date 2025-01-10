const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");

nameInput.focus();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const first_name = nameInput.value;
  const last_name = lastnameInput.value;
  const email = emailInput.value;

  if (!first_name || !email) {
    const msg = "First name and email are required";
    showMessage(msg, "red");
    resetFields();
    return;
  }

  try {
    const response = await axios.post("http://localhost:5000/api/users/", {
      first_name,
      last_name,
      email,
    });
    const msg = "Success: User created";
    showMessage(msg, "green");
    resetFields();
  } catch (error) {
    const msg = `Error: ${error.message}`;
    showMessage(msg, "red");
    resetFields();
  }
});

const showMessage = (msg, color) => {
  message.textContent = msg;
  message.style.backgroundColor = color;
  setTimeout(() => {
    message.textContent = "";
    message.style.display = "none";
  }, 2500);
};

const resetFields = () => {
  nameInput.value = "";
  lastnameInput.value = "";
  emailInput.value = "";
  nameInput.focus();
};
