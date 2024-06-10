// Define a function to load a component into a specified placeholder
function loadComponent(componentPath, placeholderId) {
    // Fetch the HTML content of the component
    fetch(componentPath)
        .then(response => response.text())
        .then(html => {
            // Check if the placeholder exists before inserting HTML
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.innerHTML = html;
            }

            // After loading the component, check if the scroll-to-top button exists and attach event listener
            attachScrollToTopEventListener();
        })
        .catch(error => console.error(`Error loading component from ${componentPath}:`, error));
}

// Define a function to load multiple components into their respective placeholders
function loadComponents(components) {
    components.forEach(component => {
        loadComponent(component.path, component.placeholderId);
    });
}

// Function to attach event listener to scroll-to-top button
function attachScrollToTopEventListener() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', function () {
            console.log("button clicked");
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Define an array of components to load
const componentsToLoad = [
    { path: '/src/components/header.html', placeholderId: 'header-placeholder' },
    { path: '/src/components/footer.html', placeholderId: 'footer-placeholder' },
    { path: '/src/components/suggestion_box.html', placeholderId: 'suggestion-box-placeholder' },
    { path: '/src/components/top_button.html', placeholderId: 'top-button-placeholder' },
    { path: '/src/components/disclaimer_marquee.html', placeholderId: 'disclaimer-marquee-placeholder' },
    { path: '/src/components/site_icon.html', placeholderId: 'site-icon-placeholder' }
];

// Call the function to load components when the page loads
window.addEventListener('DOMContentLoaded', () => {
    loadComponents(componentsToLoad);
});
