const usersContainer = document.querySelector(".users-container");

const displayUsers = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/users/");
    const users = response.data;
    users.map((user) => {
      const userEl = document.createElement("div");
      const nameEl = document.createElement("h3");
      const emailEl = document.createElement("p");
      userEl.classList.add("user");

      nameEl.textContent = `${user.first_name} ${user.last_name}`;
      emailEl.textContent = `${user.email}`;

      userEl.appendChild(nameEl);
      userEl.appendChild(emailEl);
      usersContainer.appendChild(userEl);
    });
  } catch (error) {
    console.log(error);
  }
};
displayUsers();
