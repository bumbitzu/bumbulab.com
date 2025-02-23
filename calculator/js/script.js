function enter(){
    //get first element with class sub-screen
    let subScreen = document.querySelector('#sub-screen');
    //copy 
    let newSubScreen = subScreen.cloneNode(true);

    let newMathField1 = newSubScreen.querySelector('#main-input');
    let newMathField2 = newSubScreen.querySelector('#main-result');
    let newInvalidContainer = newSubScreen.querySelector('#invalid-container');
    
    newMathField1.id = 'main-input-clone';
    newMathField2.id = 'main-result-clone';
    newInvalidContainer.id = 'invalid-container-clone';

    newMathField1.value = subScreen.querySelector('#main-input').value;
    newMathField2.value = subScreen.querySelector('#main-result').value;

    newSubScreen.style.border = 'none';
    newSubScreen.style.outline = 'solid 1px black';

    newSubScreen.classList.add('clone');
    newMathField1.classList.add('clone');
    newMathField2.classList.add('clone');

    
    //remove ids from the new element and children
    newMathField1.removeAttribute('id');
    newMathField2.removeAttribute('id');
    newInvalidContainer.removeAttribute('id');
    newMathField2.removeAttribute('onclick');

    newMathField1.setAttribute('readonly' , 'true');
    //paste next to the original element
    subScreen.after(newSubScreen);
    //clear the original element for next input
}
function AC(){
    //refresh the page
    location.reload();
}