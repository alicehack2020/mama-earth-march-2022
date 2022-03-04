import {footer} from "../components/footer.js"
let footer_final=document.getElementById("footer_final")
footer_final.innerHTML=footer()

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
    {id:7,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    {id:8,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:8,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:8,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:8,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"}

    ,

    
    {id:8,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:8,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:8,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"}
,
    {id:8,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:8,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

    
    {id:8,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
    star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"}
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

 