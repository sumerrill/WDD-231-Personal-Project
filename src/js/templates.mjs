export function mediaCardTemplate(info) {
  return `
    <div class="media-card">
      <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}">
        <h3>${info.name}</h3>
      </a>
      <p>${info.description}</p>
    </div>`;
}

export function footerTemplate(info) {
  const mailing = info.addresses.find((address) => address.type === "Mailing");
  const voice = info.contacts.phoneNumbers.find((phone) => phone.type === "Voice").phoneNumber;

  return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <p>${mailing.line1}, ${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
  <h4>Phone:</h4>
  <p>${voice}</p>
</section>`;
}
