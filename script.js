document.body.onload=addElement;


//var btn=document.createElement("footer")
// btn.style.width="100px"
// btn.style.height="100px"
// btn.style.background="red"
// btn.style.position="absolud"
// btn.style.top="0%"



// var btn1=document.createElement("footer")
// btn1.style.width="50px"
// btn1.style.height="50px"
// btn1.style.background="blue"
// btn1.style.position="absolud"
// btn1.style.top="0%"
// document.body.appendChild(btn)
// btn.appendChild(btn1)


// btn.addEventListener("mouseover",()=>{
//     btn1.style.background="yellow"
//     btn1.style.transition="all 1s ease-in-out"
// })
// btn.addEventListener("mouseout",()=>{
//     btn1.style.background="red"
//     btn1.style.transition="all 1s ease-in-out"
// })


function addElement(){

var nav=document.createElement("nav")
var main=document.createElement("main")
var footer=document.createElement("footer")

nav.style.width="100%"
nav.style.height="10%"
nav.style.display="flex"
nav.style.justifyContent="center"
nav.style.alignItems="center"
nav.style.backgroundColor="#ffffff"


main.style.width="100%"
main.style.height="83%"
main.style.display="flex"
main.style.justifyContent="center"
main.style.flexDirection="column"
//main.style.transition="all 0.5s ease-in-out"

    



footer.style.width="100%"
footer.style.height="7%"
footer.style.display="flex"
footer.style.justifyContent="center"
footer.style.backgroundColor="#CCCCCC"


document.body.appendChild(nav)
document.body.appendChild(main)
document.body.appendChild(footer)

/********************************************************* */
addNavbar(nav)
addElementmain(main)
addTermsAndConditions(footer)
}

function addNavbar(nav){
    var navbar = document.createElement("div");
    var list = document.createElement("div");
    var socialnetwork = document.createElement("div");

    navbar.style.width="30%"
    navbar.style.height="100%"
    navbar.style.display="flex"
    navbar.style.justifyContent="center"
    navbar.style.alignItems="center"

    list.style.width="40%"
    list.style.height="100%"
    list.style.display="flex"
    list.style.justifyContent="center"
    list.style.alignItems="center"
    
    

    socialnetwork.style.width="30%"
    socialnetwork.style.height="100%"
  
  

    nav.appendChild(navbar)
    nav.appendChild(list)
    nav.appendChild(socialnetwork)

    addImgTitle(navbar) 
    addListOption(list)
}


/************Imagen de Navbar*************/
function addImgTitle(navbar){

    var image = document.createElement("img");
    var a = document.createElement("a");

    image.src = "./image/Nombre.png";
    image.width =230;
    image.height =45;
    image.style.cursor="pointer";


    a.style.cursor="pointer";
    a.style.zIndex="150";
    a.appendChild(image);
    navbar.appendChild(a);

    a.href="./index.html"
}
/******************************************/



/*****************Lista Desordenada NAvbar*************************/
function addListOption(list){

    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");

    ul.style.width="100%"
    ul.style.height="100%"
    ul.style.display="flex"
    ul.style.justifyContent="center"
    ul.style.alignItems="center"
    ul.style.listStyle="none"
    ul.style.fontSize="20px"
    ul.style.padding="0"
    ul.style.color="#000000"
   

   


    li.style.width="28%"
    li.style.height="60%"
    li.style.display="flex"
    li.style.justifyContent="center"
    li.style.alignItems="center"
    li.style.margin="1%"
    li.classList.add('inria-sans-regular');

    li1.style.width="28%"
    li1.style.height="60%"
    li1.style.display="flex"
    li1.style.justifyContent="center"
    li1.style.alignItems="center"
    li1.style.margin="1%"
    li1.classList.add('inria-sans-regular');
    

    li2.style.width="28%"
    li2.style.height="60%"
    li2.style.display="flex"
    li2.style.justifyContent="center"
    li2.style.alignItems="center"
    li2.style.margin="1%"
    li2.classList.add('inria-sans-regular');

    li3.style.width="28%"
    li3.style.height="60%"
    li3.style.display="flex"
    li3.style.justifyContent="center"
    li3.style.alignItems="center"
    li3.style.margin="1%"
    li3.classList.add('inria-sans-regular');

    li.innerText="Services"
    li1.innerText="Sobre Mi"
    li2.innerText="Presupuesto"
    li3.innerText="Contacto"


    list.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

}



function addTermsAndConditions(footer){
    var termCond = document.createElement("h2");

    termCond.style.maxWidth="500px"
    termCond.style.height="20px"
    termCond.style.display="flex"
    termCond.style.justifyContent="center"
    termCond.style.alignItems="center"
    termCond.style.color="#000000"
    termCond.style.fontSize="14px"
    termCond.style.marginTop="1%"
    termCond.classList.add('inter');
    termCond.innerText="© copyright  P&R soluciones Informaticas | All rights reserved"
    footer.appendChild(termCond)
  
}
    


