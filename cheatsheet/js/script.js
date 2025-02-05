function navigate(url)
{
    window.location.href = url;
}
function searchCheatSheets()
{
    var input, filter, categories,buttons;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    categories = document.getElementById('categories');
    buttons = categories.getElementsByTagName('a');

    for (var i = 0; i < buttons.length; i++) 
    {
        let span = buttons[i].getElementsByTagName('span')[0];
        if (span.innerHTML.toUpperCase().indexOf(filter) > -1) {
            buttons[i].style.display = "";
        } else {
            buttons[i].style.display = "none";
        }
    }
}
function loadContent()
{
    
}