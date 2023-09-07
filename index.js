

const root = document.getElementById("root");    //extraemos el div vacio
const html = document.documentElement;  //extraemos todo el docuemnto HTML

let estado = false;
const mode = document.getElementById("modo");

const datos = document.getElementById("datos");

const btn_search = document.getElementById("search");
const input = document.getElementById("inputB");

// botones de cambio de pagina
const before = document.getElementById("before");
const after = document.getElementById("after");

let NumberPage = 1;

// Evento de para cambiar de modo Noche a modo de Día

mode.addEventListener("click", () => {

    if (estado) {
        html.style.setProperty('--bg-body', '#000');
        html.style.setProperty('--color-text', '#fff');
        estado = false;
    } else {
        html.style.setProperty('--bg-body', '#fff');
        html.style.setProperty('--color-text', '#000');
        estado = true;
    }

})

// Busqueda de personajes 

btn_search.addEventListener('click', () => {
    datos.innerHTML = ""
    const Busqueda = input.value;
    GetInfo(NumberPage, Busqueda)
    
})

// Cambiar pagina

after.addEventListener('click', () => {
    NumberPage --;
    GetInfo(NumberPage, Busqueda);
    btn_search.scrollIntoView({ behavior: 'smooth' });
});
before.addEventListener('click', () => {
    NumberPage ++;
    GetInfo(NumberPage, Busqueda);
    btn_search.scrollIntoView({ behavior: 'smooth' });
});

// Estructura para mostrar los personajes 

function GetInfo(NumberPage, Busqueda) {
    const url = `https://rickandmortyapi.com/api/character?page=${NumberPage}`;
    fetch(url)
        .then((res) => res.json())
        .then((data => {
            console.log(data.results);
            const personajes = data.results;
            if(input.value !== " "){
                ShowData(personajes, Busqueda);
            }else{
                ShowData(personajes, Busqueda = " ");
            }

        }))
        .catch((err) => {
            console.log(err)
        });
}




const Busqueda = input.value 
const ShowData = (personajes, Busqueda) =>{
    console.log(personajes)
    if(Busqueda){
        const filtro = personajes.filter(personajes => personajes.name.toLowerCase().includes(Busqueda.toLowerCase()))
        filtro.map(element => {
            datos.innerHTML += `
                    <div class="cards">

                        <div class="card_left">
                            <h2 style="text-align: center;">${element.name} </h2>
                            <img src="${element.image}" width="150px" alt="">
                        </div>

                        <div class="card_rigth">
                            <p>Status: ${element.status} </p>
                            <p>Specie: ${element.species}</p>
                            <p>Gender:${element.gender} </p>
                        </div>

                    </div>`
        })
    }else{
        datos.innerHTML = " ";
        personajes.map(element => {
            datos.innerHTML += `
                    <div class="cards">

                        <div class="card_left">
                            <h2 style="text-align: center;">${element.name} </h2>
                            <img src="${element.image}" width="150px" alt="">
                        </div>

                        <div class="card_rigth">
                            <p>Status: ${element.status} </p>
                            <p>Specie: ${element.species}</p>
                            <p>Gender:${element.gender} </p>
                        </div>

                    </div>`
        })
         
    }
}
const filterpersonaje = (NewData) => {
    let fil = NewData.results
}

GetInfo(NumberPage, Busqueda) ;