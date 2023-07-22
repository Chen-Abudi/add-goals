const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement("li");

  listItemEl.textContent = enteredValue;
  listEl.append(listItemEl);
  // Reset the input once the goal has been added
  inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal);
