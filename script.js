let homeTitleElement;
let griddyElement;
let projectsElement;

let portfolioPieces = [
    {
    "creationName": "LoveCapsule𖥔 ࣪ ᥫ᭡ꗃ⋆࣪.",
    "type": "codeProjects",
    "id": "midterm",
    "description": "created in 2024.",
    "image": "./medias/love.png",
    "url": "https://siennasuarez.github.io/midterm/"
  },
  {
    "creationName": "Fragile Heart",
    "type": "artProjects",
    "id": "3dart",
    "description": "created in 2023.",
    "image": "./medias/heart.jpg"
  },
  {
    "creationName": "Bloody Horror",
    "type": "artProjects",
    "id": "talia",
    "description": "created in 2023.",
    "image": "./medias/bloody.jpg"
  },
  {
    "creationName": "Digital Etch-Sketch",
    "type": "codeProjects",
    "id": "creativecoding",
    "description": "created in 2023.",
    "image": "./medias/etch.png",
    "url": "https://editor.p5js.org/ms14589/full/feNJ3-37T"
  },
  {
    "creationName": "We are Friends!",
    "type": "artProjects",
    "id": "box",
    "description": "created in 2023.",
    "image": "./medias/friends.jpg"
  },
  {
    "creationName": "Playing Cards",
    "type": "artProjects",
    "id": "deck",
    "description": "created in 2023.",
    "image": "./medias/cards.jpg"
  },
  {
    "creationName": "Friends with Ai",
    "type": "artProjects",
    "id": "roboto",
    "description": "created in 2023.",
    "image": "./medias/ai.jpg" 
  }
];

document.addEventListener("DOMContentLoaded", function() {
  homeTitleElement = document.getElementById("homeTitle");
  griddyElement = document.getElementById("griddy");
  projectsElement = document.getElementById("projects");

  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection != "item") {
    if (urlSection == "codeProjects") {
      homeTitleElement.innerText = "Websites & Generative Art:";
    } else if (urlSection == "artProjects") {
      homeTitleElement.innerText = "Visual Art:";
    }
    for (let i = 0; i < portfolioPieces.length; i++) {
      if (portfolioPieces[i]["type"] == urlSection || urlSection == "" || urlSection == null) {
        createPreview(portfolioPieces[i]);
      }
    }
  } else {
    for (let i = 0; i < portfolioPieces.length; i++) {
      if (portfolioPieces[i]["id"] == urlID) {
        createProjectPage(portfolioPieces[i]);
      }
    }
  }
});

function createPreview(incomingJSON) {
  let newPreviewLink = document.createElement("A");

   if (incomingJSON.url) {
    newPreviewLink.href = incomingJSON["url"];
    newPreviewLink.target = "_blank";
    newPreviewLink.rel = "noopener noreferrer";
  } else {
  
    newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"];
  }

   newPreviewLink.classList.add("card");

  let newCardContent = document.createElement("DIV");
  newCardContent.classList.add("cardContent");

  let newPreviewTitle = document.createElement("H3");
  newPreviewTitle.classList.add("previewTitle");
  newPreviewTitle.innerText = incomingJSON.creationName;

  let newPreviewThumbnail = document.createElement("IMG");
  newPreviewThumbnail.classList.add("thumbnail");
  newPreviewThumbnail.src = incomingJSON.image;

  newCardContent.appendChild(newPreviewTitle);
  newCardContent.appendChild(newPreviewThumbnail);
  newPreviewLink.appendChild(newCardContent);
  griddyElement.appendChild(newPreviewLink);
}

function createProjectPage(incomingJSON) {
  homeTitleElement.innerText = incomingJSON.creationName;

  let newProjectElement = document.createElement("DIV");

  let newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("projectHeroImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  let newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  projectsElement.appendChild(newProjectElement);
}