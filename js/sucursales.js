const calles = [
  "Av. 6 de Agosto",
  "Calle Comercio",
  "Av. Arce",
  "Calle Potosí",
  "Av. Camacho",
  "Calle Ayacucho",
  "Av. Montes",
  "Calle Ballivián",
  "Av. Pando",
  "Calle Junín",
  "Av. Mariscal Santa Cruz",
  "Calle Ingavi",
  "Av. Heroínas",
  "Calle Sucre",
  "Av. Blanco Galindo",
  "Calle Colón",
  "Av. Cristo Redentor",
  "Calle Bolívar",
  "Av. Busch",
  "Calle México",
  "Av. Saavedra",
  "Calle Tarija",
  "Av. América",
  "Calle Oruro",
  "Av. Circunvalación",
  "Calle España",
  "Av. Petrolera",
  "Calle Buenos Aires",
  "Av. Banzer",
  "Calle Warnes",
]

const numeros = [
  "123",
  "245",
  "367",
  "489",
  "512",
  "634",
  "756",
  "878",
  "991",
  "1024",
  "1156",
  "1278",
  "1390",
  "1512",
  "1634",
  "1756",
  "1878",
  "1990",
  "2112",
  "2234",
]

const horarios = ["8:00 AM - 6:00 PM", "7:30 AM - 7:00 PM", "9:00 AM - 5:30 PM", "8:30 AM - 6:30 PM"]

const telefonos = ["(2) 245-6789", "(4) 456-7890", "(3) 567-8901", "(6) 678-9012", "(7) 789-0123"]

const ciudadNombres = {
  "la-paz": "La Paz",
  oruro: "Oruro",
  potosi: "Potosí",
  chuquisaca: "Chuquisaca",
  cochabamba: "Cochabamba",
  tarija: "Tarija",
  "santa-cruz": "Santa Cruz",
  beni: "Beni",
  pando: "Pando",
}

function shuffle(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function generarDirecciones(cantidad) {
  const callesMezcladas = shuffle(calles)
  const numerosMezclados = shuffle(numeros)
  const direcciones = []

  for (let i = 0; i < cantidad; i++) {
    const calle = callesMezcladas[i % callesMezcladas.length]
    const numero = numerosMezclados[i % numerosMezclados.length]
    direcciones.push(`${calle} N° ${numero}`)
  }

  return direcciones
}

function generarSucursales(ciudad) {
  const cantidadSucursales = Math.floor(Math.random() * 4) + 3
  const direcciones = generarDirecciones(cantidadSucursales)
  const telefonosMezclados = shuffle(telefonos)
  const horariosMezclados = shuffle(horarios)

  return direcciones.map((direccion, index) => ({
    nombre: `Sucursal ${ciudadNombres[ciudad]} ${index + 1}`,
    direccion: direccion,
    telefono: telefonosMezclados[index % telefonosMezclados.length],
    horario: horariosMezclados[index % horariosMezclados.length],
  }))
}

function renderizarSucursales(ciudad) {
  const grid = document.getElementById("sucursales-grid")
  const selectedCity = document.getElementById("selected-city")

  selectedCity.textContent = ciudadNombres[ciudad]

  const sucursales = generarSucursales(ciudad)

  grid.innerHTML = sucursales
    .map(
      (sucursal) => `
        <div class="sucursal-card">
            <h3>${sucursal.nombre}</h3>
            <div class="sucursal-info">
                <div class="info-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${sucursal.direccion}</span>
                </div>
                <div class="info-item">
                    <i class="fa-solid fa-phone"></i>
                    <span>${sucursal.telefono}</span>
                </div>
                <div class="info-item">
                    <i class="fa-solid fa-clock"></i>
                    <span>${sucursal.horario}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

document.querySelectorAll(".city-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".city-btn").forEach((b) => b.classList.remove("active"))
    this.classList.add("active")

    const ciudad = this.getAttribute("data-city")
    renderizarSucursales(ciudad)
  })
})
