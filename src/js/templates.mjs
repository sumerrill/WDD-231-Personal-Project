export function mediaCardTemplate(info) {
    return `
      <div class="media-card">
        <a href="${info.link}">
          <img src="${info.image}" alt="${info.name}">
          <h2>${info.name}</h2>
        </a>
        <p>${info.description}</p>
      </div>`;
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