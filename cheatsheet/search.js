function search()
{
    let input, filter, ul, li, item, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++)
    {
        item = li[i];
        if (item.innerHTML.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
        } else
        {
            li[i].style.display = "none";
        }
    }
}