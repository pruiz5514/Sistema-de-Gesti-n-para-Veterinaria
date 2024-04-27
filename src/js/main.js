// Fecha de hoy 
const fechaActual = new Date();

// Array de mascotas
const listaMascotas = [
    {
        nombre: "rocket",
        especie: "canino",
        raza: "golden retriver",
        fechaNacimiento: new Date(2021,3,28),
        // Metodo para calculcar la edad del animal
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 38,
        estado: "estable",
        nombrePropietario: "pablo ruiz",
        documento: "123456789",
        telefono: "2145483",
        email: "pabloruiz@hotmail.com"
    },

    {
        nombre: "luna",
        especie: "canino",
        raza: "labrador",
        fechaNacimiento: new Date(2019, 8, 15),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 29,
        estado: "critico",
        nombrePropietario: "maria lopez",
        documento: "987654321",
        telefono: "3125487",
        email: "marialopez@gmail.com"
    },

    {
        nombre: "max",
        especie: "canino",
        raza: "bulldog frances",
        fechaNacimiento: new Date(2020, 5, 10),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 12,
        estado: "estable",
        nombrePropietario: "andrea garcia",
        documento: "246813579",
        telefono: "8563214",
        email: "andrea.garcia@gmail.com"
    },

    {
        nombre: "pepper",
        especie: "canino",
        raza: "golden retriver",
        fechaNacimiento: new Date(2023, 9, 8),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 25,
        estado: "estable",
        nombrePropietario: "pablo ruiz",
        documento: "123456789",
        telefono: "2145483",
        email: "pabloruiz@hotmail.com"
    },

    {
        nombre: "polo",
        especie: "canino",
        raza: "husky siberiano",
        fechaNacimiento: new Date(2018, 2, 20),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 25,
        estado: "critico",
        nombrePropietario: "carlos martinez",
        documento: "159487263",
        telefono: "6321598",
        email: "carlos.martinez@hotmail.com"
    },

    {
        nombre: "luna",
        especie: "felino",
        raza: "siames",
        fechaNacimiento: new Date(2020, 9, 18),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 6,
        estado: "critico",
        nombrePropietario: "maría lopez",
        documento: "987654321",
        telefono: "3125487",
        email: "marialopez@hotmail.com"
    },

    {
        nombre: "maya",
        especie: "canino",
        raza: "border collie",
        fechaNacimiento: new Date(2017, 6, 8),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 18,
        estado: "estable",
        nombrePropietario: "ana ramurez",
        documento: "785236941",
        telefono: "3659874",
        email: "ana.ramirez@hotmail.com"
    },

    {
        nombre: "simba",
        especie: "canino",
        raza: "dalmata",
        fechaNacimiento: new Date(2019, 10, 25),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 22,
        estado: "estable",
        nombrePropietario: "laura gomez",
        documento: "365214987",
        telefono: "9874125",
        email: "laura.gomez@hotmail.com"
    },

    {
        nombre: "rocky",
        especie: "canino",
        raza: "rottweiler",
        fechaNacimiento: new Date(2020, 7, 12),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 30,
        estado: "estable",
        nombrePropietario: "david sanchez",
        documento: "785412369",
        telefono: "6325874",
        email: "david.sanchez@gmail.com"
    },

    {
        nombre: "coco",
        especie: "canino",
        raza: "pomerania",
        fechaNacimiento: new Date(2019, 3, 30),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 7,
        estado: "estable",
        nombrePropietario: "sofia torres",
        documento: "369874125",
        telefono: "3658741",
        email: "sofia.torres@gmail.com"
    }
]

// Funcion para registrar mascotas
function registrarMascota (array){

    const nombre = prompt("Ingrese el nombre: ").toLowerCase();
    const especie = prompt("Ingrese la especie: ").toLowerCase();
    const raza = prompt("Ingrese la raza: ").toLowerCase();
    const fechaNacimiento = new Date (prompt("Ingrese la fechaNacimiento: ", "MM/DD/YYYY"));
    const peso = parseInt(prompt("Ingrese el peso: "));
    const estado = prompt("Ingrese el estado: ").toLowerCase();
    const nombrePropietario = prompt("Ingrese el nombre del propietario: ").toLowerCase();
    const documento = prompt("Ingrese el documento: ").toLowerCase();
    const telefono = prompt("Ingrese el telefono: ".toLowerCase());
    const email = prompt("Ingrese el email: ").toLowerCase();

    const nuevaMascota = {
        nombre: nombre,
        especie: especie,
        raza: raza,
        fechaNacimiento: fechaNacimiento,
        // Metodo para calculcar la edad del animal
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: peso,
        estado: estado,
        nombrePropietario: nombrePropietario,
        documento: documento,
        telefono: telefono,
        email: email
    }

    // Agrega la nueva mascota al array
    array.push(nuevaMascota);

    console.log(array);
    console.log("");
}


// Funcion para ver la lista de todas las mascotas registradas
function verMascotas (array){
    console.log("lista de las mascotas registradas: ");
    array.forEach(element => {
        console.log(element["nombre"]);
    });
    console.log("");
}

// Funcion para ver la lista de todos los dueños registrados
function verDuenos (array){
    const duenos = [];
    console.log("Lista de los dueños");

    // Aca se verifica si el dueño ya esta en el array duenos para no repetirlo
    array.forEach(element => {
        if(!duenos.includes(element["nombrePropietario"])){
            duenos.push(element["nombrePropietario"])
        }
    });
    
    // Se muestra la lista de los dueños
    duenos.forEach(nombre => (
        console.log(nombre)
    ))
    console.log("");
}

