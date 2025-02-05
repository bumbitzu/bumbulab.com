function toggle(evt,id)
{

    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }
    let barItem = document.getElementsByClassName("bar-item");
    for (let i = 0; i < barItem.length; i++)
    {
        barItem[i].className = barItem[i].className.replace(" active", "");
    }
    let content = document.getElementById(id);
    content.style.display = "block";
    evt.currentTarget.className += " active";
    
    //add a script at the end of html content
    
}
document.getElementById("defaultOpen").click();
