document.body.onload=addElement;



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
//nav.style.zIndex="150"
nav.classList.add('.nav');


main.style.width="100%"
main.style.height="83%"
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

/*************************Navbar******************************** */

var navbar = document.createElement("div");
var list = document.createElement("div");
var socialnetwork = document.createElement("div");

navbar.style.width="25%"
navbar.style.height="100%"
navbar.style.display="flex"
navbar.style.justifyContent="center"
navbar.style.alignItems="center"

list.style.width="50%"
list.style.height="100%"
list.style.display="flex"
list.style.justifyContent="center"
list.style.alignItems="center"



socialnetwork.style.width="25%"
socialnetwork.style.height="100%"



nav.appendChild(navbar)
nav.appendChild(list)
nav.appendChild(socialnetwork)




/**************************Title Navbar********************************/
var image = document.createElement("img");


image.src = "./image/Nombre.png";
image.style.width ="200px";
image.style.cursor="pointer";
image.classList.add('logo');

navbar.style.cursor="pointer";
navbar.style.zIndex="150";
navbar.appendChild(image);





/***************************End Title Navbar*******************************/


/**************************List Navbar********************************/

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
ul.style.margin="0"
ul.style.opacity="0"





li.style.width="24%"
li.style.maxHeight="60%"
li.style.display="flex"
li.style.justifyContent="center"
li.style.alignItems="center"
li.style.marginLeft="1%"
li.style.zIndex="150"
li.style.cursor="pointer"
li.classList.add('inria-sans-regular');



li1.style.width="24%"
li1.style.maxHeight="60%"
li1.style.display="flex"
li1.style.justifyContent="center"
li1.style.alignItems="center"
li1.style.zIndex="150"
li1.style.cursor="pointer"
li1.style.margin="1%"
li1.classList.add('inria-sans-regular');


li2.style.width="24%"
li2.style.maxHeight="60%"
li2.style.display="flex"
li2.style.justifyContent="center"
li2.style.alignItems="center"
li2.style.marginLeft="1%"
li2.style.cursor="pointer"
li2.style.zIndex="150"
li2.classList.add('inria-sans-regular');

li3.style.width="24%"
li3.style.maxHeight="60%"
li3.style.display="flex"
li3.style.justifyContent="center"
li3.style.alignItems="center"
li3.style.zIndex="150"
li3.style.cursor="pointer"
li3.classList.add('inria-sans-regular');

li.innerText="Servicios"
li1.innerText="Sobre Mi"
li2.innerText="Presupuesto"
li3.innerText="Contacto"


list.appendChild(ul);
ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

/***************************End List Navbar*******************************/


/***************************Main***************************/



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




/**************************Services****************************/

div3.style.width="100%"
div3.style.height="83%"
div3.style.display="flex"
div3.style.justifyContent="center"
div3.style.alignItems="center"
div3.style.flexDirection="column"
div3.style.position="fixed"
div3.style.backgroundColor="#400335"
div3.style.opacity="0"


var div3containerdiv=document.createElement("div")
var div3containerdiv2=document.createElement("div")


div3containerdiv.style.width="100%"
div3containerdiv.style.height="50%"
div3containerdiv.style.display="flex"  
div3containerdiv.style.justifyContent="space-between"
div3containerdiv.style.alignItems="center"  


div3containerdiv2.style.width="100%"
div3containerdiv2.style.height="50%"
div3containerdiv2.style.display="flex" 
div3containerdiv2.style.justifyContent="space-between" 
div3containerdiv2.style.alignItems="center"  


div3.appendChild(div3containerdiv) 
div3.appendChild(div3containerdiv2)

