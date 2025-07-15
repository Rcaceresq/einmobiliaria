const propiedadesVenta = [
    {
      nombre: "Apartamento de lujo en zona exclusiva",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      banos: 4,
      precio: 5000,
      smoking: false,
      pets: false
    },
    {
      nombre: "Apartamento acogedor en la montaña",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
      ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 2,
      banos: 1,
      precio: 1200,
      smoking: true,
      pets: true
    },
    {
      nombre: "Penthouse de lujo con terraza panorámica",
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      banos: 3,
      precio: 4500,
      smoking: false,
      pets: true
    },
    {
      nombre: "Casa moderna en zona residencial",
      src: "https://i.pinimg.com/originals/5c/d7/56/5cd75633139fb6be3280ff9e69302a22.jpg",
      descripcion: "Casa moderna con jardín y estacionamiento para dos autos",
      ubicacion: "101 Garden Street, Green Town, CA 65432",
      habitaciones: 3,
      banos: 2,
      precio: 3000,
      smoking: true,
      pets: true
    }

  ];

  const contenedorVenta = document.querySelector("#venta .row");

// Limpiar el contenedor para evitar duplicaciones
contenedorVenta.innerHTML = "";

propiedadesVenta.forEach((propiedad) => {
  contenedorVenta.innerHTML += `
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