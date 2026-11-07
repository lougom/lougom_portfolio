/* =====================================================================
   shared.js : historique de navigation partagé par tous les scripts.
   À charger AVANT les autres scripts dans LG.html.

   pageStack = pile des pages ouvertes, ex. [ [blocs Projet], [blocs Pastille] ]
   - openPage(blocs)  : ouvre une page PAR-DESSUS l'actuelle
   - goBack()         : revient d'un pas en arrière (ferme tout s'il ne reste rien)
   - closeAllPages()  : ferme tout d'un coup
   ===================================================================== */

const pageStack = [];

function renderPage(blocks) {
  const page = document.querySelector("#Insight_mode");
  page.innerHTML = `
    <page></page>
    <paige_boarder></paige_boarder>
  `;

  // La croix : un pas en arrière
  const container_cross = document.createElement("div");
  const cross_1 = document.createElement("div");
  const cross_2 = document.createElement("div");
  container_cross.className = "container";
  cross_1.className = "cross a";
  cross_2.className = "cross b";
  container_cross.append(cross_1, cross_2);
  container_cross.addEventListener("click", goBack);
  page.appendChild(container_cross);

  // Le contenu de la page
  try {
    for (const block of blocks) {
      for (const [key, value] of Object.entries(block)) {
        element_Create([key, value]);
      }
    }
    const Bottom = document.createElement("div");
    Bottom.className = "Bottom_all";
    document.querySelector("paige_boarder").appendChild(Bottom);
  } catch (error) {
    console.error("renderPage ::: ", error);
  }
}

function openPage(blocks) {
  if (!Array.isArray(blocks)) return;
  pageStack.push(blocks);
  renderPage(blocks);
}

function goBack() {
  pageStack.pop();                                   // retire la page actuelle
  const previous = pageStack[pageStack.length - 1];  // la page d'avant
  if (previous) renderPage(previous);
  else closeAllPages();
}

function closeAllPages() {
  pageStack.length = 0;
  document.querySelector("#Insight_mode").innerHTML = "";
}
