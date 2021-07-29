function pricingToggleBtnClick() {
    var x= document.getElementById("checkBox");
    var y= document.querySelector(".personal-p2");
    var ep2= document.querySelector(".enter-p2");
    var eep2= document.querySelector(".Enterprise-p2");

    var py= document.querySelector(".personal-year");
    var ey= document.querySelector(".enter-year");
    var eey= document.querySelector(".enterPrise-year");

    // start click btn event
    x.addEventListener('change', function() {
    
        if(this.checked) {
            y.innerHTML="$299";
            ep2.innerHTML="$599";
            eep2.innerHTML="$1990";
    
            py.innerHTML="Year";
            ey.innerHTML="year";
            eey.innerHTML="year"    
        }
        else {
            y.innerHTML="$29";
            ep2.innerHTML="$59";
            eep2.innerHTML="$99";
    
            py.innerHTML="Month"
            ey.innerHTML="Month"
            eey.innerHTML="Month"
        }

    })
}

pricingToggleBtnClick();

var preLoader=document.querySelector(".pre-loader");
function displayWebsite(){
    preLoader.style.display="none";
    console.log("loaded")

}
var navMenu=document.querySelector("#main-menu");
var cross=document.querySelector(".cross");
//
function openMenu(){
   console.log("hamburger")
   navMenu.classList.add("enter");
   cross.style.display="block"

}

// remove classes

function crossMenu(){
     console.log("cross");
     navMenu.classList.remove("enter");
     cross.style.display="none"

}

// window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth'
//   });
  