for(i=0;i<=5;i++){

    if(i<=2){
        let div3containerS=document.createElement("div")
        let div3containerimgh3=document.createElement("div")
        let div3containerimg=document.createElement("img")
        let div3containerul=document.createElement("ul")
        let div3containername=document.createElement("h3")
        
        
        div3containerS.classList.add('card-' + i);

        div3containerS.style.width="28%"
        div3containerS.style.height="80%"
        div3containerS.style.margin="2%"
        div3containerS.style.backgroundColor="#ffffff"
        

        div3containerimgh3.style.width="100%"
        div3containerimgh3.style.height="85%"
        div3containerimgh3.style.display="flex"  
        

        
        div3containername.style.width="100%"
        div3containername.style.height="15%"
        div3containername.style.display="flex" 
        div3containername.style.justifyContent="center"
        div3containername.style.alignItems="center"
        div3containername.style.margin="0" 
        div3containername.classList.add('inria-sans-regular')


        
        if(div3containerS.classList.value==="card-0"){
            div3containerimg.src = "./image/consolas.jpg";
            div3containerimg.style.width ="100px";
            div3containerimg.style.cursor="pointer";
            div3containername.innerHTML="Consolas"
            

        }else if(div3containerS.classList.value==="card-1"){
            div3containerimg.src = "./image/celular.jpg";
            div3containerimg.style.width ="100px";
            div3containerimg.style.cursor="pointer";
            div3containername.innerHTML="Smart Phones"

        }else if(div3containerS.classList.value==="card-2"){
            div3containerimg.src = "./image/tablet.png";
            div3containerimg.style.width ="100px";
            div3containerimg.style.cursor="pointer";
            div3containername.innerHTML="Netbook"
        }
  
        div3containerimg.style.width="40%"
        div3containerimg.style.height="100%"
        div3containerimg.style.display="flex"  
        


        div3containerul.style.width="60%"
        div3containerul.style.height="100%"
        div3containerul.style.display="flex"  
        div3containerul.style.margin="0"  
        div3containerul.style.backgroundColor="#000000"  
        div3containerul.style.borderRadius="0px 0px 0px 10px"  




        div3containerdiv.appendChild(div3containerS)
        div3containerS.appendChild(div3containerimgh3)
        div3containerS.appendChild(div3containername) 
        div3containerimgh3.appendChild(div3containerimg)
        div3containerimgh3.appendChild(div3containerul)

    }else{
       
        let div3containerS=document.createElement("div")
        let div3containerimgh3=document.createElement("div")
        let div3containerimg=document.createElement("img")
        let div3containerul=document.createElement("ul")
        let div3containername=document.createElement("h3")
        div3containerS.classList.add('card-' + i);

        div3containerS.style.width="28%"
        div3containerS.style.height="80%"
        div3containerS.style.margin="2%"
        div3containerS.style.backgroundColor="#ffffff"
        

        div3containerimgh3.style.width="100%"
        div3containerimgh3.style.height="85%"
        div3containerimgh3.style.display="flex"  

        
        div3containername.style.width="100%"
        div3containername.style.height="15%"
        div3containername.style.display="flex" 
        div3containername.style.justifyContent="center"
        div3containername.style.alignItems="center"
        div3containername.style.margin="0" 
        div3containername.classList.add('inria-sans-regular')


    


        if(div3containerS.classList.value==="card-3"){
            div3containerimg.src = "./image/tablet.png";
            div3containerimg.style.width ="100px";
            div3containerimg.style.cursor="pointer";
            div3containername.innerHTML="Ventas de Insumos"
            
        }else if(div3containerS.classList.value==="card-4"){
            div3containerimg.src = "./image/pc.jpg";
            div3containerimg.style.width ="100px";
            div3containerimg.style.cursor="pointer";
            div3containername.innerHTML="PCs"
        }else if(div3containerS.classList.value==="card-5"){
            div3containerimg.src = "./image/medios_pagos.jpg";
            div3containerimg.style.width ="100px";
            div3containerimg.style.cursor="pointer";
            div3containername.innerHTML="Medios de Pagos"
        }
       

        div3containerul.style.width="60%"
        div3containerul.style.height="100%"
        div3containerul.style.display="flex" 
        div3containerul.style.margin="0" 
        div3containerul.style.borderRadius="100px"
        div3containerul.style.backgroundColor="#000000"  
        div3containerul.style.borderRadius="0px 0px 0px 10px"  

  
        div3containerimg.style.width="40%"
        div3containerimg.style.height="100%"
        div3containerimg.style.display="flex"  

          
        div3containername.style.width="100%"
        div3containername.style.height="15%"
        div3containername.style.display="flex" 
        div3containername.style.margin="0"   

        div3containerdiv2.appendChild(div3containerS)
        div3containerS.appendChild(div3containerimgh3)
        div3containerS.appendChild(div3containername) 
        div3containerimgh3.appendChild(div3containerimg)
        div3containerimgh3.appendChild(div3containerul)
        
    }
      
}

