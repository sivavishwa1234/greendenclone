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

//product search functionality
var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function(event){
   var enteredValue= event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count++){

    var productname = productlist[count].querySelector("h2").textContent

    if(productname.toUpperCase().indexOf(enteredValue)<0)
    {
        productlist[count].style.display="none"
    }
    else{
        productlist[count].style.display="block"
    }

    }

})