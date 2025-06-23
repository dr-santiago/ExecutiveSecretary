const views = [
  {
    name: "Dashboard",
    description: "Displays an overview of tasks, messages, and calendar events."
  },
  {
    name: "Tasks",
    description: "Manages task assignments, due dates, and status updates."
  },
  {
    name: "Calendar",
    description: "Shows scheduled meetings and events in calendar format."
  },
  {
    name: "Contacts",
    description: "Lists all team contacts and communication preferences."
  }
];

const searchInput = document.getElementById("search");
const viewMenu = document.getElementById("view-menu");
const viewDetails = document.getElementById("view-details");

function renderMenu(filteredViews = views) {
  viewMenu.innerHTML = "";
  filteredViews.forEach(view => {
    const btn = document.createElement("button");
    btn.textContent = view.name;
    btn.onclick = () => showDetails(view);
    viewMenu.appendChild(btn);
  });
}

function showDetails(view) {
  viewDetails.innerHTML = `
    <h2>${view.name}</h2>
    <p>${view.description}</p>
  `;
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = views.filter(view => view.name.toLowerCase().includes(keyword));
  renderMenu(filtered);
});

// Initial render
renderMenu();
