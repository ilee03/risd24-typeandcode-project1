document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    const sections = document.querySelectorAll('.section');
    const title = document.querySelector('h1'); // Target the title (h1 tag)
    const subtitle = document.querySelector('h3'); // Target the subtitle (h3 tag)
    const body = document.body; // Target the body element for background color change

    // Set the initial background color for all sections, title, and subtitle color
    sections.forEach(section => {
        section.style.transition = 'background-color 0.5s ease'; // Smooth transition for background color
    });

    title.style.transition = 'color 0.5s ease'; // Smooth transition for title color
    subtitle.style.transition = 'color 0.5s ease'; // Smooth transition for subtitle color
    body.style.transition = 'background-color 0.5s ease'; // Smooth transition for body background color

    scrollContainer.addEventListener('scroll', () => {
        const containerWidth = scrollContainer.clientWidth;
        const maxScrollLeft = scrollContainer.scrollWidth - containerWidth;
        const halfwayPoint = maxScrollLeft / 2;

        // Check if the scroll has passed halfway
        if (scrollContainer.scrollLeft >= halfwayPoint) {
            // Apply the new background color to all sections after halfway
            sections.forEach(section => {
                section.style.backgroundColor = '#2b3442'; // Change sections to dark color
            });

            // Change the background color of the body to dark
            body.style.backgroundColor = '#2b3442'; // Dark color for the entire background

            // Change the title color to light when the halfway point is passed
            title.style.color = '#e0e0f6'; // Light color for the title

            // Change the subtitle color to light when the halfway point is passed
            subtitle.style.color = '#e0e0f6'; // Light color for the subtitle
        } else {
            // Reset background color of sections and title color to the original when before halfway
            sections.forEach(section => {
                section.style.backgroundColor = '#e0e0f6'; // Original section color
            });

            // Reset the background color of the body to the original color
            body.style.backgroundColor = '#e0e0f6'; // Original background color for the body

            // Reset title and subtitle color to the original
            title.style.color = '#333'; // Original title color
            subtitle.style.color = '#333'; // Original subtitle color
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Select all flower images
    const flowerImages = document.querySelectorAll('.flower-image');

    // Add hover event listeners to apply the shake effect
    flowerImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.classList.add('shake'); // Add shake class on hover
        });

        image.addEventListener('mouseout', () => {
            image.classList.remove('shake'); // Remove shake class when not hovering
        });
    });
});

document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const navOverlay = document.getElementById("nav-overlay");

    // Get the bottom-most position of the last section
    const lastSection = sections[sections.length - 1];
    const rect = lastSection.getBoundingClientRect();

    // Check if the last section is fully out of view
    if (rect.bottom <= 0) {
        // All sections are finished; show the nav bar
        navOverlay.style.opacity = "1";
        navOverlay.style.pointerEvents = "auto"; // Enable interaction
    } else {
        // Sections are still visible; hide the nav bar
        navOverlay.style.opacity = "0";
        navOverlay.style.pointerEvents = "none"; // Disable interaction
    }
});



