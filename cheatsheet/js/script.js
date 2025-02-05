function navigate(url)
{
    window.location.href = url;
}
function searchCheatSheets()
{
    var input, filter, categories,butttons;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    categories = document.getElementById('categories');
    buttons = categories.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            buttons[i].style.display = "";
        } else {
            buttons[i].style.display = "none";
        }
    }
}
function loadContent()
{
    
}