import { createSiteElements } from "./site.js";
import { headerContent, navigation } from "./header.js";
import { homePageContent } from "./home.js";
import { menuPageContent } from "./menu.js";
import { aboutPageContent } from "./about.js";
import { footerContent } from "./footer.js";
import "../css/reset.css";
import "../css/fonts.css";

// Run on page load
(() => {
    // Overall Site Settings
    createSiteElements();

    // Header Settings
    headerContent();

    // Home Page Content
    homePageContent();

    // Menu Page Content
    // menuPageContent();

    // About Content Settings
    // aboutPageContent();

    // Footer Settings
    footerContent()
})();

navigation(homePageContent, menuPageContent, aboutPageContent);