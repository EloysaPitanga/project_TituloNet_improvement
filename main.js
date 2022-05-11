window.addEventListener('scroll', onScroll)
onScroll()
// ON SCROLL

function onScroll (){
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuOnSection(home)
    activateMenuOnSection(workStep)
    activateMenuOnSection(workStepFive)
}

function showNavOnScroll(){
    if(scrollY>0){
        navigation.classList.add('scroll')
    }else{
        navigation.classList.remove('scroll')
    }
}

// BackToTopButton

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
}

// mostrar posição no menu qaundo der scroll
function activateMenuOnSection(section){

    const targetLine = scrollY + innerHeight/2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    //limite superior
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight

    // limite inferior
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //limites
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
    
    // achar o elemento pelo seletor
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
    
    menuElement.classList.remove('active')

    if(sectionBoundaries){
        menuElement.classList.add('active')
    }

    
}


// MENU EXPANDED

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}