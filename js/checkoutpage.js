import {footer} from "../components/footer.js"
let footer_final=document.getElementById("footer_final")
footer_final.innerHTML=footer()

import {navbar} from "../components/navbar.js"
let header_section=document.getElementById("header_section")
header_section.innerHTML=navbar()




let product_list=document.getElementById("product_list")
product_list.innerText=""

let Total_bill_amount=document.getElementById("Total_bill_amount")
let item_count=document.getElementById("item_count")
let order_summary=document.querySelector(".order_summary")
let order_now=document.querySelector(".order_now")

order_now.addEventListener("click",goToThankYouPage)
function goToThankYouPage()
{
    window.location="../html/thank_you_page.html"
}


let chekout_data_base=JSON.parse(localStorage.getItem("chekout_data_base"))

if(chekout_data_base==null)
{
    localStorage.setItem("chekout_data_base",JSON.stringify([]))
}
let d=chekout_data_base
let total=0
d.forEach(hh=>{
    total=total+Number(hh.price);
})

Total_bill_amount.innerText="₹"+total 
item_count.innerText="( "+d.length+" Items)"

 


//order_now.addEventListener("click",order_now_data)

// function order_now_data()
// {
//     window.location="thank_you_page.html" 
// }


// var checkdata=
// [
//     {id:1,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
//     star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

//     {id:2,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
//     star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

//     {id:1,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
//     star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

//     {id:1,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
//     star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

//     {id:1,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
//     star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"},

//     {id:1,p_name:"oild bottel",tag:"BEST SELLER",image_src:"../images/product1.jpg",para:"Essential Anti-Hair Fall Kit",rate:"4.9",
//     star_url:"../icons/star-16.png",price:"399",price_old:"500",symbol:"₹",off:"30%"}



// ]

 
checkOutIteam(chekout_data_base)

function checkOutIteam(chekout_data_base)
{
    let product_list=document.getElementById("product_list")
    product_list.innerText=""

    chekout_data_base.forEach((element)=>{
        let product_list=document.getElementById("product_list")

        let product_one=document.createElement("div")
        product_one.id="product_one"
    
        let left=document.createElement("div")
        left.className="left"
    
        let product_img=document.createElement("img")
        product_img.className="product_img"
        product_img.src=element.image_src
        
        left.append(product_img)
    
        let right=document.createElement("div")
        right.className="right"
    
        let product_name=document.createElement("div")
        product_name.id="product_name"
        product_name.innerText=element.p_name
    
    
        right.append(product_name)
    
        let data=document.createElement("div")
        data.className="flex data"
    
        let price=document.createElement("h2")
        price.id="product_price"
        price.innerText="₹"+element.price
    
        let product_old_cost=document.createElement("h2")
        product_old_cost.id="product_old_cost"
        product_old_cost.innerText="₹"+element.price_old
    
        let product_off=document.createElement("h2")
        product_off.id="product_off"
        product_off.innerText=element.off
    
    
        data.append(price,product_old_cost,product_off)
        right.append(data)
    
        let delete_icon=document.createElement("img")
        delete_icon.className="delete_icon"
        delete_icon.src="../icons/icons8-delete-100.png"

        delete_icon.onclick=function()
        {
            removeToLocalCard(element)
        }
    
        let d=document.createElement("div")
        d.append(delete_icon)
    
       product_one.append(left,right,d)
       product_list.append(product_one)
    })
    
   
}



function removeToLocalCard(element)
{
    // console.log(element);
     var ldata=JSON.parse(localStorage.getItem("chekout_data_base"))
    

    var list=[]
    
       ldata.filter(res=>{
        if(res.id==element.id)
        {
             
        }
        else{
            list.push(res)
        }

    })

    console.log(list);
    myFunction_fresh()
    //alert(list)
     
      localStorage.setItem("chekout_data_base",JSON.stringify(list))
     

     var  localdata=JSON.parse(localStorage.getItem("chekout_data_base"))
     
     checkOutIteam(localdata) 
     let total=0
    localdata.forEach(hh=>{
        total=total+Number(hh.price);
    })

    let Total_bill_amount=document.getElementById("Total_bill_amount")
    Total_bill_amount.innerText="₹"+total
        

}

function myFunction_fresh() {
    var x = document.getElementById("snackbar_added");
    x.className = "added";
    snackbar_added.innerText="Removed Successfully"
    setTimeout(function()
    {
       
         x.className = x.className.replace("added", "");
        
    }, 2000);
  }