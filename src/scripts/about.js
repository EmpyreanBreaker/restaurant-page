// Grab content space
const about = document.querySelector(".site-content");

// Create banners
const leftAboutBanner = document.createElement("site-about__banner");
const rightAboutBanner = document.createElement("site-about__banner");

// Create about section title card
const aboutTitleCard = document.createElement("div");
aboutTitleCard.classList.add("site-about__title-card");

const cardList = [
    {
        title: `Our First Pour`,
        description: `A Little Sip was born from the belief that comfort lives in small rituals. 
        A warm cup, quiet corner, and a moment reclaimed from the rush can soften the edges of a long day.`
    },
    {
        title: `The Space We're Creating`,
        description: `We are building a sanctuary in the spaces between movement; 
        A place where the world slows just enough for you to notice the warmth 
        in your hands and the stillness in your breath. `
    },
]

// Clear module scoped variables to prevent building old elements on the new
const clearModuleScopedElements = () => {
    about.replaceChildren();
    leftAboutBanner.replaceChildren();
    rightAboutBanner.replaceChildren();
    aboutTitleCard.replaceChildren();
}

const aboutPageContent = () => {
    // Clear about content to prevent building old elements on the new
    clearModuleScopedElements();

    // Add about Elements
    createAboutElements();

    // Position about Elements
    positionAboutElements();

    // Style about Elements
    styleAboutElements();
}

const createAboutElements = () => {
    // Append created banners
    about.append(leftAboutBanner, rightAboutBanner);

    createAboutCard();

    createAboutTitleCard();
}

const positionAboutElements = () => {
    // Make the about content a grid
    about.style.display = "grid";
    about.style.gridTemplateColumns = "1fr 1fr";
    about.style.position = "relative";

    // Position left banner
    positionLeftAboutBanner();

    // position right banner
    positionRightAboutBanner();

    // Position about title card
    positionAboutTitleCard();

    // Position about cards
    positionAboutCard();
};

const styleAboutElements = () => {
    // Style left banner
    styleLeftAboutBanner();

    // Style right banner
    styleRightAboutBanner();

    // Style about title card
    styleAboutTitleCard();

    // Style about card
    styleAboutCard();
};

const positionLeftAboutBanner = () => {
    leftAboutBanner.style.display = "flex";
    leftAboutBanner.style.justifyContent = "flex-end";
    leftAboutBanner.style.paddingRight = "0.5rem";
    leftAboutBanner.style.alignItems = "center";
    leftAboutBanner.style.position = "relative";
    leftAboutBanner.style.zIndex = "1";
};

const styleLeftAboutBanner = () => {
    leftAboutBanner.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
};

const positionRightAboutBanner = () => {
    rightAboutBanner.style.display = "flex";
    rightAboutBanner.style.justifyContent = "flex-start";
    rightAboutBanner.style.paddingLeft = "0.5rem";
    rightAboutBanner.style.alignItems = "center";
    rightAboutBanner.style.position = "relative";
    rightAboutBanner.style.zIndex = "1";
};

const styleRightAboutBanner = () => {
    rightAboutBanner.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
};

const createAboutTitleCard = () => {
    // Create elements for about card
    const cardTitle = document.createElement("h3");
    const cardDescription = document.createElement("p");

    // Populate elements
    cardTitle.innerHTML = "A Little Sip"
    cardDescription.innerHTML = "About Us"
    aboutTitleCard.append(cardTitle, cardDescription);

    // Append card
    about.append(aboutTitleCard);
};

const positionAboutTitleCard = () => {
    aboutTitleCard.style.display = "flex";
    aboutTitleCard.style.flexDirection = "column";
    aboutTitleCard.style.gap = "0.6rem";
    aboutTitleCard.style.alignItems = "center";
    aboutTitleCard.style.justifyContent = "center";
    aboutTitleCard.style.position = "absolute";
    aboutTitleCard.style.left = "50%";
    aboutTitleCard.style.top = "4%"
    aboutTitleCard.style.transform = "translateX(-50%)";
    aboutTitleCard.style.zIndex = "10";
}

const styleAboutTitleCard = () => {
    aboutTitleCard.style.width = "30rem";
    aboutTitleCard.style.height = "20em";
    aboutTitleCard.style.padding = "2rem";
    aboutTitleCard.style.borderRadius = "1rem";
    aboutTitleCard.style.borderStyle = "solid";
    aboutTitleCard.style.borderColor = "#F5F1E8";
    aboutTitleCard.style.borderWidth = "2px 2px 0 2px";
}

const createAboutCard = () => {
    // Fill elements and append to card
    for (let i = 0; i < cardList.length; i++) {
        // Create card
        const aboutCard = document.createElement("div");
        aboutCard.classList.add("site-about__card");
        // Create elements for about card
        const cardTitle = document.createElement("h3");
        const cardDescription = document.createElement("p");

        // Populate elements
        cardTitle.innerHTML = cardList[i].title;
        cardDescription.innerHTML = cardList[i].description;
        aboutCard.append(cardTitle, cardDescription);

        // Append card to appropriate banners
        if (i === 0) {
            aboutCard.classList.add("site-about__left-card");
            leftAboutBanner.append(aboutCard);
        }
        else {
            aboutCard.classList.add("site-about__right-card");
            rightAboutBanner.append(aboutCard);
        }
    }
}

const positionAboutCard = () => {
    const aboutCard = document.querySelectorAll(".site-about__card");
    aboutCard.forEach(card => {
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.gap = "0.6rem";
        card.style.alignItems = "center";
        card.style.justifyContent = "center";

    })
}

const styleAboutCard = () => {
    const aboutCard = document.querySelectorAll(".site-about__card");
    aboutCard.forEach(card => {
        card.style.width = "30rem";
        card.style.height = "15rem";
        card.style.padding = "2rem";
        card.style.borderRadius = "1rem";
        card.style.borderStyle = "solid";
        card.style.borderColor = "#F5F1E8";
        card.style.borderWidth = "0px 2px 2px 2px";
        card.style.transform = "translateY(7rem)"
    })
}

export { aboutPageContent };