// Funcion para buscar una mascota por el nombre
function buscarMascota (array){
    const mascotaBuscada = prompt("Ingrese el nombre de la mascota a buscar: ").toLowerCase();

    // Encuentra la posicion de la mascota en el array
    const posicion = array.findIndex(mascota => mascota.nombre == mascotaBuscada);
    if(posicion == -1){
        alert("La mascota no esta registrada")
    }
    else{
        console.log(`edad de la mascota: ${array[posicion].edad()} años`);

        // Muestra cada clave y valor 
        for (const clave in array[posicion]){
            if(clave !== "edad" && clave !== "fechaNacimiento"){
                console.log(`${clave}: ${array[posicion][clave]}`);
            }
        }
    }
    console.log("");
}


// Funcion para filtrar mascotas pertenecientes a un mismo dueño

function mascotaBuscadaPorDueno(array){
    const duenoBuscado = prompt("Ingrese el nombre del dueño a buscar: ").toLowerCase();

    // Encuentra la posicion del dueño en el array
    const mascotasBuscadas = array.filter(mascota => mascota.nombrePropietario == duenoBuscado)

    console.log(`Mascotas de ${duenoBuscado}, tiene ${mascotasBuscadas.length} mascotas`);
    mascotasBuscadas.forEach(mascota=>{
        console.log(mascota.nombre);
        console.log("");
        console.log(`edad de la mascota: ${mascota.edad()} años`);
        for (const clave in mascota){
            if(clave !== "edad" && clave !== "fechaNacimiento"){
                console.log(`${clave}: ${mascota[clave]}`);
            }
        }
        console.log("");
    })
}


// Funcion para actualizar infomacion de una mascota existente 

function actualizarInformacion (array){
    const mascotaActualizar = prompt("Ingrese la mascota que desea actualizar: ").toLowerCase();
    // Encuentra la posicion de la mascota en el array
    const posicion = array.findIndex(mascota => mascota.nombre == mascotaActualizar);

    if(posicion === -1){
        alert("Mascota no esta en la base de datos")
    }else{
        const opcion = parseInt(prompt(`
        1. Actualizar nombre de la mascota;
        2. Actualizar especie de la mascota
        3. Actualizar raza de la mascota
        4. Actualizar fecha de nacimiento de la mascota
        5. Actualizar peso de la mascota
        6. Actualizar estado de la mascota (estable o critico)
        7. Actualizar nombre del dueño
        8. Actualizar documento del propietario
        9. Actualizar telefono del propietario
        10. Actualizar correo del propietario
        `));
    
        // Modifica la informacion segun la opcion ingresada
        switch (opcion){
            case 1: 
                const nombre = prompt("Ingrese el nombre: ").toLowerCase()
                array[posicion].nombre = nombre
                break;
    
            case 2: 
                const especie = prompt("Ingrese la especie: ").toLowerCase();
                array[posicion].especie = especie
                break;
    
            case 3: 
                const raza = prompt("Ingrese la raza: ").toLowerCase()
                array[posicion].raza = raza
                break;
            
            case 4: 
                const fechaNacimiento = new Date (prompt("Ingrese la fechaNacimiento: ", "MM/DD/YYYY"))
                array[posicion].fechaNacimiento = fechaNacimiento
                break;
            
            case 5: 
                const peso = parseInt(prompt("Ingrese el peso: "))
                array[posicion].peso = peso
                break;
    
            case 6: 
                const estado = prompt("Ingrese el estado: ").toLowerCase();
                array[posicion].estado = estado
                break;
    
            case 7: 
                const nombrePropietario = prompt("Ingrese el nombre del propietario: ").toLowerCase();
                array[posicion].nombrePropietario = nombrePropietario
                break;
    
            case 8: 
                const documento = prompt("Ingrese el documento: ").toLowerCase()
                array[posicion].documento = documento
                break;
    
            case 9: 
                const telefono = prompt("Ingrese el telefono: ").toLowerCase()
                array[posicion].telefono = telefono
                break;
            
            case 10: 
                const email = prompt("Ingrese el email: ").toLowerCase()
                array[posicion].email = email
                break;
    
            default:
                alert("Seleccione una opcion valida")
                break;
        }
    }
    console.log("");
}

// Funcion para eliminar una mascota 
function eliminarMascota (array){
    const mascotaBuscada = prompt("Ingrese el nombre de la mascota a eliminar: ").toLowerCase();
    // Encuentra la posicion de la mascota en el array
    const posicion = array.findIndex(mascota => mascota.nombre == mascotaBuscada);

    if(posicion == -1){
        alert("La mascota no esta registrada")
    }else{
        // Elimina la posicion del array
        array.splice(posicion,1);
        console.log(array);
    }
    console.log("");
}

// Funcion principal, donde se muestra el menu y se ejecuta el programa 
function main(array){
    let verdadero = true

    while(verdadero){
        const opcion = parseInt(prompt(`
        Escoja una opcion: 

        1. Registar una mascota
        2. Ver lista de todas las mascotas registradas
        3. Ver lista de todos los dueños
        4. Buscar una mascota por el nombre
        5. Mostrar todas las mascotas de un dueño
        6. Actualizar la informacion de una mascota
        7. Eliminar una mascota
        8. Salir del programa.
        `))

        // Deacuerdo a la opcion se ejecuta la opcion 
        switch(opcion){
            case 1:
                registrarMascota(array);
                break;
            case 2:
                verMascotas(array);
                break;
            case 3:
                verDuenos(array);
                break;
            case 4:
                buscarMascota(array);
                break;
            case 5:
                mascotaBuscadaPorDueno(array);
                break;
            case 6:
                actualizarInformacion(array);
                break;
            case 7:
                eliminarMascota(array);
                break;
            case 8:
                verdadero = false;
                break;
            default:
                alert("Seleccione una opcion valida");
                break;
        }
    }
}

main(listaMascotas);