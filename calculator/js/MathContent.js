let isResult = false;
let isEqual = true;
function getMathContent() {
    let mathField = document.querySelector("math-field");
    if (mathField) 
    {
        mathField.value = mathField.value.replace(/=/g, "");
        let latex = mathField.getValue("latex");
        let asciiMath = mathField.getValue("ascii-math"); 
        console.log("asciiMath:", asciiMath);

        try {
            let result = math.evaluate(asciiMath);
            let mainResult = document.getElementById("main-result");
            mainResult.innerHTML = "= " + result;
            

        } catch (error) {
            console.error("Invalid ASCII math expression:", error);
            const InvalidContainer = document.querySelector('#invalid-container');
            InvalidContainer.style.display = "flex";
            let mainResult = document.getElementById("main-result");
        }
        isResult = true;
    }
}
function preResult() 
{
    const mathInput = document.querySelector('#main-input');
    const mathResult = document.querySelector('#main-result');
    const InvalidContainer = document.querySelector('#invalid-container');
    
    InvalidContainer.style.display = "none";
    const value = mathInput.value;
    const result = value.includes('=');
    mathResult.innerHTML = "";
   
        
        
    
    if(result){
        isEqual = true
        getMathContent();
    }
    else{
        isEqual = false;
    }

}
function clearScreen() {
    const mathInput = document.querySelector('#main-input');
    const mathResult = document.querySelector('#main-result');
    const InvalidContainer = document.querySelector('#invalid-container');
    InvalidContainer.style.display = "none";
    mathInput.value = '';
    mathResult.value = '';
}
document.addEventListener("click", function(event) {
    preResult();
    
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        isEqual = true;
        getMathContent();
    }
    else{
        isEqual = false;
    }
});

const mainInput = document.getElementById("main-input");
mainInput.addEventListener("input", function() {
    const mathResult = document.getElementById("main-result");
    if (isResult && !isEqual)
        {
            mathResult.innerHTML = "";
            isResult = false;
        }
    
});5^2  