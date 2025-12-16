document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enviosForm")
  const nombreInput = document.getElementById("nombreCompleto")
  const ciInput = document.getElementById("ci")
  const celularInput = document.getElementById("celular")
  const errorNombre = document.getElementById("errorNombre")
  const errorCI = document.getElementById("errorCI")
  const errorCelular = document.getElementById("errorCelular")
  const successMessage = document.getElementById("successMessage")

  const revealElements = document.querySelectorAll(".reveal")
  const options = { threshold: 0.08 }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        entry.target.classList.add("fade-in")
        io.unobserve(entry.target)
      }
    })
  }, options)
  revealElements.forEach((el) => io.observe(el))

  function validarNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/
    return regex.test(nombre.trim())
  }

  function validarCI(ci) {
    const regex = /^[0-9]{6,10}$/
    return regex.test(ci.trim())
  }

  function validarCelular(celular) {
    const regex = /^[67][0-9]{7}$/
    return regex.test(celular.trim())
  }

  function mostrarError(input, errorElement, mensaje) {
    input.classList.add("error")
    errorElement.textContent = mensaje
  }

  function limpiarError(input, errorElement) {
    input.classList.remove("error")
    errorElement.textContent = ""
  }

  nombreInput.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      if (!validarNombre(this.value)) {
        mostrarError(this, errorNombre, "El nombre debe contener solo letras y tener entre 3 y 50 caracteres")
      } else {
        limpiarError(this, errorNombre)
      }
    } else {
      limpiarError(this, errorNombre)
    }
  })

  ciInput.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      if (!validarCI(this.value)) {
        mostrarError(this, errorCI, "El CI debe contener entre 6 y 10 dígitos numéricos")
      } else {
        limpiarError(this, errorCI)
      }
    } else {
      limpiarError(this, errorCI)
    }
  })

  celularInput.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      if (!validarCelular(this.value)) {
        mostrarError(this, errorCelular, "El celular debe comenzar con 6 o 7 y tener 8 dígitos")
      } else {
        limpiarError(this, errorCelular)
      }
    } else {
      limpiarError(this, errorCelular)
    }
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    let isValid = true

    if (nombreInput.value.trim() === "") {
      mostrarError(nombreInput, errorNombre, "El nombre completo es obligatorio")
      isValid = false
    } else if (!validarNombre(nombreInput.value)) {
      mostrarError(nombreInput, errorNombre, "El nombre debe contener solo letras y tener entre 3 y 50 caracteres")
      isValid = false
    } else {
      limpiarError(nombreInput, errorNombre)
    }

    if (ciInput.value.trim() === "") {
      mostrarError(ciInput, errorCI, "El CI es obligatorio")
      isValid = false
    } else if (!validarCI(ciInput.value)) {
      mostrarError(ciInput, errorCI, "El CI debe contener entre 6 y 10 dígitos numéricos")
      isValid = false
    } else {
      limpiarError(ciInput, errorCI)
    }

    if (celularInput.value.trim() === "") {
      mostrarError(celularInput, errorCelular, "El número de celular es obligatorio")
      isValid = false
    } else if (!validarCelular(celularInput.value)) {
      mostrarError(celularInput, errorCelular, "El celular debe comenzar con 6 o 7 y tener 8 dígitos")
      isValid = false
    } else {
      limpiarError(celularInput, errorCelular)
    }

    if (isValid) {
      form.style.display = "none"
      successMessage.style.display = "flex"

      setTimeout(() => {
        form.reset()
        successMessage.style.display = "none"
        form.style.display = "block"
      }, 5000)
    }
  })
})
