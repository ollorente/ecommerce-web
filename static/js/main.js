const btnDepartamentos = document.getElementById('btn-departamentos'),
      btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
      grid = document.getElementById('grid'),
      contenedorEnlacesNav = document.querySelector('#menu .container-enlaces-nav'),
      contenedorSubcategorias = document.querySelector('#grid .container-subcategorias'),
      /* esDipostivoMovil = () => {
          if(window.innerWidth <= 767) {
              return true
          }
      } */
      esDipostivoMovil = () => window.innerWidth <= 767

btnDepartamentos.addEventListener('mouseover', () => {
    if(!esDipostivoMovil()) {
        grid.classList.add('activo')
    }
})

grid.addEventListener('mouseleave', () => {
    if(!esDipostivoMovil()) {
        grid.classList.remove('activo')
    }
})

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        if(!esDipostivoMovil()){
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo')
                if(categoria.dataset.categoria == e.target.dataset.categoria) {
                    categoria.classList.add('activo')
                }
            })
        }
    })
})

/* --------------------- */
/* EventListeners para dispositivo movil */
/* --------------------- */

document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault()
    if(contenedorEnlacesNav.classList.contains('activo')) {
        contenedorEnlacesNav.classList.remove('activo')
        document.querySelector('body').style.overflow = 'visible'
    } else {
        contenedorEnlacesNav.classList.add('activo')
        document.querySelector('body').style.overflow = 'hidden'
    }
})

/* --------------------- */
/* Clic boton todos los departamentos para dispositivo movil */
/* --------------------- */

btnDepartamentos.addEventListener('click', (e) => {
    e.preventDefault()
    grid.classList.add('activo')
    btnCerrarMenu.classList.add('activo')
})

/* --------------------- */
/* Boton de regresar categorías */
/* --------------------- */

document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
    e.preventDefault()
    grid.classList.remove('activo')
    btnCerrarMenu.classList.remove('activo')
})

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        if(esDipostivoMovil()) {
            contenedorSubcategorias.classList.add('activo')
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo')
                if(categoria.dataset.categoria == e.target.dataset.categoria) {
                    categoria.classList.add('activo')
                }
            })
        }
    })
})

/* --------------------- */
/* Boton de regresar subcategorías */
/* --------------------- */

document.querySelectorAll('#grid .container-subcategorias .btn-regresar').forEach((boton) => {
    boton.addEventListener('click', (e) => {
        e.preventDefault()
        contenedorSubcategorias.classList.remove('activo')
    })
})

btnCerrarMenu.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelectorAll('#menu .activo').forEach((elemento) => {
        elemento.classList.remove('activo')
    })
    document.querySelector('body').style.overflow = 'visible'
})
