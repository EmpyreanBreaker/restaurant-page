// Grab the site body
const site = document.querySelector(".site");

const footerCreation = () => {
    // Create the page footer
    const footer = document.createElement("footer");
    footer.classList.add("site-footer");

    // Create a text holder
    const textHolder = document.createElement("h1");
    textHolder.innerHTML = "Testing";
    footer.appendChild(textHolder);

    // Append the footer
    site.appendChild(footer);


}

const footerPositioning = () => { };

const footerStyling = () => {
    const footer = document.querySelector(".site-footer");
    // Apply footer Styling
    footer.style.borderTop = "1px solid #E69B97";
}

export { footerCreation, footerPositioning, footerStyling };