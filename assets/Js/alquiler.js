const propiedadesAlquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2000,
      smoking: false,
      pets: true
    },
    {
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
      ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      banos: 3,
      precio: 2500,
      smoking: true,
      pets: true
    },
    {
      nombre: "Condominio moderno en zona residencial",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2200,
      smoking: false,
      pets: false
    },
    {
      nombre: "Estudio compacto cerca del metro",
      src: "https://decorexpro.com/images/article/orig/2017/08/dizajn-malenkoj-kvartiry-studii-23.jpg",
      descripcion: "Estudio ideal para una persona, a pasos del metro y centros comerciales.",
      ubicacion: "77 Urban Street, Downtown, CA 91111",
      habitaciones: 1,
      banos: 1,
      precio: 1500,
      smoking: false,
      pets: false
    }
    
  ];

  const contenedorAlquiler = document.querySelector("#alquiler .row");

  contenedorAlquiler.innerHTML = "";
  
  propiedadesAlquiler.forEach((propiedad) => {
    contenedorAlquiler.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento">
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | 
            <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
  
            ${propiedad.smoking 
              ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` 
              : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
  
            ${propiedad.pets 
              ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` 
              : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
          </div>
        </div>
      </div>
    `;
  });