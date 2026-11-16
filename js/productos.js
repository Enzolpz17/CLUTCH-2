// Catálogo de ejemplo de CLUTCH. Editá estos datos para actualizar cada publicación.
const productosClutch = {
  "rival-650": {
    nombre: "SteelSeries Rival 650",
    categoria: "Mouse inalámbrico",
    precio: "$49.990",
    imagen: "https://images.unsplash.com/photo-1636036758527-266adfee3fcf?auto=format&fit=crop&w=1200&q=90",
    descripcion: "Mouse gamer pensado para ofrecer precisión y control durante tus partidas. Esta ficha amplía la información del producto que aparece en el catálogo.",
    etiqueta: "Top ventas",
    especificaciones: [
      ["Producto", "SteelSeries Rival 650"],
      ["Categoría", "Mouse gamer"],
      ["Conectividad", "Inalámbrica"],
      ["Uso recomendado", "Gaming y uso diario"],
      ["Precio", "Ilustrativo para el proyecto"]
    ]
  },
  "ns75": {
    nombre: "Gamakay NS75",
    categoria: "Teclado mecánico",
    precio: "$89.990",
    imagen: "https://images.unsplash.com/photo-1771521971801-b24e291166d1?auto=format&fit=crop&w=1200&q=90",
    descripcion: "Teclado mecánico de formato compacto, con estética moderna y RGB personalizable. Esta ficha amplía la información del producto que aparece en el catálogo.",
    etiqueta: "Nuevo",
    especificaciones: [
      ["Producto", "Gamakay NS75"],
      ["Categoría", "Teclado mecánico"],
      ["Formato", "Compacto"],
      ["Iluminación", "RGB personalizable"],
      ["Precio", "Ilustrativo para el proyecto"]
    ]
  },
  "manowar": {
    nombre: "Razer MANO’WAR",
    categoria: "Audio gamer",
    precio: "$69.990",
    imagen: "https://images.unsplash.com/photo-1679429973860-d430a100db8c?auto=format&fit=crop&w=1200&q=90",
    descripcion: "Auriculares gamer orientados a una experiencia de audio envolvente y comodidad para sesiones largas. Esta ficha amplía la información del producto que aparece en el catálogo.",
    etiqueta: "Audio gamer",
    especificaciones: [
      ["Producto", "Razer MANO’WAR"],
      ["Categoría", "Auriculares gamer"],
      ["Experiencia", "Audio envolvente"],
      ["Uso recomendado", "Gaming y multimedia"],
      ["Precio", "Ilustrativo para el proyecto"]
    ]
  },
  "p030": {
    nombre: "Redragon P030 Flick XL",
    categoria: "Superficie XL",
    precio: "$29.990",
    imagen: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?auto=format&fit=crop&w=1200&q=90",
    descripcion: "Superficie amplia para acompañar movimientos fluidos y precisos. Esta ficha amplía la información del producto que aparece en el catálogo.",
    etiqueta: "Recomendado",
    especificaciones: [
      ["Producto", "Redragon P030 Flick XL"],
      ["Categoría", "Mousepad"],
      ["Tamaño", "XL (según nombre de la publicación)"],
      ["Uso recomendado", "Gaming"],
      ["Precio", "Ilustrativo para el proyecto"]
    ]
  }
};

function cargarDetalleProducto() {
  const contenedor = document.querySelector("#product-detail");
  if (!contenedor) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const producto = productosClutch[id];

  if (!producto) {
    contenedor.innerHTML = `
      <div class="detail-error">
        <h1>Publicación no encontrada</h1>
        <p>El enlace no corresponde a un producto del catálogo.</p>
        <a class="button button-primary" href="index.html#productos">Volver al catálogo</a>
      </div>`;
    return;
  }

  document.title = `${producto.nombre} | CLUTCH`;
  document.querySelector("#breadcrumb-product").textContent = producto.nombre;

  const specs = producto.especificaciones.map(([label, value]) =>
    `<div class="detail-spec"><strong>${label}:</strong> ${value}</div>`
  ).join("");

  contenedor.innerHTML = `
    <div class="detail-photo">
      <img src="${producto.imagen}" alt="${producto.nombre}">
    </div>
    <div class="detail-info">
      <p class="product-type">${producto.categoria} · ${producto.etiqueta}</p>
      <h1>${producto.nombre}</h1>
      <p class="detail-description">${producto.descripcion}</p>
      <strong class="detail-price">${producto.precio}</strong>
      <span class="detail-disclaimer">Precio de ejemplo — proyecto académico</span>
      <p class="detail-status">Publicación demostrativa</p>
      <div class="detail-actions">
        <a class="button button-primary" href="index.html#contacto">Consultar producto <i class="fa-solid fa-arrow-right"></i></a>
        <a class="button button-outline" href="index.html#productos">Volver a productos</a>
      </div>
    </div>
    <section class="detail-specs">
      <h2>Detalles del producto</h2>
      <div class="detail-spec-grid">${specs}</div>
    </section>`;
}

document.addEventListener("DOMContentLoaded", cargarDetalleProducto);
