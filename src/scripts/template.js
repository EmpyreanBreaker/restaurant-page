import { createSiteElements } from "./site.js";
import { headerContent, navigation } from "./header.js";
import { homePageContent } from "./home.js";
import { menuPageContent } from "./menu.js";
import { footerCreation, footerPositioning, footerStyling } from "./footer.js";
import "../css/styles.css";
import "../css/reset.css";

// Run on page load
(() => {
    // Overall Site Settings
    createSiteElements();

    // Header Settings
    headerContent();

    // Home Page Content
    homePageContent();

    // About Content Settings

    // Footer Settings
    footerCreation();
    footerStyling();
})();

navigation(homePageContent, menuPageContent, headerContent);