/*************************End services*****************************/


div4.style.width="100%"
div4.style.height="83%"
div4.style.display="flex"
div4.style.justifyContent="center"
div4.style.alignItems="center"
div4.style.position="fixed"
div4.style.backgroundColor="#000000"
div4.style.opacity="0"

div5.style.width="100%"
div5.style.height="83%"
div5.style.display="flex"
div5.style.justifyContent="center"
div5.style.alignItems="center"
div5.style.position="fixed"
div5.style.backgroundColor="#ffffff"
div5.style.opacity="0"





div6.style.width="100%"
div6.style.height="83%"
div6.style.display="flex"
div6.style.justifyContent="center"
div6.style.alignItems="center"
div6.style.flexDirection="column"
div6.style.position="fixed"
div6.style.backgroundColor="#107C1D" 
div6.style.opacity="0"


/*************************About Me*****************************/
var div4Container=document.createElement("div")
var div4ContainerTi=document.createElement("div")
var div4ContainerP=document.createElement("div")
var div4ContainerPhoto=document.createElement("div")
var div4ContainerTiH=document.createElement("h2")
var div4ContainerTiSub=document.createElement("h3")
var div4ContainerParrP=document.createElement("p")
var div4img=document.createElement("img")





div4Container.style.width="65%"
div4Container.style.height="100%"
div4Container.style.display="flex"
div4Container.style.justifyContent="center"
div4Container.style.alignItems="center"
div4Container.style.flexDirection="column"
div4Container.style.backgroundColor="#000000"

div4ContainerTi.style.width="100%"
div4ContainerTi.style.height="30%"
div4ContainerTi.style.display="flex"
div4ContainerTi.style.flexDirection="column"
div4ContainerTi.style.justifyContent="center"
div4ContainerTi.style.alignItems="center"

div4ContainerP.style.width="100%"
div4ContainerP.style.height="70%"
div4ContainerP.style.display="flex"
div4ContainerP.style.justifyContent="center"
div4ContainerP.style.alignItems="center"


div4ContainerPhoto.style.width="35%"
div4ContainerPhoto.style.height="100%"
div4ContainerPhoto.style.display="flex"
div4ContainerPhoto.style.justifyContent="flex-end"



div4ContainerTiH.style.width="100%"
div4ContainerTiH.style.height="50%"
div4ContainerTiH.style.display="flex"
div4ContainerTiH.style.justifyContent="center"
div4ContainerTiH.style.alignItems="center"
div4ContainerTiH.style.color="#ffffff"
div4ContainerTiH.style.margin="0"
div4ContainerTiH.classList.add('inria-sans-regular')


div4ContainerTiSub.style.width="100%"
div4ContainerTiSub.style.height="50%"
div4ContainerTiSub.style.display="flex"
div4ContainerTiSub.style.justifyContent="center"
div4ContainerTiSub.style.alignItems="center"
div4ContainerTiSub.style.color="#ffffff"
div4ContainerTiSub.style.margin="0"
div4ContainerTiSub.classList.add('inria-sans-regular')

div4ContainerParrP.style.width="60%"
div4ContainerParrP.style.height="80%"
div4ContainerParrP.style.display="flex"
div4ContainerParrP.style.justifyContent="center"
div4ContainerParrP.style.alignItems="center"
div4ContainerParrP.style.color="#ffffff"
div4ContainerParrP.style.margin="0"
div4ContainerParrP.style.borderSpacing="5px"
div4ContainerParrP.style.padding="25px"
div4ContainerParrP.classList.add('inria-sans-regular')


