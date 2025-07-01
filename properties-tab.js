// JS
const viewDetails = document.getElementById("view-details");

function showPropertiesPanel(htmlString) {
    const content = document.getElementById("properties-content");
    const panel = document.getElementById("properties-panel");

    content.innerHTML = htmlString;
    panel.classList.add("open");
    document.body.classList.add("panel-open");
}

document.getElementById("close-properties").addEventListener("click", () => {
    document.getElementById("properties-panel").classList.remove("open");
    document.body.classList.remove("panel-open");
});

viewDetails.addEventListener('click', (e) => {
    const option = e.target.closest('.task-option');
    if (option) {
        const propertiesDiv = option.querySelector('.properties');
        if (propertiesDiv) {
            const propertiesHtml = propertiesDiv.innerHTML;
            showPropertiesPanel(propertiesHtml);
        } else {
            // fallback if .properties div missing
            const descriptionHtml = option.querySelector('.task-description').innerHTML;
            showPropertiesPanel(descriptionHtml);
        }
    }
});

// document.addEventListener('click', (e) => {
//     const option = e.target.closest('.task-option');
//     if (option) {
//         const propertiesDiv = option.querySelector('.properties');
//         if (propertiesDiv) {
//             const propertiesHtml = propertiesDiv.innerHTML;
//             showPropertiesPanel(propertiesHtml);
//         }
//     }
// });
