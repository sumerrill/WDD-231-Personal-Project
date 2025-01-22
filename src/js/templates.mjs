export { mediaCardTemplate, footerTemplate };
export { parkInfoTemplate };
  
function mediaCardTemplate(info) {
    return `<div class="media-card">
                <a href="${info.link}">
                    <img src="${info.image}" alt="${info.name}">
                    <h2>${info.name}</h2>
                </a>
                <p>${info.description}</p>
            </div>`;
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
  
function getMailingAddress(addresses) {
    return addresses.find(address => address.type === "Mailing");
}

function getVoicePhone(phoneNumbers) {
    return phoneNumbers.find(phone => phone.type === "Voice").phoneNumber;
}

function parkInfoTemplate(data) {
    return `
      <h1>${data.fullName}</h1>
      <p>Explore the beauty and wonders of ${data.fullName}.</p>
    `;
}