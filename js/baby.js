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
    {id:21,p_name:"Soothing Massage Oil ",tag:"BEST SELLER",image_src:"../images/17.jpg",para:"Massaging your baby is a great way to help them gain mobility faster.",rate:"4.9",
    star_url:"../icons/star-16.png",price:"299",price_old:"400",symbol:"₹",off:"30%"},

    {id:22,p_name:"Milky Soft Face Cream ",tag:"BEST SELLER",image_src:"../images/18.jpg",para: "Hi! I am Mamaearth's Milky Soft Face Cream. With the goodness of Almond Oil and Murumuru Butter",rate:"4.9",
    star_url:"../icons/star-16.png",price:"599",price_old:"800",symbol:"₹",off:"30%"},
    
    {id:23,p_name:"welcome-baby-essential-kit ",tag:"BEST SELLER",image_src:"../images/9.jpg",para: "Hi! I am the Welcome Baby Essential Kit and I come with laundry detergent, moisturizing soap bars,",rate:"4.9",
    star_url:"../icons/star-16.png",price:"99",price_old:"400",symbol:"₹",off:"30%"},

    {id:24,p_name:"Mamaearth Fruit Punch Toothpaste",tag:"BEST SELLER",image_src:"../images/20.jpg",para:"Hi! I am Mamaearth Fruit Punch Toothpaste. I love to see your kids smile.",rate:"4.9",
    star_url:"../icons/star-16.png",price:"99",price_old:"200",symbol:"₹",off:"30%"},


    {id:25,p_name:"baby-wipes-72pc ",tag:"BEST SELLER",image_src:"../images/8.jpg",para:"Hi, I am Mamaearth Bamboo Based Baby Wipes for your baby’s everyday needs. ",rate:"4.9",
    star_url:"../icons/star-16.png",price:"299",price_old:"300",symbol:"₹",off:"30%"},

]

