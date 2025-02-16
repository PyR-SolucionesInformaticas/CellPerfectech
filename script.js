document.body.onload=addElement;



function addElement(){
var nav=document.createElement("nav")
var main=document.createElement("main")
var footer=document.createElement("footer")

nav.style.width="100%"
nav.style.height="10%"
nav.style.backgroundColor="#ffffff"

main.style.width="100%"
main.style.height="85%"
main.style.backgroundColor="green"
main.style.display="flex"
main.style.justifyContent="center"
main.style.flexDirection="column"

footer.style.width="100%"
footer.style.height="5%"
footer.style.backgroundColor="#CCCCCC"


document.body.appendChild(nav)
document.body.appendChild(main)
document.body.appendChild(footer)

/********************************************************* */
addElementmain(main)

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

    aboutme.style.width="50%"
    aboutme.style.height="100%"
    aboutme.style.backgroundColor="#000000"
    aboutme.style.justifyContent="center"
    aboutme.style.alignContent="center"

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
    //nameServices.style.border="1px solid red"
    nameServices.style.textAlign="center"

    nameBudget.style.width="80px"
    nameBudget.style.height="20px"
    nameBudget.style.margin="auto"
    nameBudget.style.color="#000000"
    nameBudget.style.fontSize="14px"
//nameBudget.style.border="1px solid red"
    nameBudget.style.textAlign="center"

    nameAboutMe.style.width="80px"
    nameAboutMe.style.height="20px"
    nameAboutMe.style.margin="auto"
    nameAboutMe.style.color="#ffffff"
    nameAboutMe.style.fontSize="14px"
   // nameAboutMe.style.border="1px solid red"
    nameAboutMe.style.textAlign="center"

    nameContact.style.width="80px"
    nameContact.style.height="20px"
    nameContact.style.margin="auto"
    nameContact.style.color="#ffffff"
    nameContact.style.fontSize="14px"
   // nameContact.style.border="1px solid red"
    nameContact.style.textAlign="center"


    nameServices.innerText="Servicios"
    nameBudget.innerText="Presupuesto"
    nameAboutMe.innerText="Sobre Mi"
    nameContact.innerText="Contacto"
    

    services.appendChild(nameServices)
    aboutme.appendChild(nameAboutMe)
    budget.appendChild(nameBudget)
    contact.appendChild(nameContact)
}
