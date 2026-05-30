fetch("https://dummyjson.com/products").then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data.products)
    let body =document.querySelector("body")
    data.products.map((a)=>{
        body.innerHTML+=`<div style="border:1px solid black; width:250px; margin:20px; padding:10px; background-color: #c67deea7; border-radius: 10px; box-shadow: 2px 2px 2px  rgba(0, 0, 0, 0.5);">
        <img src="${a.thumbnail}" width="100%"> <h2> ${a.title}</h2> <h3> ${a.price}</h3>
        <button onclick="addtoCart(${a.id})" style="margin-left:28%; font-size:20px; background-color: #f1bd38ed; border-radius: 10px; padding:15px "  > add </button`


        
    })
    window.allP=data.products
})



console.log(window);

let cart =[]
function addtoCart(id){
    console.log(id);
 let data=window.allP.find((a)=>{
        return a.id==id


    })
    cart.push(data)

    console.log(data);
    localStorage.setItem("item",JSON.stringify(cart))
}