div4img.style.width="550px"
div4img.src = "./image/Jaoquin_Tecnico.jpg" 


div4Container.appendChild(div4ContainerTi)
div4Container.appendChild(div4ContainerP)

div4ContainerTi.appendChild(div4ContainerTiH)
div4ContainerTi.appendChild(div4ContainerTiSub)
div4ContainerP.appendChild(div4ContainerParrP)



div4ContainerPhoto.appendChild(div4img)

div4.appendChild(div4Container)
div4.appendChild(div4ContainerPhoto)

 
div4ContainerTiH.innerText="Hola Soy Joaquín Solís  🧑‍💻" 
div4ContainerTiSub.innerText="Técnico en Dispositivos Móviles, Consolas, PCs y Notebooks  🛠️ 💻📱🎮"
div4ContainerParrP.textContent= `Soy técnico especializado en dispositivos móviles, consolas, PCs y notebooks, con una gran pasión por la tecnología. Me dedico a la reparación, optimización y mantenimiento de estos equipos, siempre en busca de las mejores soluciones para cada usuario.
Con el objetivo de brindar el mejor servicio a mis clientes, fundé CellPerfecTech, un espacio dedicado a la reparación y optimización de dispositivos con un enfoque en la calidad y la satisfacción del cliente.
Además de mi interés por la innovación tecnológica, el ciclismo es otra de mis grandes pasiones. Disfruto explorando nuevos caminos y desafiando mis límites, tanto en la ruta como en la vida profesional.
Siempre estoy en constante aprendizaje para ofrecer un servicio de calidad y estar al día con las últimas tendencias tecnológicas. ¡Listo para ayudarte con cualquier problema en tu dispositivo! 🚀
🔗  Visita CellPerfecTech en instagram y Sigueme Insecto`

/*********************** End About Me*****************************/



/*************************Contact*********************************/
var div6ContainerMessages=document.createElement("div")
var div6Messages=document.createElement("h2")
var div6ContainerImgForm=document.createElement("div")
var div6ContainerImg=document.createElement("div")
var div6Img=document.createElement("img")
var div6ContainerForm=document.createElement("div")
var div6FormInputname=document.createElement("input")
var div6FormInputemail=document.createElement("input")
var div6InputnamePhone=document.createElement("input")
var div6Inputnametextarea=document.createElement("textarea")
var div6Form=document.createElement("form")
var div6button=document.createElement("button")


div6ContainerMessages.style.width="100%"
div6ContainerMessages.style.height="15%"


div6Messages.style.width="100%"
div6Messages.style.height="100%"
div6Messages.style.margin="0"
div6Messages.style.color="#ffffff"
div6Messages.style.fontSize="45px"
div6Messages.style.display="flex"
div6Messages.style.justifyContent="center"
div6Messages.style.alignItems="center"
div6Messages.innerHTML="Enviame tu mensaje Insecto"
div6Messages.classList.add('inria-sans-regular')


div6ContainerImgForm.style.width="100%"
div6ContainerImgForm.style.height="85%"
div6ContainerImgForm.style.display="flex"



div6ContainerImg.style.width="40%"
div6ContainerImg.style.height="100%"
div6ContainerImg.style.display="flex"
div6ContainerImg.style.justifyContent="center"
div6ContainerImg.style.alignItems="center"


div6ContainerForm.style.width="60%"
div6ContainerForm.style.height="100%"




div6Form.style.width="80%"
div6Form.style.height="95%"
div6Form.style.display="flex"
div6Form.style.flexDirection="column"
div6Form.style.justifyContent="center"
div6Form.style.alignItems="center"
div6Form.action="send.php"



div6Img.src = "./image/cell.png";
div6Img.style.width ="350px";
div6Img.style.cursor="pointer";


div6InputnamePhone.style.width="75%"
div6InputnamePhone.style.height="7%"
div6InputnamePhone.style.borderRadius="5px"
div6InputnamePhone.style.margin="2%"
div6InputnamePhone.style.cursor="pointer"
div6InputnamePhone.style.fontSize="20px"
div6InputnamePhone.style.zIndex=160
div6InputnamePhone.style.paddingLeft="5px"
div6InputnamePhone.placeholder="Telefono"
div6InputnamePhone.maxLength="10"
div6InputnamePhone.type="number"
div6InputnamePhone.required="true"


