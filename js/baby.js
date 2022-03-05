import {footer} from "../components/footer.js"
let footer_final=document.getElementById("footer_final")
footer_final.innerHTML=footer()

import {navbar} from "../components/navbar.js"
let header_section=document.getElementById("header_section")
header_section.innerHTML=navbar()




let sortlow=document.getElementById("sort_low")
let sorthigh=document.getElementById("sort_high")


let chekout_data_base=JSON.parse(localStorage.getItem("chekout_data_base"))

if(chekout_data_base==null)
{
    localStorage.setItem("chekout_data_base",JSON.stringify([]))
}


var list1=
[
    {id:1,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    {id:2,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    {id:3,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    {id:4,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    {id:5,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    {id:6,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"}

]

var deal=
[
    {id:1,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    {id:2,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"1.9",
    star_url:"../icons/star-16.png",price:"199",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:3,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"3.9",
    star_url:"../icons/star-16.png",price:"299",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:4,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"1.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:5,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"499",price_old:"500",symbol:"₹",off:"30%"}

    ,

    
    {id:6,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"599",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:7,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"2.9",
    star_url:"../icons/star-16.png",price:"699",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:8,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"1.9",
    star_url:"../icons/star-16.png",price:"799",price_old:"500",symbol:"₹",off:"30%"}
,
    {id:9,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"899",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:10,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"999",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:11,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"1099",price_old:"500",symbol:"₹",off:"30%"}
]



 

slider_list_1(list1)
 

deal_list(deal)

function deal_list(deal)
{
    deal.forEach(element => {
        createitemsdeallist(element)
    });
   
}

function slider_list_1(list1)
{
    list1.forEach(element => {
        createitems1(element)
       
    });
   
}



function createitems1(element)
{
     let slider1=document.getElementById("slider1")
   
    let product_cart=document.createElement("div")
    product_cart.className="products food-card .magic-shadow-sm"
    product_cart.id="product1"
     
    let best_seller_tag=document.createElement("div")
    best_seller_tag.className="best_seller_tag"
    best_seller_tag.innerText=element.tag


   let product_images=document.createElement("img")
   product_images.src=element.product_images
   product_images.className="product_images2"
   product_images.src=element.image_src

   let para=document.createElement("p")
   para.className="para"
   para.innerText=element.para;


   let star=document.createElement("div")
   star.className="star"

   let flex=document.createElement("div")
   flex.className="flex"

   let rate=document.createElement("p")
   rate.className="rate"
   rate.innerText=element.rate


   let star_icon=document.createElement("img")
   star_icon.className="star_icon"
   star_icon.src=element.star_url
   
   flex.append(rate,star_icon)
   star.append(flex)

   let h4=document.createElement("h4")
   h4.innerText=element.symbol+""+element.price


   let add_card=document.createElement("div")
   add_card.className="add_card"
   add_card.innerText=" ADD TO CARD"

   add_card.onclick=function()
        {
            addToLocalCard(element)
        }

    
   

   product_cart.append(best_seller_tag,product_images,para,star,h4,add_card)
   slider1.append(product_cart) 

   console.log(product_cart)
}


function createitemsdeallist(element)
{
    let deal_of_day_right=document.getElementById("deal_of_day_right")
   
    let product_cart=document.createElement("div")
    product_cart.className="products food-card .magic-shadow-sm"
    product_cart.id="product1"
     
    let best_seller_tag=document.createElement("div")
    best_seller_tag.className="best_seller_tag"
    best_seller_tag.innerText=element.tag


   let product_images=document.createElement("img")
   product_images.src=element.product_images
   product_images.className="product_images2"
   product_images.src=element.image_src

   let para=document.createElement("p")
   para.className="para"
   para.innerText=element.para;


   let star=document.createElement("div")
   star.className="star"

   let flex=document.createElement("div")
   flex.className="flex"

   let rate=document.createElement("p")
   rate.className="rate"
   rate.innerText=element.rate


   let star_icon=document.createElement("img")
   star_icon.className="star_icon"
   star_icon.src=element.star_url
   
   flex.append(rate,star_icon)
   star.append(flex)

   let h4=document.createElement("h4")
   h4.innerText=element.symbol+""+element.price

   let add_card=document.createElement("div")
   add_card.className="add_card"
   add_card.innerText=" ADD TO CARD"
   add_card.onclick=function()
   {
       addToLocalCard(element)
   }
   product_cart.append(best_seller_tag,product_images,para,star,h4,add_card)
   deal_of_day_right.append(product_cart) 

   //console.log(product_cart)
}

function addToLocalCard(element)
{
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
    console.log("ldata",ldata)
    localStorage.setItem("chekout_data_base",JSON.stringify(ldata))
    myFunction_fresh()
}
else{
    myFunction()
   // alert("Already Added")
}
     

    try{
        //c_count.innerText=ldata.length
       // alert(ldata.length)
    }
    catch(err){
        //c_count.innerText=0
       // alert(ldata.length)
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

 let the_sort=document.getElementById("the_sort")

 let sort_rating=document.getElementById("sort_rating")
 let sort_low=document.getElementById("sort_low")
 let sort_high=document.getElementById("sort_high")
 var x = document.getElementById("myDIV"); 
 x.style.display = "none";


 the_sort.addEventListener("click",magic)
 sort_rating.addEventListener("click",sort_rating_magic)
 sort_low.addEventListener("click",sort_low_magic)
 sort_high.addEventListener("click",sort_high_magic)


function sort_rating_magic()
{
    magic()  
}
function sort_low_magic()
{
    magic()  
}
function sort_high_magic()
{
    magic()  
}

 function magic()
 {
    var x = document.getElementById("myDIV"); 
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
 }


 sortlow.addEventListener("click",loaddesc)
 sorthigh.addEventListener("click",loadinsc)
 sort_rating.addEventListener("click",loadrateing)
 function loaddesc()
 {
    let deal_of_day_right=document.getElementById("deal_of_day_right")
    deal_of_day_right.innerText=""
    deal_list(deal.sort(dynamicsort("id","insc")))
    
 }
 function loadinsc()
 {
    let deal_of_day_right=document.getElementById("deal_of_day_right")
    deal_of_day_right.innerText=""
    deal_list(deal.sort(dynamicsort("id","desc")));
 }
  
 function loadrateing()
 {
    let deal_of_day_right=document.getElementById("deal_of_day_right")
    deal_of_day_right.innerText=""
    deal_list(deal.sort(dynamicsort("rate","desc")));
 }

// console.log(cart.sort(dynamicsort("qty","asc")));
 function dynamicsort(property,order) {
    var sort_order = 1;
    if(order === "desc"){
        sort_order = -1;
    }
    return function (a, b){
        // a should come before b in the sorted order
        if(a[property] < b[property]){
                return -1 * sort_order;
        // a should come after b in the sorted order
        }else if(a[property] > b[property]){
                return 1 * sort_order;
        // a and b are the same
        }else{
                return 0 * sort_order;
        }
    }
}
 
 
