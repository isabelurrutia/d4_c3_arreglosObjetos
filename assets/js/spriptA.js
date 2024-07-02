const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    alt:"describe foto",
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2.000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    alt:"describe foto",
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
    ubicacion: '456 Ocean Avenue,Seaside Town, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 2.500,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    alt:"describe foto",
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street,Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2.200,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Hermosa casa familiar',
    src: 'https://images.unsplash.com/photo-1610569244414-5e7453a447a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt:"describe foto",
    descripcion: 'Esta encantadora casa reune todos los requisitos para la felicidad de una numerosa',
    ubicacion: 'Viña Maria 1234, La Reina, Región Metropolitana',
    habitaciones: 4,
    baños: 2,
    costo: 2.800,
    smoke: false,
    pets: true
    }
]

/*LOGICA SITIO ALQUILER */
let tarjeta_alquiler = document.querySelector(".tarjeta-alquiler")
for (let propiedad of propiedades_alquiler){
    let smokeMessage = propiedad.smoke
    if (smokeMessage == true){
        smokeMessage ='<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
    }
    else{
        smokeMessage = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
    }
    let petsMessage = propiedad.pets
    if (petsMessage == true){
        petsMessage ='<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' 
    }
    else{
        petsMessage = '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'
    }
    const templateA =`
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src= "${propiedad.src}" class="card-img-top" alt="${propiedad.alt}"/>
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                ${smokeMessage}
                ${petsMessage}
                </div>
            </div>
        </div>`
    tarjeta_alquiler.innerHTML += templateA
}