div6FormInputemail.style.width="75%"
div6FormInputemail.style.height="7%"
div6FormInputemail.style.borderRadius="5px"
div6FormInputemail.style.margin="2%"
div6FormInputemail.style.cursor="pointer"
div6FormInputemail.style.fontSize="20px"
div6FormInputemail.style.paddingLeft="5px"
div6FormInputemail.placeholder="Email"
div6FormInputemail.maxLength="25"
div6FormInputemail.type="email"
div6FormInputemail.required="true"




div6FormInputname.style.width="75%"
div6FormInputname.style.height="7%"
div6FormInputname.style.borderRadius="5px"
div6FormInputname.style.margin="2%"
div6FormInputname.style.cursor="pointer"
div6FormInputname.style.fontSize="20px"
div6FormInputname.style.paddingLeft="5px"
div6FormInputname.placeholder="Nombre"
div6FormInputname.maxLength="15"
div6FormInputname.type="text"
div6FormInputname.required="true"

div6Inputnametextarea.style.width="75%"
div6Inputnametextarea.style.height="25%"
div6Inputnametextarea.style.borderRadius="5px"
div6Inputnametextarea.style.margin="2%"
div6Inputnametextarea.style.fontSize="20px"
div6Inputnametextarea.style.paddingLeft="5px"
div6Inputnametextarea.style.cursor="pointer"
div6Inputnametextarea.style.paddingTop="5px"
div6Inputnametextarea.placeholder="Max 150 caracteres"
div6Inputnametextarea.type="text"
div6Inputnametextarea.required="true"

div6button.style="none"
div6button.style.width="150px"
div6button.style.height="50px"
div6button.style.borderRadius="10px"
div6button.style.fontSize="25px"
div6button.style.cursor="pointer"
div6button.type="submit"
div6button.style.color="#ffffff"
div6button.style.backgroundColor="#400335"
div6button.innerHTML="Enviar"
div6button.classList.add('inter')

div6.appendChild(div6ContainerMessages)
div6.appendChild(div6ContainerImgForm)

div6ContainerMessages.appendChild(div6Messages)
div6ContainerImgForm.appendChild(div6ContainerImg)
div6ContainerImgForm.appendChild(div6ContainerForm)
div6ContainerForm.appendChild(div6Form)
div6ContainerForm.appendChild(div6Form)

div6Form.appendChild(div6FormInputname)
div6Form.appendChild(div6FormInputname)
div6Form.appendChild(div6InputnamePhone)
div6Form.appendChild(div6FormInputemail)
div6Form.appendChild(div6Inputnametextarea)
div6Form.appendChild(div6button)


div6ContainerImg.appendChild(div6Img)

/**************************End Contact*****************************/
main.appendChild(div)
main.appendChild(div1)
main.appendChild(div2)
main.appendChild(div3)
main.appendChild(div4)
main.appendChild(div5)
main.appendChild(div6)

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


var nameServices = document.createElement("h2");
var nameAboutMe = document.createElement("h2");
var nameBudget = document.createElement("h2");
var nameContact = document.createElement("h2");




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


nameServices.innerText="Servicios"
nameBudget.innerText="Presupuesto"
nameAboutMe.innerText="Sobre Mi"
nameContact.innerText="Contacto"

services.appendChild(nameServices)
aboutme.appendChild(nameAboutMe)
budget.appendChild(nameBudget)
contact.appendChild(nameContact)


/***************************Footer***************************/



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


/***************************End Footer***************************/
home(nameServices,nameAboutMe,nameBudget,nameContact,services,aboutme,budget,contact,ul,div6)
selectSection(nameServices,nameAboutMe,nameBudget,nameContact,services,aboutme,budget,contact,li,li1,li2,li3,ul,div3,div4,div5,div6)
selectSectionMouse(nameServices,nameAboutMe,nameBudget,nameContact,nav,div3,div4,div5,div6)

}



