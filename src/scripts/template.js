import { createSiteElements } from "./site.js";
import { headerContent } from "./header.js";
import { homePageContent } from "./home.js";
import { menuPageContent } from "./menu.js";
import { footerCreation, footerPositioning, footerStyling } from "./footer.js";
import "../css/styles.css";
import "../css/reset.css";


// Overall Site Settings
createSiteElements();

// Header Settings
headerContent();

// Home Page Content
// homePageContent();

// Menu Content Settings
menuPageContent();

// About Content Settings

// Footer Settings
footerCreation();
footerStyling();