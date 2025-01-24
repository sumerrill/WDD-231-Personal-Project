export default function setHeaderFooter(data) {
    setHeaderInfo(data);
    setFooter(data);
  }
  
  function setHeaderInfo(data) {
    document.querySelector(".disclaimer > a").href = data.url;
    document.querySelector(".disclaimer > a").innerHTML = data.fullName;
    document.querySelector("head > title").textContent = data.fullName;
    document.querySelector(".hero-banner > img").src = data.images[0].url;
    document.querySelector(".hero-banner__content").innerHTML = `
      <h1>${data.fullName}</h1>
      <p>National Park ID, MT, WY</p>`;
  }
  
  function setFooter(data) {
    document.querySelector("#park-footer").innerHTML = footerTemplate(data);
  }
  