const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()




function showProjectDetails(title, description, githubLink) {
    // Create modal container
    var modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
  
    // Create modal content
    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    // Create enlarged image
    var enlargedImage = document.createElement('img');
    enlargedImage.src = "./assets/Screenshot 2024-05-07 011406.png";
    enlargedImage.alt = title;
    enlargedImage.classList.add('enlarged-project-img');
    modalContent.appendChild(enlargedImage);
  
    // Create project details
    var projectTitle = document.createElement('h2');
    projectTitle.textContent = title;
    projectTitle.classList.add('experience-sub-title');
    projectTitle.classList.add('project-title');
    modalContent.appendChild(projectTitle);
  
    var projectDescription = document.createElement('h3');
    projectDescription.textContent = description;
    projectDescription.classList.add('sub-projecttitle');
    modalContent.appendChild(projectDescription);
  
    // Create buttons
    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btn-container');
  
    var githubButton = document.createElement('button');
    githubButton.textContent = 'Github';
    githubButton.classList.add('btn');
    githubButton.classList.add('btn-color-2');
    githubButton.classList.add('project-btn');
    githubButton.onclick = function() { window.open(githubLink, '_blank'); };
    buttonContainer.appendChild(githubButton);
  
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('btn');
    closeButton.classList.add('btn-color-2');
    closeButton.classList.add('project-btn');
    closeButton.onclick = function() { modalContainer.remove(); };
    buttonContainer.appendChild(closeButton);
  
    modalContent.appendChild(buttonContainer);
  
    // Append modal content to container
    modalContainer.appendChild(modalContent);
  
    // Append modal container to body
    document.body.appendChild(modalContainer);
  }
  