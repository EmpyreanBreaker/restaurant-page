import { createSiteElements } from "./site.js";
import { headerContent, navigation } from "./header.js";
import { homePageContent } from "./home.js";
import { menuPageContent } from "./menu.js";
import { aboutPageContent } from "./about.js";
import { footerContent } from "./footer.js";
import "../css/styles.css";
import "../css/reset.css";

// Run on page load
(() => {
    // Overall Site Settings
    createSiteElements();

    // Header Settings
    headerContent();

    // Home Page Content
    //homePageContent();

    // About Content Settings
    aboutPageContent();

    // Footer Settings
    footerContent()
})();

// navigation(homePageContent, menuPageContent, aboutPageContent);