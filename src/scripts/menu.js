// Grab content space
const menu = document.querySelector(".site-content");

// Create menu banner
const menuBanner = document.createElement("section");

// Create tea menu
const teaMenu = document.createElement("div");

// Create menu section title card
const menuTitleCard = document.createElement("div");
menuTitleCard.classList.add("site-about__menu-card");


// Create tea list
const teaList = [
    {
        teaName: "Jasmine Green Tea",
        description: "Fragrant jasmine blossoms over smooth green tea; light and floral.",
        cost: 4.25
    },
    {
        teaName: "Earl Grey",
        description: "Black tea infused with bergamot citrus; bright, classic, and aromatic.",
        cost: 4.0
    },
    {
        teaName: "Chamomile",
        description: "Caffeine-free herbal tea with apple-like sweetness; calming and gentle.",
        cost: 3.75
    },
    {
        teaName: "Masala Chai",
        description: "Spiced black tea with cinnamon, cardamom, and ginger; cozy and bold.",
        cost: 4.5
    },
    {
        teaName: "Matcha Latte",
        description: "Stone-ground matcha whisked into steamed milk; creamy with a clean umami finish.",
        cost: 5.25
    },
    {
        teaName: "Peppermint",
        description: "Caffeine-free mint infusion; crisp, refreshing, and cooling.",
        cost: 3.75
    },
    {
        teaName: "Oolong",
        description: "Toasty and complex with a smooth finish; sits between green and black tea.",
        cost: 4.5
    },
    {
        teaName: "Hibiscus Berry",
        description: "Tart hibiscus with mixed berries; vibrant, fruity, and caffeine-free.",
        cost: 4.0
    },
    {
        teaName: "English Breakfast",
        description: "Full-bodied black tea blend; rich and malty—great with milk.",
        cost: 4.0
    },
    {
        teaName: "Ginger Lemon",
        description: "Zesty ginger heat balanced with bright lemon; caffeine-free and warming.",
        cost: 3.95
    }
];

// Clear module scoped variables to prevent building old elements on the new
const clearModuleScopedElements = () => {
    menu.replaceChildren();

    menuBanner.replaceChildren();

    menuTitleCard.replaceChildren();

    teaMenu.replaceChildren();
}

const menuPageContent = () => {
    // Clear menu content to prevent building old elements on the new
    clearModuleScopedElements();

    // Add Menu Elements
    createMenuElements();

    // Position Menu Elements
    positionMenuElements();

    // Style Menu Elements
    styleMenuElements();
}

const createMenuElements = () => {
    // Append menuBanner to menu
    menu.appendChild(menuBanner);

    // Create menu title card
    createMenuTitleCard();

    // Create and append tea menu
    createTeaMenu();
}

const positionMenuElements = () => {
    // Make the menu content a grid
    menu.style.display = "grid";
    menu.style.gridTemplateColumns = "1fr";

    // Position menu banner
    positionMenuBanner();

    // Position menu title card
    positionMenuTitleCard();

    // Position tea menu
    positionTeaMenu();

    // Position tea card
    positionTeaCard();
};

const styleMenuElements = () => {
    // Style menu banner
    styleMenuBanner();

    // Style nmenu title card
    styleMenuTitleCard();

    // Style tea menu
    styleTeaMenu();

    // Style tea card
    styleTeaCard();
};

const positionMenuBanner = () => {
    menuBanner.style.display = "flex";
    menuBanner.style.flexDirection = "column";
    menuBanner.style.justifyContent = "center";
    menuBanner.style.alignItems = "center";
    menu.style.height = "100%";
    menu.style.overflowY = "auto";
}

const styleMenuBanner = () => {
    menuBanner.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
};

const createMenuTitleCard = () => {
    // Create elements for about card
    const cardTitle = document.createElement("h3");
    const cardDescription = document.createElement("p");

    // Populate elements
    cardTitle.innerHTML = "A Little Sip"
    cardDescription.innerHTML = "Menu"
    menuTitleCard.append(cardTitle, cardDescription);

    // Append card
    teaMenu.append(menuTitleCard);
};

const positionMenuTitleCard = () => {
    menuTitleCard.style.display = "flex";
    menuTitleCard.style.flexDirection = "column";
    menuTitleCard.style.alignItems = "center";

}

const styleMenuTitleCard = () => {
    menuTitleCard.style.borderBottom = "1px solid #A7B8A3"
}

const createTeaMenu = () => {
    // Loop through list and add to teaMenu

    teaList.forEach((tea) => {

        const teaCard = document.createElement("div");
        teaCard.classList.add("site-menu__tea-card");

        // Create card components
        const teaName = document.createElement("h3");
        const teaDescription = document.createElement("p");
        const teaPrice = document.createElement("p");

        // Assign tea details to the elements
        console.log(tea.teaName);
        teaName.innerHTML = tea.teaName;
        teaDescription.innerHTML = tea.description;
        teaPrice.innerHTML = `$${tea.cost.toFixed(2)}`;

        // Append all elements to the card
        teaCard.append(teaName, teaDescription, teaPrice);

        // Append tea card to tea menu
        teaMenu.append(teaCard);

    });
    // Append to menu banner
    menuBanner.append(teaMenu);
}

const positionTeaMenu = () => {
    teaMenu.style.display = "grid";
    teaMenu.style.gap = "1rem";
    teaMenu.style.padding = "1rem";
}

const styleTeaMenu = () => {
    teaMenu.style.borderWidth = "0px 2px 0px 2px";
    teaMenu.style.borderStyle = "solid";
    teaMenu.style.borderColor = "#F5F1E8";
    teaMenu.style.borderRadius = "1rem";
}

const positionTeaCard = () => {
    const teaCard = document.querySelectorAll(".site-menu__tea-card");
    teaCard.forEach(card => {
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.justifyContent = "center";
        card.style.gap = "0.4rem";
        card.style.padding = "1rem";
        card.style.width = "60ch";
    })
}

const styleTeaCard = () => {
    const teaCard = document.querySelectorAll(".site-menu__tea-card");
    teaCard.forEach(card => {
        card.style.border = "1px solid #A7B8A3";
        card.style.borderRadius = "1rem";
    })
}

export { menuPageContent };