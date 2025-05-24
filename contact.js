//selecting side nav,menuicon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closevav=document.getElementById("closenav")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

closevav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})