var deal=
[
    {id:1,p_name:" Apple Body Wash ",tag:"BEST SELLER",image_src:"../images/one.jpg",para:"Hi! I am Mamaearth Agent Apple Body Wash for your little bundle of joy. ",rate:"3.9",
    star_url:"../icons/star-16.png",price:"299",price_old:"400",symbol:"₹",off:"30%"},

    {id:2,p_name:"mango-body-wash ",tag:"BEST SELLER",image_src:"../images/2.jpg",para:"Hi! I am Mamaearth Major Mango Body Wash for your little bundle of joy.",rate:"1.9",
    star_url:"../icons/star-16.png",price:"199",price_old:"299",symbol:"₹",off:"30%"},

    {id:3,p_name:" Strawberry Body Lotion for Kids ",tag:"BEST SELLER",image_src:"../images/3.jpg",para:"Hi, I am Mamaearth Super Strawberry Body Lotion crafted especially for your li’l one",rate:"3.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"490",symbol:"₹",off:"30%"},

    {id:4,p_name:" Orange Body Lotion For Kids ",tag:"BEST SELLER",image_src:"../images/4.jpg",para:" Hi! I am Mamaearth Original Orange Body Lotion! Crafted with the natural goodness of Orange and Shea butter ",rate:"2.9",
    star_url:"../icons/star-16.png",price:"299",price_old:"400",symbol:"₹",off:"30%"},

    {id:5,p_name:" major-mango-body-lotion-for-kids ",tag:"BEST SELLER",image_src:"../images/5.jpg",para:" Hi! I am Mamaearth Major Mango Body Lotion, I am here to protect and nourish your munchkin’s delicate skin. ",rate:"2.9",
    star_url:"../icons/star-16.png",price:"199",price_old:"400",symbol:"₹",off:"30%"},

    {id:6,p_name:" agent-apple-body-lotion ",tag:"BEST SELLER",image_src:"../images/6.jpg",para:"Hi! I am Mamaearth Agent Apple Body Wash for your little bundle of joy. ",rate:"3.0",
    star_url:"../icons/star-16.png",price:"299",price_old:"450",symbol:"₹",off:"30%"},

    {id:7,p_name:" Nourishing Hair Oil for babies ",tag:"BEST SELLER",image_src:"../images/7.jpg",para:" Hi! I am Mamaearth Nourishing Baby Hair Oil. I am non-sticky, mild and gentle on baby’s scalp.",rate:"4.9",
    star_url:"../icons/star-16.png",price:"299",price_old:"399",symbol:"₹",off:"30%"},

    {id:8,p_name:"baby-wipes-72pc ",tag:"BEST SELLER",image_src:"../images/8.jpg",para:"Hi, I am Mamaearth Bamboo Based Baby Wipes for your baby’s everyday needs. ",rate:"4.9",
    star_url:"../icons/star-16.png",price:"299",price_old:"300",symbol:"₹",off:"30%"},

    {id:9,p_name:"welcome-baby-essential-kit ",tag:"BEST SELLER",image_src:"../images/9.jpg",para: "Hi! I am the Welcome Baby Essential Kit and I come with laundry detergent, moisturizing soap bars,",rate:"4.9",
    star_url:"../icons/star-16.png",price:"99",price_old:"400",symbol:"₹",off:"30%"},

    {id:10,p_name:" dusting-powder ",tag:"BEST SELLER",image_src:"../images/10.jpg",para:"Hi! I am Mamaearth Dusting Powder for Babies. I am dermatologically tested, 100% natural, non-lung-clogging & talc-free baby powder for rash.",rate:"5.0",
    star_url:"../icons/star-16.png",price:"99",price_old:"200",symbol:"₹",off:"30%"},

    {id:11,p_name:" Gentle Cleansing Shampoo",tag:"BEST SELLER",image_src:"../images/one.jpg",para:"Hi! I am Mamaearth Gentle Cleansing Shampoo. I understand that shampooing is not an easy task and involves effort in real cleaning.  ",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    {id:12,p_name:"Baby Essential Hamper Kit ",tag:"BEST SELLER",image_src:"../images/12.jpg",para:" Hi! I am the Baby Essential Hamper Kit and I can’t wait to come on this parenting journey with you. I come prepared with everything you need. ",rate:"1.9",
    star_url:"../icons/star-16.png",price:"99",price_old:"100",symbol:"₹",off:"30%"},

    {id:13,p_name:" Foaming Facewash for Kids ",tag:"BEST SELLER",image_src:"../images/13.jpg",para:"Hi! I am Mamaearth Foaming Face Wash for Kids. Dermatologically tested, and pH balanced my Tear-free and Soap-free formula cleanses and moisturizes your baby’s face gently. Infused with Coconut-based Cleansers.",rate:"4.9",
    star_url:"../icons/star-16.png",price:"499",price_old:"600",symbol:"₹",off:"30%"},

    {id:14,p_name:"Winter Essential Kit for Babies ",tag:"BEST SELLER",image_src:"../images/14.jpg",para:" Winters mean a little extra dose of nourishment and care for your little one. Confused as to where to start? Do not worry! I am the Winter Essential Kit For Babies and I have got everything you need for your child.",rate:"4.9",
    star_url:"../icons/star-16.png",price:"999",price_old:"2000",symbol:"₹",off:"30%"},

    {id:15,p_name:"Sulfate Free Awesome Orange Toothpaste",tag:"BEST SELLER",image_src:"../images/15.jpg",para:"Hi! I am Mamaearth's awesome orange toothpaste. I love to see your baby smile. ",rate:"4.9",
    star_url:"../icons/star-16.png",price:"299",price_old:"400",symbol:"₹",off:"30%"},

    {id:16,p_name:"Mineral Based Sunscreen",tag:"BEST SELLER",image_src:"../images/16.jpg",para:" Exploring their environment is the first way how a baby is able to understand its surroundings.",rate:"4.9",
    star_url:"../icons/star-16.png",price:"99",price_old:"200",symbol:"₹",off:"30%"},

    {id:17,p_name:"Soothing Massage Oil ",tag:"BEST SELLER",image_src:"../images/17.jpg",para:"Massaging your baby is a great way to help them gain mobility faster.",rate:"4.9",
    star_url:"../icons/star-16.png",price:"299",price_old:"400",symbol:"₹",off:"30%"},

    {id:18,p_name:"Milky Soft Face Cream ",tag:"BEST SELLER",image_src:"../images/18.jpg",para: "Hi! I am Mamaearth's Milky Soft Face Cream. With the goodness of Almond Oil and Murumuru Butter",rate:"4.0",
    star_url:"../icons/star-16.png",price:"599",price_old:"800",symbol:"₹",off:"30%"},

    {id:19,p_name:"Deeply Nourishing Body Wash",tag:"BEST SELLER",image_src:"../images/19.jpg",para:"Bath time is a fun time with lots of bubbles around and water splashing over the tub.",rate:"3.9",
    star_url:"../icons/star-16.png",price:"499",price_old:"600",symbol:"₹",off:"30%"},

    {id:20,p_name:"Mamaearth Fruit Punch Toothpaste",tag:"BEST SELLER",image_src:"../images/20.jpg",para:"Hi! I am Mamaearth Fruit Punch Toothpaste. I love to see your kids smile.",rate:"2.9",
    star_url:"../icons/star-16.png",price:"99",price_old:"200",symbol:"₹",off:"30%"},

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

   product_images.onclick=function()
    {
        SaveInOnePlace(element)
        window.location="../html/desriptionpage.html"
    }

   let para=document.createElement("p")
   para.className="para"
   para.innerText=element.p_name;


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

    product_cart.onclick=function()
    {
        SaveInOnePlace(element)
        window.location="../html/desriptionpage.html"
    }
     
    let best_seller_tag=document.createElement("div")
    best_seller_tag.className="best_seller_tag"
    best_seller_tag.innerText=element.tag


   let product_images=document.createElement("img")
   product_images.src=element.product_images
   product_images.className="product_images2"
   product_images.src=element.image_src

   product_images.onclick=function()
   {
       SaveInOnePlace(element)
       window.location="../html/desriptionpage.html"
   }
    

   let para=document.createElement("p")
   para.className="para"
   para.innerText=element.p_name;


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


function SaveInOnePlace(element)
{
    //console.log(element);
    localStorage.setItem("SaveInOnePlace",JSON.stringify(element))   
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
 
 
