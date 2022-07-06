/* Responsive */
let menu = document.querySelector(".header ul");
let btn = document.querySelector(".header button");

btn.addEventListener("click", () => {
    if(btn.textContent === "MENU") {
        menu.style.display = "block";
        btn.textContent = "CLOSE";
    } else {
        menu.style.display = "none";
        btn.textContent = "MENU";
    }
})

/* Image slider */

let rightBtn = document.querySelector("#right-btn")
let leftBtn = document.querySelector("#left-btn")
let pictures = document.querySelectorAll(".slider-images img")
imgNum = 0;

moveRight = () => {
    displayNone();
    imgNum++;
    if(imgNum === pictures.length) {
        imgNum = 0;
    }
    pictures[imgNum].style.display = "block";
}

moveLeft = () => {
    displayNone();
    imgNum--;
    if(imgNum === -1) {
        imgNum = pictures.length - 1;
    }
    pictures[imgNum].style.display = "block";
}

rightBtn.addEventListener("click", moveRight)
leftBtn.addEventListener("click", moveLeft)

displayNone = () => {
    pictures.forEach(img => {
        img.style.display = "none";
    });
}

/* Portfolio sort */

btns = document.querySelectorAll(".portfolio-categories button")

btns.forEach(btn => {
        btn.addEventListener("click", () => {
        let category = btn.getAttribute("data-category");
        let portfolioItems = document.querySelectorAll(".portfolio-single-item")
        portfolioItems.forEach(item => {
            item.style.display = "none";
        });    
        if(category === "sve") {
            portfolioItems.forEach(item => {
                item.style.display = "block";
            });
        }
        portfolioItems.forEach(item => {
            if(item.getAttribute("data-category").includes(category)) {
                item.style.display = "block"
            }
        });
    }) 
});

/* Prvi modal */

let open = document.querySelector("#openModal");
open.addEventListener("click", () => {
    let modalWindow = document.querySelector(".popup-modal")
    let overlay = document.querySelector(".overlay")
    overlay.style.display = "block";
    modalWindow.style.display = "block";
})

let close = document.querySelector("#closeModal")
close.addEventListener("click", () => {
    let modalWindow = document.querySelector(".popup-modal")
    let overlay = document.querySelector(".overlay")
    overlay.style.display = "none";
    modalWindow.style.display = "none";
})

/* Drugi modal */

let open2 = document.querySelector("#openModal2")
open2.addEventListener("click", () => {
    let overlay = document.querySelector(".overlay")
    let popup = document.querySelector(".popup-modal2")
    popup.style.display = "block"
    overlay.style.display = "block"
})

let close2 = document.querySelector("#closeModal2")
close2.addEventListener("click", () => {
    let overlay = document.querySelector(".overlay")
    let popup = document.querySelector(".popup-modal2")
    popup.style.display = "none"
    overlay.style.display = "none"
})