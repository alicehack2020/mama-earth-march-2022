let loginicon=document.querySelector(".loginform")

let center_pop_up=document.querySelector(".center_pop_up")

loginicon.addEventListener("click",openLoginForm)

function openLoginForm()
{
   center_pop_up.style.display = "block";
}






let chekout_data_base=JSON.parse(localStorage.getItem("chekout_data_base"))

if(chekout_data_base==null)
{
    localStorage.setItem("chekout_data_base",JSON.stringify([]))
}


var list1=
[
    {id:101,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"50%"},

    {id:102,p_name:"Onion Shampoo with Onion and Plant Keratin",tag:"BEST SELLER",image_src:"../images/product2.jpg",para:"Onion Shampoo with Onion and Plant Keratin for Hair Fall Control - 250ml",rate:"4.0",
    star_url:"../icons/star-16.png",price:"199",price_old:"500",symbol:"₹",off:"40%"},

    {id:103,p_name:"Vitamin C Foaming Face Wash",tag:"BEST SELLER",image_src:"../images/product3.jpg",para:"Vitamin C Foaming Face Wash with Vitamin C and Turmeric for Skin Illumination - 150ml",rate:"3.9",
    star_url:"../icons/star-16.png",price:"599",price_old:"700",symbol:"₹",off:"10%"},

    {id:104,p_name:"Ubtan Face Wash with Turmeric ",tag:"BEST SELLER",image_src:"../images/product4.jpg",para:"Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 100ml",rate:"4.7",
    star_url:"../icons/star-16.png",price:"999",price_old:"1000",symbol:"₹",off:"30%"},

    {id:105,p_name:"Bye Bye Blemishes Face Cream ",tag:"BEST SELLER",image_src:"../images/product5.jpg",para:"Bye Bye Blemishes Face Cream for Reducing Pigmentation and Blemishes with Mulberry Extract and Vitamin C -30ml",rate:"5.0",
    star_url:"../icons/star-16.png",price:"599",price_old:"600",symbol:"₹",off:"30%"},

    {id:106,p_name:"Tea Tree Facewash",tag:"BEST SELLER",image_src:"../images/product6.jpg",para:"Tea Tree Facewash for acne and pimples, 100ml",rate:"4.4",
    star_url:"../icons/star-16.png",price:"299",price_old:"500",symbol:"₹",off:"30%"}

]

var list2=
[
    {id:107,p_name:"Anti-Hair Fall Spa Kit",tag:"BEST SELLER",image_src:"../images/product7.jpg",para:"Anti-Hair Fall Spa Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"168",price_old:"500",symbol:"₹",off:"50%"},

    {id:108,p_name:"Baby Essential Hamper Kit",tag:"BEST SELLER",image_src:"../images/product8.jpg",para:"Baby Essential Hamper Kit ",rate:"4.0",
    star_url:"../icons/star-16.png",price:"199",price_old:"500",symbol:"₹",off:"40%"},

    {id:109,p_name:"Acne Marks Reduction Kit",tag:"BEST SELLER",image_src:"../images/product9.jpg",para:"Acne Marks Reduction Kit",rate:"3.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"700",symbol:"₹",off:"10%"},

    {id:110,p_name:"Tea Tree Anti-Dandruff Hair Regime Kit",tag:"BEST SELLER",image_src:"../images/product10.jpg",para:"Tea Tree Anti-Dandruff Hair Regime Kit",rate:"4.7",
    star_url:"../icons/star-16.png",price:"999",price_old:"1000",symbol:"₹",off:"30%"},

    {id:111,p_name:"Aqua Glow Skin Refreshing ",tag:"BEST SELLER",image_src:"../images/product11.jpg",para:"Aqua Glow Skin Refreshing Kit for Hydrated & Fresh Skin",rate:"5.0",
    star_url:"../icons/star-16.png",price:"599",price_old:"600",symbol:"₹",off:"30%"},

    {id:112,p_name:"Tan Removal Regimen Kit",tag:"BEST SELLER",image_src:"../images/product12.jpg",para:"Tea Tree Facewash for acne and pimples, 100ml",rate:"4.4",
    star_url:"../icons/star-16.png",price:"299",price_old:"500",symbol:"₹",off:"30%"}

]




var deal=
[
    {id:113,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    {id:114,p_name:"Intense Hair Treatment Kit",tag:"BEST SELLER",image_src:"../images/product13.jpg",para:"Intense Hair Treatment Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"}
]



 

slider_list_1(list1)
slider_list_2(list2)
slider_list_3(list1)

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

function slider_list_2(list1)
{
    list1.forEach(element => {
        createitems2(element)
     
    });
   
}

function slider_list_3(list1)
{
    list1.forEach(element => {
        createitems3(element)
     
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
   product_images.className="product_images"
   product_images.src=element.image_src

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




function createitems2(element)
{
     let slider1=document.getElementById("slider2")
   
    let product_cart=document.createElement("div")
    product_cart.className="products food-card .magic-shadow-sm"
    product_cart.id="product1"
     
    let best_seller_tag=document.createElement("div")
    best_seller_tag.className="best_seller_tag"
    best_seller_tag.innerText=element.tag


   let product_images=document.createElement("img")
   product_images.src=element.product_images
   product_images.className="product_images"
   product_images.src=element.image_src

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

function createitems3(element)
{
     let slider1=document.getElementById("slider3")
   
    let product_cart=document.createElement("div")
    product_cart.className="products food-card .magic-shadow-sm"
    product_cart.id="product1"
     
    let best_seller_tag=document.createElement("div")
    best_seller_tag.className="best_seller_tag"
    best_seller_tag.innerText=element.tag


   let product_images=document.createElement("img")
   product_images.src=element.product_images
   product_images.className="product_images"
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
   product_images.className="product_images"
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

