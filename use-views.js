const views = [
  { name: "Zones", file: "views-explanation/zones.html", content: null },
  { name: "Districts", file: "views-explanation/Districts.html", content: null },
  { name: "Areas", file: "views-explanation/Areas.html", content: null },
  { name: "Tasks", file: "views-explanation/Tasks.html", content: null },
  { name: "Calendar", file: "views-explanation/Calendar.html", content: null },
  { name: "Contacts", file: "views-explanation/Contacts.html", content: null }
];

const searchInput = document.getElementById("search");
const globalSearchInput = document.getElementById("global-content-search");
const viewMenu = document.getElementById("view-menu");
const viewDetails = document.getElementById("view-details");

// Render buttons for each view
function renderMenu(filteredViews = views) {
  viewMenu.innerHTML = "";
  filteredViews.forEach(view => {
    const btn = document.createElement("button");
    btn.textContent = view.name;
    btn.onclick = () => loadViewContent(view.file);
    viewMenu.appendChild(btn);
  });
}

// Load and display view HTML file
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

// Preload all view contents into memory
function preloadAllViews() {
  views.forEach(view => {
    fetch(view.file)
      .then(res => res.ok ? res.text() : "")
      .then(html => {
        view.content = html.toLowerCase(); // Store lowercase for keyword matching
      })
      .catch(() => {
        view.content = "";
      });
  });
}

// Filter by view name only
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.trim().toLowerCase();
  const filtered = views.filter(view =>
    view.name.toLowerCase().includes(keyword)
  );
  renderMenu(filtered);
});

// Filter by name or loaded content
globalSearchInput.addEventListener("input", () => {
  const keyword = globalSearchInput.value.trim().toLowerCase();
  if (!keyword) {
    renderMenu();
    return;
  }

  const filtered = views.filter(view =>
    view.name.toLowerCase().includes(keyword) ||
    (view.content && view.content.includes(keyword))
  );

  renderMenu(filtered);
});

renderMenu();
preloadAllViews();
