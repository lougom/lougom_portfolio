function element_Create_under_block(Dictionary) {
    const page_data = document.querySelector('paige_boarder');
    if (!page_data) return;

    const container_under_block = document.createElement('div');
    const text_under_block = document.createElement('p');

    container_under_block.className = "container_all_under_block";
    text_under_block.className = "text_under_block";

    if (Dictionary[1]) {
        for (const [key, value] of Object.entries(Dictionary[1])) {
            if (key === "title") {
                text_under_block.textContent = value;
            }
        }
    }

    // Écouteur de clic sur CE bloc
    container_under_block.addEventListener("click", () => {
        // Ouvre une nouvelle page PAR-DESSUS l'actuelle (la croix revient en arrière)
        if (Dictionary[1]) openPage([Dictionary[1]]);   // voir shared.js
    });

    container_under_block.appendChild(text_under_block);
    page_data.appendChild(container_under_block);
}
