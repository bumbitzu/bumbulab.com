function openVirtualKeyboard() {
    let toggleButton;
    let mathField = document.querySelector("math-field"); // Selectăm elementul principal
    if (mathField && mathField.shadowRoot) {
        toggleButton = mathField.shadowRoot.querySelector('[part="virtual-keyboard-toggle"]');
        let inputField = mathField.shadowRoot.querySelector('[part="keyboard-sink"]'); // Input-ul real
        
        if (toggleButton && inputField) {
            mathField.focus(); // Setează focus pe câmpul MathField
            inputField.focus(); // Setează focus pe elementul intern dacă e necesar
            //sterge atributul part="keyboard-sink" din inputField
            
            setTimeout(() => {
                toggleButton.click(); // Apasă pe buton după focus
            }, 10);
        } else {
            setTimeout(openVirtualKeyboard, 500);
        }
    } else {
        setTimeout(openVirtualKeyboard, 500);
    }
}
// adauga un event listner pentru enter
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {

    }
});


function openKeyboard()
{
    let mathField = document.getElementById("main-input");
    mathField.executeCommand("showVirtualKeyboard");
}
window.onload = function() {
    openKeyboard(); // Deschide tastatura la încărcare

    // Adaugă event listener pentru focus
    document.getElementById("main-input").addEventListener("focus", openKeyboard);
};
   
