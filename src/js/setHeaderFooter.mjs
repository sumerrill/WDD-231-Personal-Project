export function setHeaderInfo(data) {
    document.querySelector(".hero-banner img").src = data.images[0].url;
    document.querySelector(".hero-banner h1").textContent = data.fullName;
  }
  
  export function setFooter(data) {
    document.querySelector(".footer").innerHTML = `
      <p>Address: ${data.addresses[0].line1}, ${data.addresses[0].city}</p>
      <p>Phone: ${data.phoneNumbers[0].phoneNumber}</p>
    `;
  }
  
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

function setFooter(data) {
    const footerSection = document.querySelector("#park-footer");
    footerSection.innerHTML = footerTemplate(data);
  }