function addElementmain(main){
    var div=document.createElement("div")
    var div1=document.createElement("div")
    var div2=document.createElement("div")
    var div3=document.createElement("div")
    var div4=document.createElement("div")
    var div5=document.createElement("div")
    var div6=document.createElement("div")
  
    div.style.width="100%"
    div.style.height="50%"
    div.style.display="flex"
    
  


    div1.style.width="100%"
    div1.style.height="50%"
    div1.style.display="flex"


    div2.style.width="100%"
    div2.style.height="100%"
    div2.style.position="fixed"
    div2.style.backgroundPosition="50% 40%"
    div2.style.backgroundSize="30% "
    div2.style.opacity="0.4"
    div2.style.backgroundRepeat="no-repeat"
    div2.style.backgroundImage="url('./image/celltech_logoGrande_png.png')"
   // div2.style.zIndex="150"

//     // div2.addEventListener("mouseover",()=>{
//     //     div2.style.zIndex="140"
//     //     nameContact.style.transition="all 1s ease-in-out"
//     // })

    div3.style.width="100%"
    div3.style.height="83%"
    div3.style.display="flex"
    div3.style.justifyContent="center"
    div3.style.alignItems="center"
    div3.style.position="fixed"
    div3.style.backgroundColor="red"
    div3.style.opacity="0"
   
    
    
    

    div4.style.width="100%"
    div4.style.height="83%"
    div4.style.display="flex"
    div4.style.justifyContent="center"
    div4.style.alignItems="center"
    div4.style.position="fixed"
    div4.style.backgroundColor="blue"
    div4.style.opacity="0"
    
    div5.style.width="100%"
    div5.style.height="83%"
    div5.style.display="flex"
    div5.style.justifyContent="center"
    div5.style.alignItems="center"
    div5.style.position="fixed"
    div5.style.backgroundColor="yellow"
    div5.style.opacity="0"
    
    div6.style.width="100%"
    div6.style.height="83%"
    div6.style.display="flex"
    div6.style.justifyContent="center"
    div6.style.alignItems="center"
    div6.style.position="fixed"
    div6.style.backgroundColor="pink"
    div6.style.opacity="0"
  

  

    main.appendChild(div)
    main.appendChild(div1)
    main.appendChild(div2)
    main.appendChild(div3)
    main.appendChild(div4)
    main.appendChild(div5)
    main.appendChild(div6)
    



    addElementmainSection(div,div1,div3,div4,div5,div6)
}
function addElementmainSection(div,div1,div3,div4,div5,div6){

    var services=document.createElement("div")
    var aboutme=document.createElement("div")
    var budget=document.createElement("div")
    var contact=document.createElement("div")
  
    services.style.width="50%"
    services.style.height="100%"
    services.style.justifyContent="center"
    services.style.alignContent="center"
    services.style.zIndex="150"
  

    aboutme.style.width="50%"
    aboutme.style.height="100%"
    aboutme.style.justifyContent="center"
    aboutme.style.alignContent="center"
    aboutme.style.zIndex="150"
   

    budget.style.width="50%"
    budget.style.height="100%"
    budget.style.justifyContent="center"
    budget.style.alignContent="center"
    budget.style.zIndex="150"

    contact.style.width="50%"
    contact.style.height="100%"
    contact.style.justifyContent="center"
    contact.style.alignContent="center"
    contact.style.zIndex="150"
    
    div.appendChild(services)
    div.appendChild(aboutme)
    div1.appendChild(budget)
    div1.appendChild(contact)
    
    addnameSection(services,aboutme,budget,contact,div3,div4,div5,div6);


  


}



