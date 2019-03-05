const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

/*
    Populate Nav Bar

*/

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
// Delete property for loop below
delete siteContent["nav"]["img-src"];

//Update anchor tags in Nav Bar
const navBar = document.querySelector('nav');

//For each Anchor Tag
navBar.querySelectorAll('a').forEach(navItem => {
  //Assign next anchor tag to first object property
  const currentProperty = Object.entries(siteContent.nav)[0];
  navItem.textContent = currentProperty[1];
  navItem.style.color = 'green';
  //Delete the property from data object for the loop
  delete siteContent.nav[currentProperty[0]];
});

//Add 2 new nav items
const newNavItem1 = document.createElement('a');
newNavItem1.textContent = 'Home';
newNavItem1.style.color = 'green';
navBar.prepend(newNavItem1);

const newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Clients';
newNavItem2.style.color = 'green';
navBar.append(newNavItem2);


/*
    Populate CTA

*/
// Example: Update the img src for the logo
const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);
//Update text
const cta = document.querySelector('.cta-text');
cta.children[0].textContent = siteContent["cta"]["h1"];
cta.children[1].textContent = siteContent["cta"]["button"];

/*
    Populate Main Content

*/
// Example: Update the img src for the logo
const contentImage = document.getElementById("middle-img");
contentImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//Delete property for loop below
delete siteContent["main-content"]["middle-img-src"];
//Update text

//Get main content section
const mainContent = document.querySelector('.main-content');

//Get all text content divs
const textContentDivs = mainContent.querySelectorAll('.text-content');
textContentDivs.forEach(function(textContentDiv) {
  //Get all children of each text-content div
  Array.from(textContentDiv.children).forEach(function(child) {
    //Assign next element to first object property
    const nextProperty = Object.entries(siteContent['main-content'])[0];
    child.textContent = nextProperty[1];
    //Delete the property for loop
    delete siteContent['main-content'][nextProperty[0]];
  });  
});

/*
    Populate Contact

*/
//Update anchor tags in Nav Bar
const contactSection = document.querySelector('.contact');

Array.from(contactSection.children).forEach(child => {
  //Assign next anchor tag to first object property
  const currentProperty = Object.entries(siteContent.contact)[0];
  child.textContent = currentProperty[1];
  //Delete property for loop
  delete siteContent.contact[currentProperty[0]];
});


/* 

   Populate Footer

*/

const footer = document.querySelector('footer');
footer.children[0].textContent = siteContent.footer.copyright;



