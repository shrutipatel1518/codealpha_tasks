//loading data stored not get refreshed
let h2 = document.querySelector("h2")
let data = JSON.parse(localStorage.getItem("data"))
    console.log(data,"data")

    if(data){
        h2.innerText=data.name
    }


//signup page
let form =document.querySelector("#dataform")
form.addEventListener("submit",(e)=>{
    e.preventDefault()  //its removing default referesing setting of browser
  console.log("heheh");
  
    console.log(form[0].value);
    console.log(form[1].value);
    console.log(form[2].value);

    let userdata ={
        name:form[0].value,
        email:form[1].value,
        pass:form[2].value
    }

   localStorage.setItem('data',JSON.stringify(userdata))
   let data =localStorage.getItem("user")
   console.log(data)
})



//login js
let loginf = document.querySelector("#loginform")
loginf.addEventListener("submit",(e)=>{
    e.preventDefault()
    let loginsavedata = JSON.parse(localStorage.getItem("data"))  //fetching 
    console.log(loginsavedata)
    let logininput={
        email:loginf[0].value,
        pass:loginf[1].value
    }
    if(logininput.email==loginsavedata.email && logininput.pass==loginsavedata.pass)
        alert("login done")
    else
        alert("login fail")
})









