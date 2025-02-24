function toggle(evt, language, ID) {
    const main = document.querySelector("#main");

    // Găsește elementul curent activ și îl ascunde
    const activeTab = document.querySelector(".tabcontent.active");
    if (activeTab) {
        activeTab.classList.remove("active");
        setTimeout(() => {
            activeTab.style.display = "none"; // Ascunde complet după animație
        }, 300); // Se potrivește cu durata animației CSS
    }

    // Afișează un mesaj de încărcare în timpul tranziției
    main.innerHTML = "<p>Se încarcă...</p>";

    fetch(`/cheatsheet/${language}/load`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: ID })
    })
    .then(response => response.json())  
    .then(data => {
        if (data.success) {
            setTimeout(() => {
                main.innerHTML = data.content;
                const newTab = document.querySelector("#main .tabcontent");
                if (newTab) {
                    newTab.style.display = "block"; // Asigură că este vizibil
                    setTimeout(() => {
                        newTab.classList.add("active"); // Activează animația
                    }, 10); // Mică întârziere pentru a permite `display: block` să se aplice
                }
                Prism.highlightAll(); // Reaplică evidențierea codului
            }, 300); // Se potrivește cu durata animației
        } else {
            main.innerHTML = "<p>Eroare la încărcare.</p>";
        }
    })
    .catch(error => {
        console.error("Eroare fetch:", error);
        main.innerHTML = "<p>Eroare de conexiune.</p>";
    });

    // Schimbă clasa activă pe meniul de tab-uri
    let barItems = document.getElementsByClassName("bar-item");
    for (let i = 0; i < barItems.length; i++) {
        barItems[i].classList.remove("active");
    }
    evt.currentTarget.classList.add("active");
}
document.addEventListener("DOMContentLoaded", function () {
    const newTab = document.querySelector("#main .tabcontent");
    if(newTab) {
        newTab.classList.add("active");
    }
});
