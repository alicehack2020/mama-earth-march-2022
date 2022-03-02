var list1=
[
    {id:1,tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"$399"},

    {id:2,tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"$399"},

    {id:3,tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"$399"},

    {id:4,tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"$399"},

    {id:5,tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"$399"}
]

var deal=
[
    {id:1,tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"$399"},

    {id:2,tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"$399"}
]


slider_list_1(list1)
slider_list_2(list1)
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
   h4.innerText=element.price

   let add_card=document.createElement("div")
   add_card.className="add_card"
   add_card.innerText=" ADD TO CARD"

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
   h4.innerText=element.price

   let add_card=document.createElement("div")
   add_card.className="add_card"
   add_card.innerText=" ADD TO CARD"

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
   h4.innerText=element.price

   let add_card=document.createElement("div")
   add_card.className="add_card"
   add_card.innerText=" ADD TO CARD"

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
   h4.innerText=element.price

   let add_card=document.createElement("div")
   add_card.className="add_card"
   add_card.innerText=" ADD TO CARD"

   product_cart.append(best_seller_tag,product_images,para,star,h4,add_card)
   deal_of_day_right.append(product_cart) 

   //console.log(product_cart)
}
 
 