function addnameSection(services,aboutme,budget,contact,div3,div4,div5,div6){

    var nameServices = document.createElement("h2");
    var nameAboutMe = document.createElement("h2");
    var nameBudget = document.createElement("h2");
    var nameContact = document.createElement("h2");

    const sizeNamesServices=getComputedStyle(nameServices)
    const sizeNamesAboutMe=getComputedStyle(nameAboutMe)
    const sizeNamesBudget=getComputedStyle(nameBudget)
    const sizeNamesContact=getComputedStyle(nameContact)
   
    
    nameServices.style.width="100%"
    nameServices.style.height="100%"
    nameServices.style.display="flex"
    nameServices.style.justifyContent="center"
    nameServices.style.alignItems="center"
    nameServices.style.color="#ffffff"
    nameServices.style.fontSize="14px"
    nameServices.style.textAlign="center"
    nameServices.classList.add('inter');
    nameServices.style.margin="0%"
    nameServices.style.backgroundColor="#400335"
    /*nameServices.addEventListener("click",()=>{
        nameServices.style.color="#000000"
    })*/

    nameBudget.style.width="100%"
    nameBudget.style.height="100%"
    nameBudget.style.display="flex"
    nameBudget.style.justifyContent="center"
    nameBudget.style.alignItems="center"
    nameBudget.style.margin="0%"
    nameBudget.style.color="#000000"
    nameBudget.style.backgroundColor="#ffffff"
    nameBudget.style.fontSize="14px"
    nameBudget.style.textAlign="center"
    nameBudget.classList.add('inter');
    

    nameAboutMe.style.width="100%"
    nameAboutMe.style.height="100%"
    nameAboutMe.style.display="flex"
   
    nameAboutMe.style.justifyContent="center"
    nameAboutMe.style.alignItems="center"
    nameAboutMe.style.margin="0%"
    nameAboutMe.style.color="#ffffff"
    nameAboutMe.style.backgroundColor="#000000"
    nameAboutMe.style.fontSize="14px"
    nameAboutMe.style.textAlign="center"
    nameAboutMe.classList.add('inter');


    nameContact.style.width="100%"
    nameContact.style.height="100%"
    nameContact.style.display="flex"
    nameContact.style.justifyContent="center"
    nameContact.style.alignItems="center"
    nameContact.style.margin="0%"
    nameContact.style.backgroundColor="#107C1D"
    nameContact.style.color="#ffffff"
    nameContact.style.fontSize="14px"
    nameContact.style.textAlign="center"
    nameContact.classList.add('inter');
    nameContact.classList.add('inter');

    nameServices.innerText="Servicios"
    nameBudget.innerText="Presupuesto"
    nameAboutMe.innerText="Sobre Mi"
    nameContact.innerText="Contacto"
    
    services.appendChild(nameServices)
    aboutme.appendChild(nameAboutMe)
    budget.appendChild(nameBudget)
    contact.appendChild(nameContact)




  


    nameServices.addEventListener("mouseover",()=>{
       
        nameServices.style.width="20%"
        nameServices.style.cursor="pointer"
        nameServices.style.transition="all 1s ease-in-out"

        nameAboutMe.style.width="100%"
        nameBudget.style.width="100%"
        nameContact.style.width="100%"

      
        div3.style.width="100%"
        div3.style.height="83%"
        div3.style.display="flex"
        div3.style.opacity="1"
        div3.style.transition="all 1s ease-in-out"
        div4.style.opacity="0"
        div5.style.opacity="0"
        div6.style.opacity="0"
        
      
    })




    
    nameAboutMe.addEventListener("mouseover",()=>{
       
        nameAboutMe.style.width="20%"
        nameAboutMe.style.cursor="pointer"
        nameAboutMe.style.transition="all 1s ease-in-out"
    
        nameServices.style.width="100%"
        nameBudget.style.width="100%"
        nameContact.style.width="100%"

  
        div4.style.width="100%"
        div4.style.height="83%"
        div4.style.display="flex"
        div4.style.transition="all 1s ease-in-out"
        div4.style.opacity="1"
        div3.style.opacity="0"
        div5.style.opacity="0"
        div6.style.opacity="0"
      
    })


    nameBudget.addEventListener("mouseover",()=>{
       
        nameBudget.style.width="20%"
        nameBudget.style.cursor="pointer"
        nameBudget.style.transition="all 1s ease-in-out"

        nameAboutMe.style.width="100%"
        nameContact.style.width="100%"
        nameServices.style.width="100%"

        div5.style.width="100%"
        div5.style.height="83%"
        div5.style.display="flex"
        div5.style.transition="all 1s ease-in-out"
        div5.style.opacity="1"

        div4.style.opacity="0"
        div3.style.opacity="0"
        div6.style.opacity="0"


    })


  





    nameContact.addEventListener("mouseover",()=>{
       
        nameContact.style.width="20%"
        nameContact.style.cursor="pointer"
        nameContact.style.transition="all 1s ease-in-out"

        nameAboutMe.style.width="100%"
        nameBudget.style.width="100%"
        nameServices.style.width="100%"


        div6.style.width="100%"
        div6.style.height="83%"
        div6.style.display="flex"
        div6.style.transition="all 1s ease-in-out"
        div6.style.opacity="1"

        div4.style.opacity="0"
        div3.style.opacity="0"
        div5.style.opacity="0"
    })

 /************************************************** */
    nameServices.addEventListener("click",()=>{

        nameServices.style.width="100%"
       

    })
    nameContact.addEventListener("click",()=>{

        nameContact.style.width="100%"

    })

    nameBudget.addEventListener("click",()=>{

        nameBudget.style.width="100%"

    })

    nameAboutMe.addEventListener("click",()=>{

        nameAboutMe.style.width="100%"
       

    })
    /************************************************** */

    nameServices.addEventListener("click",()=>{

   
        nameServices.style.width="0%"
        nameAboutMe.style.width="0%"
        nameBudget.style.width="0%"
        nameContact.style.width="0%"

        nameServices.style.opacity="0"
        nameAboutMe.style.opacity="0"
        nameBudget.style.opacity="0"
        nameContact.style.opacity="0"
          

        nameAboutMe.style.transition="all 1s ease-in-out"
        nameServices.style.transition="all 1s ease-in-out"
        nameBudget.style.transition="all 1s ease-in-out"
        nameContact.style.transition="all 1s ease-in-out"
     
    })

        







}
