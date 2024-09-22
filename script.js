

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true,
    inertia:1
});

// Ensure smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

        if (targetElement) {
            scroll.scrollTo(targetElement);
            // Update the URL with the fragment identifier
            window.history.pushState(null, null, `#${targetID}`);
        }
    });
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
// function menuAnimation() {

//     var menu = document.querySelector("nav h3")
//     var full = document.querySelector("#full-scr")
//     var navimg = document.querySelector("nav img")
//     var flag = 0
//     menu.addEventListener("click", function () {
//         if (flag == 0) {
//             full.style.top = 0
//             navimg.style.opacity = 0
//             flag = 1
//         } else {
//             full.style.top = "-100%"
//             navimg.style.opacity = 1
//             flag = 0
//         }
//     })
// }

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 3200)
}

swiperAnimation()
page4Animation()
// menuAnimation()
loaderAnimation()


function sendEmail() {
    const email = 'jiteshraghav_21451@aitpune.edu.in';
    const subject = ''; // You can customize the subject
    const body = ''; // You can customize the body
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl);
}


// function sendEmail() {
//     const email = 'jiteshraghav_21451@aitpune.edu.in';
//     const subject = 'Subject Text Here'; // You can customize the subject
//     const body = 'Body Text Here'; // You can customize the body
//     window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
// }


// function showProjectDetails(title, description, githubLink) {
//     // Create modal container
//     var modalContainer = document.createElement('div');
//     modalContainer.classList.add('modal-container');
  
//     // Create modal content
//     var modalContent = document.createElement('div');
//     modalContent.classList.add('modal-content');
  
//     // Create enlarged image
//     var enlargedImage = document.createElement('img');
//     enlargedImage.src = "./assets/Screenshot 2024-05-07 011406.png";
//     enlargedImage.alt = title;
//     enlargedImage.classList.add('enlarged-project-img');
//     modalContent.appendChild(enlargedImage);
  
//     // Create project details
//     var projectTitle = document.createElement('h2');
//     projectTitle.textContent = title;
//     projectTitle.classList.add('experience-sub-title');
//     projectTitle.classList.add('project-title');
//     modalContent.appendChild(projectTitle);
  
//     var projectDescription = document.createElement('h3');
//     projectDescription.textContent = description;
//     projectDescription.classList.add('sub-projecttitle');
//     modalContent.appendChild(projectDescription);
  
//     // Create buttons
//     var buttonContainer = document.createElement('div');
//     buttonContainer.classList.add('btn-container');
  
//     var githubButton = document.createElement('button');
//     githubButton.textContent = 'Github';
//     githubButton.classList.add('btn');
//     githubButton.classList.add('btn-color-2');
//     githubButton.classList.add('project-btn');
//     githubButton.onclick = function() { window.open(githubLink, '_blank'); };
//     buttonContainer.appendChild(githubButton);
  
//     var closeButton = document.createElement('button');
//     closeButton.textContent = 'Close';
//     closeButton.classList.add('btn');
//     closeButton.classList.add('btn-color-2');
//     closeButton.classList.add('project-btn');
//     closeButton.onclick = function() { modalContainer.remove(); };
//     buttonContainer.appendChild(closeButton);
  
//     modalContent.appendChild(buttonContainer);
  
//     // Append modal content to container
//     modalContainer.appendChild(modalContent);
  
//     // Append modal container to body
//     document.body.appendChild(modalContainer);
//   }

// function showProjectDetails(event, title, description, link) {
//     const modal = document.getElementById('project-modal');
//     const modalTitle = document.getElementById('modal-title');
//     const modalDescription = document.getElementById('modal-description');
//     const modalLink = document.getElementById('modal-link');
    
//     // Set modal content
//     modalTitle.innerText = title;
//     modalDescription.innerText = description;
//     modalLink.href = link;
  
//     // Get the position of the clicked image
//     const rect = event.target.getBoundingClientRect();
  
//     // Set initial position of the modal
//     modal.style.transform = `translate(${rect.left + rect.width / 2}px, ${rect.top + rect.height / 2}px) scale(0)`;
//     modal.style.display = 'block';
  
//     // Trigger reflow
//     modal.offsetHeight; 
  
//     // Animate to the center
//     requestAnimationFrame(() => {
//       modal.classList.add('show');
//     });
//   }
  
//   function closeProjectDetails() {
//     const modal = document.getElementById('project-modal');
//     modal.classList.remove('show');
//     modal.addEventListener('transitionend', () => {
//       modal.style.display = 'none';
//     }, { once: true });
//   }
  
// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//   }


document.addEventListener("DOMContentLoaded", function() {
    // Select the menu and nav-part2 elements
    const menuButton = document.querySelector('nav h3');
    const navPart2 = document.getElementById('nav-part2');

    // Add click event listener to the menu button
    menuButton.addEventListener('click', function() {
        // Toggle the show class to the nav-part2 elements
        navPart2.classList.toggle('show');
    });
});


function showDetails(box) {
    // Remove 'active' class from all project boxes
    document.querySelectorAll('.details-container-color-container').forEach(b => b.classList.remove('active'));
  
    // Add 'active' class to the clicked box
    box.classList.add('active');
  
    // Get the details from the data attributes
    const title = box.getAttribute('data-title');
    const description = box.getAttribute('data-description');
    // const imgSrc = box.querySelector('.project-img').src;
  
    // Update the details section
    const details = document.getElementById('details');
    document.getElementById('details-title').innerText = title;
    document.getElementById('details-description').innerText = description;
    // document.getElementById('details-img').src = imgSrc;
  
    // Show the details section
    details.classList.add('active');

    // Scroll to the details section
  details.scrollIntoView({ behavior: 'smooth' });
  }
  
  
  
  
  
