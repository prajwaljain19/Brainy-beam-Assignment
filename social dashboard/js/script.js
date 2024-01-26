var sidevarOpen = false;
var sidebar = document.getElementById("sidebar");


function openSidebar() {
    if(!sidebar) { 
        sidebar.classList.add("sidebar-responsive");
        sidebaropen = true;
}
}

function closeSidebar() { 
    sidebar.classList.remove("sidebar-responsive");
    sidebaropen = false;
}