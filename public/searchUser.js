const searchForm = document.getElementById("searchForm");
const searchNameInput = document.getElementById("searchName");
const btn = document.querySelector(".search-btn");
const searchMessage = document.querySelector(".search-message");
const usersContainer = document.querySelector(".users-container");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = searchNameInput.value;
  if (!name) {
    const msg = "Name is required in the search input";
    showSearchMessage(msg, "red");
    resetSearchField();
    return;
  }

  try {
    const response = await axios.get(
      `http://localhost:5000/api/users/search?first_name=${name}`
    );
    console.log(response.data);

    while (usersContainer.firstChild) {
      usersContainer.removeChild(usersContainer.firstChild);
    }

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
});

const showSearchMessage = (msg, color) => {
  searchMessage.textContent = msg;
  searchMessage.style.backgroundColor = color;
  setTimeout(() => {
    searchMessage.textContent = "";
    searchMessage.style.display = "none";
  }, 2500);
};

const resetSearchField = () => {
  searchNameInput.value = "";
  searchNameInput.focus();
};
