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
main.style.backgroundColor="green"
main.style.display="flex"
main.style.justifyContent="center"
main.style.flexDirection="column"


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
    socialnetwork.style.backgroundColor="blue"
  

    nav.appendChild(navbar)
    nav.appendChild(list)
    nav.appendChild(socialnetwork)

    addImgTitle(navbar) 
    addListOption(list)
}


/************Imagen de Navbar*************/
function addImgTitle(navbar){

    var image = document.createElement("img");

    image.src = "./image/Nombre.png";
    image.width =250;
    image.height =55;
    navbar.appendChild(image);
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
    ul.style.backgroundColor="red"
    ul.style.display="flex"
    ul.style.justifyContent="center"
    ul.style.alignItems="center"
    ul.style.listStyle="none"
     ul.style.margin="0"
   




    li.style.width="15%"
    li.style.height="30%"
    li.style.backgroundColor="blue"
    li.style.margin="0%"


    li1.style.width="15%"
    li1.style.height="30%"
    li1.style.backgroundColor="blue"
    li1.style.margin="1%"

    li2.style.width="15%"
    li2.style.height="30%"
    li2.style.backgroundColor="blue"
    li2.style.margin="1%"

    li3.style.width="15%"
    li3.style.height="30%"
    li3.style.backgroundColor="blue"
    li3.style.margin="1%"









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
    termCond.style.color="#000000"
    termCond.style.fontSize="14px"
    termCond.classList.add('inter');
    termCond.innerText="© copyright  P&R soluciones Informaticas | All rights reserved"
    footer.appendChild(termCond)
  
}
    


function addElementmain(main){
    var div=document.createElement("div")
    var div1=document.createElement("div")
    var div2=document.createElement("div")
  
    div.style.width="100%"
    div.style.height="50%"
    div.style.backgroundColor="white"
    div.style.display="flex"
  


    div1.style.width="100%"
    div1.style.height="50%"
    div1.style.backgroundColor="red"
    div1.style.display="flex"


    div2.style.width="100%"
    div2.style.height="100%"
    div2.style.position="fixed"
    div2.style.backgroundPosition="50% 40%"
    div2.style.backgroundSize="30% "
    div2.style.opacity="0.4"
    div2.style.backgroundRepeat="no-repeat"
    div2.style.backgroundImage="url('./image/celltech_logoGrande_png.png')"

    

    main.appendChild(div)
    main.appendChild(div1)
    main.appendChild(div2)


    addElementmainSection(div,div1)
}
function addElementmainSection(div,div1){

    var services=document.createElement("div")
    var aboutme=document.createElement("div")
    var budget=document.createElement("div")
    var contact=document.createElement("div")
  
    services.style.width="50%"
    services.style.height="100%"
    services.style.backgroundColor="#400335"
    services.style.justifyContent="center"
    services.style.alignContent="center"
    //services.style.cursor="pointer"

    aboutme.style.width="50%"
    aboutme.style.height="100%"
    aboutme.style.backgroundColor="#000000"
    aboutme.style.justifyContent="center"
    aboutme.style.alignContent="center"
    //aboutme.style.cursor="pointer"

    budget.style.width="50%"
    budget.style.height="100%"
    budget.style.backgroundColor="#ffffff"
    budget.style.justifyContent="center"
    budget.style.alignContent="center"

    contact.style.width="50%"
    contact.style.height="100%"
    contact.style.backgroundColor="#107C1D"
    contact.style.justifyContent="center"
    contact.style.alignContent="center"
    
    div.appendChild(services)
    div.appendChild(aboutme)
    div1.appendChild(budget)
    div1.appendChild(contact)
    
    addnameSection(services,aboutme,budget,contact);

}



function addnameSection(services,aboutme,budget,contact){

    var nameServices = document.createElement("h2");
    var nameAboutMe = document.createElement("h2");
    var nameBudget = document.createElement("h2");
    var nameContact = document.createElement("h2");
    
    nameServices.style.width="80px"
    nameServices.style.height="20px"
    nameServices.style.margin="auto"
    nameServices.style.color="#ffffff"
    nameServices.style.fontSize="14px"
    nameServices.style.textAlign="center"
    nameServices.classList.add('inter');
  
    nameServices.addEventListener("click",()=>{
        nameServices.style.color="#000000"
    })

    nameBudget.style.width="80px"
    nameBudget.style.height="20px"
    nameBudget.style.margin="auto"
    nameBudget.style.color="#000000"
    nameBudget.style.fontSize="14px"
    nameBudget.style.textAlign="center"
    nameBudget.classList.add('inter');
    

    nameAboutMe.style.width="80px"
    nameAboutMe.style.height="20px"
    nameAboutMe.style.margin="auto"
    nameAboutMe.style.color="#ffffff"
    nameAboutMe.style.fontSize="14px"
    nameAboutMe.style.textAlign="center"
    nameAboutMe.classList.add('inter');

    nameContact.style.width="80px"
    nameContact.style.height="20px"
    nameContact.style.margin="auto"
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



}