function selectSection(nameServices,nameAboutMe,nameBudget,nameContact,services,aboutme,budget,contact,li,li1,li2,li3,ul,div3,div4,div5,div6){

    const cajas = document.querySelectorAll("h2");
    const listOption = document.querySelectorAll("li");
   
    document.addEventListener("click", function(event) {
        if ([...cajas].includes(event.target)||[...listOption].includes(event.target)) { 

            if (event.target.innerText=== "Servicios"||event.target.innerText=== "Presupuesto"||event.target.innerText=== "Sobre Mi"||event.target.innerText=== "Contacto") {
                
            ul.style.opacity="1"
            ul.style.visibility="visible"
            ul.style.color="#0000005b"
            nameServices.style.visibility="hidden"
            nameAboutMe.style.visibility="hidden"
            nameBudget.style.visibility="hidden"
            nameContact.style.visibility="hidden"

            contact.style.opacity="0"
            aboutme.style.opacity="0"
            budget.style.opacity="0"
            services.style.opacity="0"
            li.style.transition="all 0.5s ease-in-out"

            contact.style.transition="all 0.5s ease-in-out"
            aboutme.style.transition="all 0.5s ease-in-out"
            services.style.transition="all 0.5s ease-in-out"
            budget.style.transition="all 0.5s ease-in-out"

            ul.style.transition="all 0.5s ease-in-out"

            nameAboutMe.style.transition="all 0.5s ease-in-out"
            nameServices.style.transition="all 0.5s ease-in-out"
            nameBudget.style.transition="all 0.5s ease-in-out"
            nameContact.style.transition="all 0.5s ease-in-out"

            if(event.target.innerText=== "Servicios"){
                li1.style.fontSize="18px" 
                li.style.fontSize="26px"
                li2.style.fontSize="18px" 
                li3.style.fontSize="18px"
                li.style.transition="all 0.5s ease-in-out"

                li.style.color="#000000" 
                li2.style.color="#0000005b" 
                li3.style.color="#0000005b" 
                li1.style.color="#0000005b" 


                div3.style.width="100%"
                div3.style.height="83%"
                div3.style.display="flex"
                div3.style.opacity="1"
                div6.style.zIndex="0"

                div3.style.transition="all 1s ease-in-out"
                div4.style.opacity="0"
                div5.style.opacity="0"
                div6.style.opacity="0"             

            }else if(event.target.innerText==="Sobre Mi"){
                li1.style.fontSize="26px" 
                li.style.fontSize="18px" 
                li2.style.fontSize="18px" 
                li3.style.fontSize="18px" 

                li.style.color="#0000005b" 
                li2.style.color="#0000005b" 
                li3.style.color="#0000005b" 
                li1.style.color="#000000" 

                li1.style.transition="all 0.5s ease-in-out"

                     
                div4.style.width="100%"
                div4.style.height="83%"
                div4.style.display="flex"
                div4.style.transition="all 1s ease-in-out"
                div4.style.opacity="1"
                div6.style.zIndex="0"
                
                div3.style.opacity="0"
                div5.style.opacity="0"
                div6.style.opacity="0"

            }else if(event.target.innerText==="Presupuesto"){
                li1.style.fontSize="18px" 
                li.style.fontSize="18px" 
                li2.style.fontSize="26px" 
                li3.style.fontSize="18px" 
                li2.style.transition="all 0.5s ease-in-out"

                li.style.color="#0000005b" 
                li2.style.color="#000000" 
                li3.style.color="#0000005b" 
                li1.style.color="#0000005b" 

                div5.style.width="100%"
                div5.style.height="83%"
                div5.style.display="flex"
                div5.style.transition="all 1s ease-in-out"
                div5.style.opacity="1"
                div6.style.zIndex="0"
            
                div4.style.opacity="0"
                div3.style.opacity="0"
                div6.style.opacity="0"

            }else if(event.target.innerText==="Contacto"){
                li1.style.fontSize="18px" 
                li.style.fontSize="18px" 
                li2.style.fontSize="18px" 
                li3.style.fontSize="26px" 
                li3.style.transition="all 0.5s ease-in-out"

                li.style.color="#0000005b" 
                li2.style.color="#0000005b" 
                li3.style.color="#000000" 
                li1.style.color="#0000005b" 


                div6.style.width="100%"
                div6.style.height="83%"
                div6.style.display="flex"
                div6.style.transition="all 1s ease-in-out"
                div6.style.opacity="1"
                div6.style.zIndex="150"
            
                div4.style.opacity="0"
                div3.style.opacity="0"
                div5.style.opacity="0"
            }
            }
        }
    });
   } 






