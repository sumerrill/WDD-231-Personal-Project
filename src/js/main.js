import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderInfo, setFooter } from "./setHeaderFooter.mjs";

function setParkIntro(data) {
    const introEl = document.querySelector(".intro");
    introEl.innerHTML = `<h1>${data.fullName}</h1>
                         <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
    const infoEl = document.querySelector(".info");
    const html = data.map(mediaCardTemplate).join("");
    infoEl.insertAdjacentHTML("afterbegin", html);
}

async function init() {
    try {
        const parkData = await getParkData();
        setHeaderInfo(parkData);
        setParkIntro(parkData);
        setParkInfoLinks(parkInfoLinks);
        setFooter(parkData);
    } catch (error) {
        console.error("Error fetching park data:", error);
    }
}

init();
