import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function setHeaderInfo(data) {
    // Insert data into the disclaimer section
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;

    // Update the title of the site
    document.querySelector("head > title").textContent = data.fullName;

    // Set the banner image
    document.querySelector(".hero-banner > img").src = data.images[0].url;

    // Use the template function to set additional park info in the header
    document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
}

function parkInfoTemplate(data) {
    return `
      <h1>${data.fullName}</h1>
      <p>Explore the beauty and wonders of ${data.fullName}.</p>
    `;
}

function setParkIntro(data) {
    const introSection = document.querySelector(".intro");
    introSection.innerHTML = `
      <h1>${data.fullName}</h1>
      <p>${data.description}</p>
    `;
  }
  
function mediaCardTemplate(info) {
    return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card__img">
    <h3 class="media-card__title">${info.name}</h3>
    </a>
   <p>${info.description}</p>
     </div>`;
  }

function setParkInfoLinks(links) {
    const infoSection = document.querySelector(".info");
    const html = links.map(mediaCardTemplate).join('');
    infoSection.innerHTML = html;
}

const parkInfoLinks = [
    {
        name: "Current Conditions &#x203A;",
        link: "conditions.html",
        image: parkData.images[2].url,
        description: "See what conditions to expect in the park before leaving on your trip!"
    },
    {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: parkData.images[3].url,
        description: "Learn about the fees and passes that are available."
    },
    {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: parkData.images[9].url,
        description: "Learn about the visitor centers in the park."
    }
];

// Function to get the mailing address
function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
  }
  
  // Function to get the voice phone number
  function getVoicePhone(phoneNumbers) {
    const voice = phoneNumbers.find((phone) => phone.type === "Voice");
    return voice.phoneNumber;
  }
  
  function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);
  
    return `
      <section class="contact">
        <h3>Contact Info</h3>
        <h4>Mailing Address:</h4>
        <div>
          <p>${mailing.line1}</p>
          <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
        </div>
        <h4>Phone:</h4>
        <p>${voice}</p>
      </section>`;
  }
  
function setParkFooter(data) {
    const footerSection = document.querySelector("#park-footer");
    footerSection.innerHTML = footerTemplate(data);
  }
  
setHeaderInfo(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
setParkFooter(parkData);
