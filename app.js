
fetch('\characters.json')
.then(response => response.json())
.then((data) => {
    let esMago= ['SI','No'];
    agregarMago = document.getElementById("EsMago");
    esMago=esMago.map(Mago =>  `<option value="${Mago}"> ${Mago} </option>`);
    agregarMago.innerHTML = esMago.join('');
 

})
function recuperar(){
    fetch('\characters.json')
    .then(response => response.json())
    .then((data) => {
        data = data.filter(personaje => {
            let buscarMago;
            let esMago= document.getElementById("EsMago").value;
            if(esMago == "SI"){
              buscarMago = true; 
            }else{
                buscarMago = false;
            }        
            let fechaObj = document.getElementById("Fecha").value;
            let fechaDate = new Date(fechaObj);
            console.log("muestro la fecha obtenida"+fechaObj); 
            if(fechaObj == ''){
                alert("ingresar un fecha de nacimiento")
                document.getElementById("Fecha").focus();
            }
            let filtrarFNac= document.getElementById("filtrar").checked;
            if(filtrarFNac){
                return ((personaje.wizard == buscarMago) &&( personaje.dateOfBirth != '' && (personaje.yearOfBirth < fechaDate.getFullYear() )));
            }else{
                return ((personaje.wizard == buscarMago) && (personaje.yearOfBirth < fechaDate.getFullYear() ));
            }})

        const cards= data.map(personaje => { 
            let urlImage ;
            if(!personaje.image){
                urlImage= "https://previews.123rf.com/images/get4net/get4net1901/get4net190105700/126278101-harry-potter-personaje-de-pel%C3%ADcula.jpg"
            }else{
                urlImage = personaje.image;
            }
            

            if(!personaje.alive){
                return `<div class="card">
                <img class="vivo" src = "https://e7.pngegg.com/pngimages/752/425/png-clipart-red-x-mark-illustration-x-mark-cross-computer-icons-cartoon-geometry-miscellaneous-angle-thumbnail.png">
                <img class="imagen" src = "${urlImage}"><br>           
                <span>Nombre: ${personaje.name}</span><br>
                <span>Casa: ${personaje.house}</span><br>
                <span>Genero: ${personaje.gender}</span><br>
                <span>Especie: ${personaje.species}</span><br>
                </div>`
            }else{
                return `<div class="card">
            <img class="imagen" src = "${urlImage}"><br>
            <span>Nombre: ${personaje.name}</span><br>
            <span>Casa: ${personaje.house}</span><br>
            <span>Genero: ${personaje.gender}</span><br>
            <span>Especie: ${personaje.species}</span><br>
            </div>`
            

            } 
            
        })
       let elcards = document.getElementById("cards");
        elcards.innerHTML = cards.join("<br>");

    });
}

function mostrarTodos(){
  
    fetch('\characters.json')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        const cards= data.map(personaje => { 
            let urlImage ;
            if(!personaje.image){
                urlImage= "https://previews.123rf.com/images/get4net/get4net1901/get4net190105700/126278101-harry-potter-personaje-de-pel%C3%ADcula.jpg"
            }else{
                urlImage = personaje.image;
            }
            if(!personaje.alive){
               
                return `<div class="card">
                <img class="vivo" src = "https://e7.pngegg.com/pngimages/752/425/png-clipart-red-x-mark-illustration-x-mark-cross-computer-icons-cartoon-geometry-miscellaneous-angle-thumbnail.png">
                <img class="imagen" src = "${urlImage}" ><br>           
                <span>Nombre: ${personaje.name}</span><br>
                <span>Casa: ${personaje.house}</span><br>
                <span>Genero: ${personaje.gender}</span><br>
                <span>Especie: ${personaje.species}</span><br>
                <p id="mouse"> </p>
                
		
                </div>`
            }else{
                
                return `<div class="card">
            <img class="imagen" src = "${urlImage}"><br>
            <span>Nombre: ${personaje.name}</span><br>
            <span>Casa: ${personaje.house}</span><br>
            <span>Genero: ${personaje.gender}</span><br>
            <span>Especie: ${personaje.species}</span><br>
            </div>`
            
            } 
            })
            
       let elcards = document.getElementById("cards");
    elcards.innerHTML = cards.join("<br>");
        
})
}

