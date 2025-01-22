import { getParkData } from "./parkService.mjs";
import { parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderInfo, setFooter } from "./setHeaderFooter.mjs";

const parkData = getParkData();

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
  
function setParkInfoLinks(links) {
    const infoSection = document.querySelector(".info");
    const html = links.map(mediaCardTemplate).join('');
    infoSection.innerHTML = html;
}

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
  
document.querySelector('.hero-banner img').src = parkData.images[0].url;
document.querySelector('.hero-banner__content').innerHTML = `
    <h1>${parkData.fullName}</h1>
    <p>${parkData.description}</p>
`;

setHeaderInfo(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
setFooter(parkData);
