import { siteStyling, sitePositioning } from "./site.js";
import { header } from "./header.js";
import { footerCreation, footerPositioning, footerStyling } from "./footer.js";
import "../css/styles.css";
import "../css/reset.css";


// Site Settings
siteStyling();
sitePositioning();

// Header Settings
header();

// Footer Settings
footerCreation();
footerStyling();