// set togle to DOM


var navlink = document.getElementById("nav-link");
var showmenu =document.getElementById("showmenu");
var hidemenu = document.getElementById("hidemenu");
var sendData = document.getElementById("sendData");




// Toggle menu function
    hidemenu.onclick = () => {
    navlink.style.right = "-220px";
}
    showmenu.onclick = () => {
    navlink.style.right = "0";
}