function selectSectionMouse(nameServices,nameAboutMe,nameBudget,nameContact,nav,div3,div4,div5,div6){
const cajas = document.querySelectorAll("h2");
const listOption = document.querySelectorAll("li");


document.addEventListener("mouseover", function(event) {


    if ([...cajas].includes(event.target)||[...listOption].includes(event.target)) { 
        
        if (event.target.innerText=== "Servicios"||event.target.innerText=== "Presupuesto"||event.target.innerText=== "Sobre Mi"||event.target.innerText=== "Contacto") {
            
           

          if(event.target.innerText=== "Servicios"){

            if(nameServices.style.visibility=="hidden"||nameAboutMe.style.visibility=="hidden"||nameBudget.style.visibility=="hidden"||nameContact.style.visibility=="hidden"){
        


            } else{
                
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
        
            }
            

        }else if(event.target.innerText==="Sobre Mi"){

            if(nameServices.style.visibility=="hidden"||nameAboutMe.style.visibility=="hidden"||nameBudget.style.visibility=="hidden"||nameContact.style.visibility=="hidden"){
        
            } else{
    

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
        
                
            }      


        }else if(event.target.innerText==="Presupuesto"){

            if(nameServices.style.visibility=="hidden"||nameAboutMe.style.visibility=="hidden"||nameBudget.style.visibility=="hidden"||nameContact.style.visibility=="hidden"){
       
            } else{
           
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
            }
        

           
            console.log("Presupuesto")

        }else if(event.target.innerText==="Contacto"){
            

            if(nameServices.style.visibility=="hidden"||nameAboutMe.style.visibility=="hidden"||nameBudget.style.visibility=="hidden"||nameContact.style.visibility=="hidden"){
      
            } else{
           
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
            }


        }

        }
    }
    // if(nameServices.style.visibility=="hidden"||nameAboutMe.style.visibility=="hidden"||nameBudget.style.visibility=="hidden"||nameContact.style.visibility=="hidden"){
    //     nav.style.border="1px solid red"
    // }



});

}

function home(nameServices,nameAboutMe,nameBudget,nameContact,services,aboutme,budget,contact,ul,div6)
{

    document.addEventListener('click', function(event) {

        if (event.target.classList.contains('logo')) {

                ul.style.opacity="0"
                ul.style.visibility="hidden"
                div6.style.zIndex="0"
                

                nameServices.style.width="100%"
                nameAboutMe.style.width="100%"
                nameBudget.style.width="100%"
                nameContact.style.width="100%"

                nameServices.style.visibility="visible"
                nameAboutMe.style.visibility="visible"
                nameBudget.style.visibility="visible"
                nameContact.style.visibility="visible"
    
                contact.style.opacity="1"
                aboutme.style.opacity="1"
                budget.style.opacity="1"
                services.style.opacity="1"
    
    
                contact.style.transition="all 0.5s ease-in-out"
                aboutme.style.transition="all 0.5s ease-in-out"
                services.style.transition="all 0.5s ease-in-out"
                budget.style.transition="all 0.5s ease-in-out"
    
                ul.style.transition="all 0.5s ease-in-out"
    
                nameAboutMe.style.transition="all 0.5s ease-in-out"
                nameServices.style.transition="all 0.5s ease-in-out"
                nameBudget.style.transition="all 0.5s ease-in-out"
                nameContact.style.transition="all 0.5s ease-in-out"
        }
    });


}
