// Get the Sidebar
var mySidebar = document.getElementById("sidebar");


// Toggle between showing and hiding the sidebar, and add overlay effect
function openside()
{
    if (mySidebar.style.display === 'block')
    {
        mySidebar.style.display = 'none';

    } else
    {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function closeside()
{
    mySidebar.style.display = "none";

}