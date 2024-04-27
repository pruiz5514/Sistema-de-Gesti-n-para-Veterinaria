// Fecha de hoy 
const fechaActual = new Date();

// Array de mascotas
const listaMascotas = [
    {
        nombre: "Rocket",
        especie: "Canino",
        raza: "Golden retriver",
        fechaNacimiento: new Date(2021,3,28),
        // Metodo para calculcar la edad del animal
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 38,
        estado: "Estable",
        nombrePropietario: "Pablo Ruiz",
        documento: "123456789",
        telefono: "2145483",
        email: "pabloruiz@hotmail.com"
    },

    {
        nombre: "Luna",
        especie: "Canino",
        raza: "Labrador",
        fechaNacimiento: new Date(2019, 8, 15),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 29,
        estado: "Critico",
        nombrePropietario: "María López",
        documento: "987654321",
        telefono: "3125487",
        email: "marialopez@gmail.com"
    },

    {
        nombre: "Max",
        especie: "Canino",
        raza: "Bulldog Francés",
        fechaNacimiento: new Date(2020, 5, 10),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 12,
        estado: "Estable",
        nombrePropietario: "Andrea García",
        documento: "246813579",
        telefono: "8563214",
        email: "andrea.garcia@gmail.com"
    },

    {
        nombre: "Peper",
        especie: "Canino",
        raza: "Golden retriver",
        fechaNacimiento: new Date(2023, 9, 8),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 25,
        estado: "Estable",
        nombrePropietario: "Maria Ruiz",
        documento: "246813579",
        telefono: "8563214",
        email: "maria.ruiz@gmail.com"
    },

    {
        nombre: "Thor",
        especie: "Canino",
        raza: "Husky Siberiano",
        fechaNacimiento: new Date(2018, 2, 20),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 25,
        estado: "Crítico",
        nombrePropietario: "Carlos Martínez",
        documento: "159487263",
        telefono: "6321598",
        email: "carlos.martinez@hotmail.com"
    },

    {
        nombre: "Luna",
        especie: "Felino",
        raza: "Siamés",
        fechaNacimiento: new Date(2020, 9, 18),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 6,
        estado: "Crítico",
        nombrePropietario: "María López",
        documento: "987654321",
        telefono: "3125487",
        email: "marialopez@hotmail.com"
    },

    {
        nombre: "Maya",
        especie: "Canino",
        raza: "Border Collie",
        fechaNacimiento: new Date(2017, 6, 8),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 18,
        estado: "Estable",
        nombrePropietario: "Ana Ramírez",
        documento: "785236941",
        telefono: "3659874",
        email: "ana.ramirez@hotmail.com"
    },

    {
        nombre: "Simba",
        especie: "Canino",
        raza: "Dálmata",
        fechaNacimiento: new Date(2019, 10, 25),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 22,
        estado: "Estable",
        nombrePropietario: "Laura Gómez",
        documento: "365214987",
        telefono: "9874125",
        email: "laura.gomez@hotmail.com"
    },

    {
        nombre: "Rocky",
        especie: "Canino",
        raza: "Rottweiler",
        fechaNacimiento: new Date(2020, 7, 12),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 30,
        estado: "Estable",
        nombrePropietario: "David Sánchez",
        documento: "785412369",
        telefono: "6325874",
        email: "david.sanchez@gmail.com"
    },

    {
        nombre: "Coco",
        especie: "Canino",
        raza: "Pomerania",
        fechaNacimiento: new Date(2019, 3, 30),
        edad(){
            return Math.floor(((fechaActual-this.fechaNacimiento)/(1000*3600*24*365)))
        },
        peso: 7,
        estado: "Estable",
        nombrePropietario: "Sofía Torres",
        documento: "369874125",
        telefono: "3658741",
        email: "sofia.torres@gmail.com"
    }
]

