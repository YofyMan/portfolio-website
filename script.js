
// Character Counter
// Get the message textbox and counter
const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");

// Update the counter whenever the user types
messageBox.addEventListener("input", () => {

    const currentLength = messageBox.value.length;

    charCount.textContent = `${currentLength} / 300 characters`; // Cap the message to 300 characters

});

// Contact form fields required to fill in and final button click
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const output = document.getElementById("formMessage");

    if(name === "" || email === "" || message === ""){
        output.textContent = "Please fill out every field.";
        output.style.color = "red";
        return;
    }

    output.textContent = "Thank you! Your message has been received.";
    output.style.color = "green";

    form.reset();
    charCount.textContent = "0 / 300 characters";

});

const copyButton = document.getElementById("copyEmail");
const copyMessage = document.getElementById("copyMessage");

copyButton.addEventListener("click", () => {

    navigator.clipboard.writeText("jefferyqiu1@gmail.com");

    copyMessage.textContent = "✓ Email copied to clipboard!";

    setTimeout(() => {
        copyMessage.textContent = "";
    }, 2000);

});

const themeButton = document.getElementById("themeToggle");

//Saves the theme of the mode user chooses so when the page refreshes, it stays the same
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }else{
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});

// ================================
// Scroll Highlighting
// ================================

// Select all main sections and navigation links
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navlinks a");

// Watch each section as the user scrolls
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            // Run when a section becomes visible
            if (entry.isIntersecting) {

                // Remove the active class from every navigation link
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                // Find the navigation link connected to the visible section
                const activeLink = document.querySelector(
                    `.navlinks a[href="#${entry.target.id}"]`
                );

                // Highlight the matching navigation link
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }

        });

    },
    {
        // Highlights a section when roughly the middle of it enters the screen
        rootMargin: "-40% 0px -40% 0px"
    }
);

// Start observing every section
sections.forEach((section) => {
    observer.observe(section);
});