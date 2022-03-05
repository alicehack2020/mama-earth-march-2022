import {footer} from "../components/footer.js"
 
let footer_final=document.getElementById("footer_final")
footer_final.innerHTML=footer()

import {navbar} from "../components/navbar.js"
let header_section=document.getElementById("header_section")
header_section.innerHTML=navbar()


let chekout_data_base=JSON.parse(localStorage.getItem("chekout_data_base"))

if(chekout_data_base==null)
{
    localStorage.setItem("chekout_data_base",JSON.stringify([]))
}


// {id:1,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
// star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

var ldata=JSON.parse(localStorage.getItem("SaveInOnePlace"))

let image_main=document.querySelector(".image_main")
image_main.src=ldata.image_src

let main_below=document.querySelector(".main_below")
main_below.src=ldata.image_src 

let product_heading=document.querySelector(".product_heading")
product_heading.innerText=ldata.para

let product_price=document.querySelector(".product_price")
product_price.innerText=ldata.symbol+ldata.price
 
let p_price=document.getElementById("p_price")
p_price.innerText=ldata.symbol+ldata.price

let app_shop_card=document.getElementById("app_shop_card")

let element=JSON.parse(localStorage.getItem("SaveInOnePlace"))

app_shop_card.addEventListener("click",addThedata)

function addThedata()
{
    addToLocalCard(element)
}

 


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesA");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function addToLocalCard(element)
{

    console.log(element);
    var ldata=JSON.parse(localStorage.getItem("chekout_data_base"))
    var ans=ldata.filter(res=>{
        
        if(res.id==element.id)
        {
                return true
        }

    })

if(ans==false)
{
    ldata.push(element)
   
    localStorage.setItem("chekout_data_base",JSON.stringify(ldata))
    myFunction_fresh()
}
else{
    myFunction()
  
}
     

     
}


function myFunction() {
  var x = document.getElementById("snackbar_fail");
  x.className = "fail";
  snackbar_fail.innerText="Already Added"
  setTimeout(function()
  {
      
       x.className = x.className.replace("fail", "");
      
  }, 2000);
}


function myFunction_fresh() {
  var x = document.getElementById("snackbar_added");
  x.className = "added";
  snackbar_added.innerText="Added Successfully"
  setTimeout(function()
  {
       x.className = x.className.replace("added", "");
      
  }, 2000);
}
