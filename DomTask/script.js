const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

form.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();

  const newItem = document.getElementById("item").value;

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  const text = e.target.value.toLowerCase();

  const items = itemList.querySelectorAll("li");

  items.forEach((item) => {
    console.log(item);
    const itemName = item.firstChild.textContent;
    console.log(itemName);

    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
