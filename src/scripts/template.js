import { createSiteElements } from "./site.js";
import { headerContent } from "./header.js";
import { homePageContent } from "./home.js";
import { footerCreation, footerPositioning, footerStyling } from "./footer.js";
import "../css/styles.css";
import "../css/reset.css";


// Overall Site Settings
createSiteElements();

// Header Settings
headerContent();

// Home Page Content
homePageContent();

// Menu Content Settings

// About Content Settings

// Footer Settings
footerCreation();
footerStyling();