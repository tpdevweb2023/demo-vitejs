import "./style.css";

const form = document.getElementById("form");
const zoneMotsEnCours = document.querySelector(".mots_en_cours");
const olList = document.getElementById("ol");
const randomButton = document.querySelector(".btn_random > button");

const items = [];

form.addEventListener("submit", function (e) {
  // On annule le comportement par défaut du formulaire
  e.preventDefault();
  // On ajoute notre mot au tableau des mots ajoutés
  items.push(e.target.item.value);
  zoneMotsEnCours.innerHTML =
    "Valeurs déjà ajoutées : <br>-> " + items.join(", ");
  // On vide le champ input
  e.target.item.value = "";

  if (items.length > 2)
    document.querySelector(".btn_random").removeAttribute("hidden");
});

randomButton.addEventListener("click", function () {
  let randomItems = [...items];
  randomItems.sort(function () {
    return 0.5 - Math.random();
  });
  olList.innerHTML = "";
  randomItems.forEach((randomItem) => {
    // olList.innerHTML += `<li>${randomItem}</li>`;
    let li = document.createElement("li");
    li.innerHTML = randomItem;
    olList.appendChild(li);
  });
});
