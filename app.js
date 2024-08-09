

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    bannerSetas()
    novidadesSetas()
    menuFechar()
  })
  
  const bannerSetas = () => {
    const bannerSlider = document.querySelector('.js-banner-slider')
    const setasBannerAvancar = document.querySelectorAll('.js-banner-slider-seta-avancar')
    const setasBannerVoltar = document.querySelectorAll('.js-banner-slider-seta-voltar')
  
    setasBannerAvancar.forEach((setaBannerAvancar) => {
      setaBannerAvancar.addEventListener('click', bannerAvancar)
    })
  
    setasBannerVoltar.forEach((setaBannerVoltar) => {
      setaBannerVoltar.addEventListener('click', bannerVoltar)
    })
  
  
  
    // funcoes
    function bannerAvancar() {
      bannerSlider.style.transform = 'translateX(-100%)'
    }
  
    function bannerVoltar() {
      bannerSlider.style.transform = 'translateX(0)'
    }
  }
  
  const novidadesSetas = () => {
    const novidadesLista = document.querySelector('.js-novidades-lista')
    const setasNovidadesAvancar = document.querySelectorAll('.js-novidades-seta-avancar')
    const setasNovidadesVoltar = document.querySelectorAll('.js-novidades-seta-voltar')
  
  
    setasNovidadesAvancar.forEach((setaNovidadesAvancar) => {
      setaNovidadesAvancar.addEventListener('click', novidadeAvancar)
    })
  
    setasNovidadesVoltar.forEach((setaNovidadesVoltar) => {
      setaNovidadesVoltar.addEventListener('click', novidadeVoltar)
    })
  
  
  
      // funcoes
      function novidadeAvancar() {
        novidadesLista.scrollBy(300, 0)
      }
    
      function novidadeVoltar() {
        novidadesLista.scrollBy(-300, 0)
      }
  }
  
  const menuFechar = () => {
    const principal = document.querySelector('main')
    const rodape = document.querySelector('footer')
    const menuMobileLinks = document.querySelectorAll('.js-topo-menu-mobile-link')
    const menuMobile = document.querySelector('.js-topo-menu-mobile-input')
  
    principal.addEventListener('click', () => {
      menuMobile.checked = false
    })
  
    rodape.addEventListener('click', () => {
      menuMobile.checked = false
    })
  
    menuMobileLinks.forEach((menuMobileLink) => {
      menuMobileLink.addEventListener('click', () => {
        menuMobile.checked = false
      })
    })
  }
})()