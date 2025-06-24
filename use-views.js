const views = [
  { name: "Zones", file: "views-explanation/zones.html" },
  { name: "Districts", file: "views-explanation/Districts.html" },
  { name: "Areas", file: "views-explanation/Areas.html" },
  { name: "Tasks", file: "views-explanation/Tasks.html" },
  { name: "Calendar", file: "views-explanation/Calendar.html" },
  { name: "Contacts", file: "views-explanation/Contacts.html" }
];

const searchInput = document.getElementById("search");
const viewMenu = document.getElementById("view-menu");
const viewDetails = document.getElementById("view-details");

function renderMenu(filteredViews = views) {
  viewMenu.innerHTML = "";
  filteredViews.forEach(view => {
    const btn = document.createElement("button");
    btn.textContent = view.name;
    btn.onclick = () => loadViewContent(view.file);
    viewMenu.appendChild(btn);
  });
}

function loadViewContent(filePath) {
  fetch(filePath)
    .then(res => {
      if (!res.ok) throw new Error("View file not found.");
      return res.text();
    })
    .then(html => {
      viewDetails.innerHTML = html;
    })
    .catch(err => {
      viewDetails.innerHTML = `<p style="color:red;">Failed to load content: ${err.message}</p>`;
    });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = views.filter(view => view.name.toLowerCase().includes(keyword));
  renderMenu(filtered);
});

renderMenu();
