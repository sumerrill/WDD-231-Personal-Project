import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

export default function setHeaderFooter(data) {
    setHeaderInfo(data);
    setFooter(data);
}

export function setHeaderInfo(data) {
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

export function setFooter(data) {
    const footerEl = document.querySelector(".park-footer");
    footerEl.innerHTML = footerTemplate(data);
}
