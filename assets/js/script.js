// Menu icon
function myIcon(x) {
    x.classList.toggle("change");
}

// Menu icon click open
let menuIcon = document.querySelector('.menu-icon');
let resNav = document.querySelector('.res-nav');

menuIcon.addEventListener('click', () => {
    if (resNav.style.display === "none") {
        resNav.style.display = "block";
    } else {
        resNav.style.display = "none";
    }
});


// Scroll Navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        navbar.style.position = "fixed";
        navbar.style.backgroundColor = "black";
        navbar.style.transition = ".3s";
    } else {
        navbar.style.position = "";
        navbar.style.backgroundColor = "";
    }
}


// Get data Api

let sec4Boxs = document.querySelector(".sec4-boxs");
let search = document.querySelector("input[type=search]");
let sort = document.getElementById("sort");
let info = [];

function getDataApi() {
    fetch("http://localhost:3000/boxs")
        .then(response => response.json())
        .then(data => {
            sec4Boxs.innerHTML = "";
            info = info.length ? info : data;
            info.forEach(element => {
                sec4Boxs.innerHTML += `
                <div class="sec4-box">
                        <div class="sec4-box-icons">
                            <i class="bi bi-eye"></i>
                            <i class="bi bi-cart-plus"></i>
                            <i class="bi bi-heart-fill"></i>
                        </div>
                        <div class="sec4-box-forimg">
                            <img src="${element.image}" alt="Image">
                        </div>
                        <div class="sec4-box-fortext">
                            <p class="sec4-box-p1">${element.name}</p>
                            <p class="sec4-box-p2">${element.description}</p>
                            <p class="sec4-box-p3">$${element.price}</p>
                        </div>
                    </div>`
            });

            // Sort Function
            sort.addEventListener("change", (e) => {
                if (e.target.value == 'descending') {
                    info = info.sort((a, b) => b.price - a.price);
                } else if (e.target.value == 'ascending') {
                    info = info.sort((a, b) => a.price - b.price);
                } else {
                    info = [];
                }
                getDataApi();
            });

            // Search Function
            search.addEventListener("input", (e) => {
                let filter = data.filter((el) => {
                    return el.name.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase());
                });
                sec4Boxs.innerHTML = "";
                filter.forEach(element => {
                    sec4Boxs.innerHTML += `
                    <div class="sec4-box">
                        <div class="sec4-box-icons">
                            <i class="bi bi-eye"></i>
                            <i class="bi bi-cart-plus"></i>
                            <i class="bi bi-heart-fill"></i>
                        </div>
                        <div class="sec4-box-forimg">
                            <img src="${element.image}" alt="Image">
                        </div>
                        <div class="sec4-box-fortext">
                            <p class="sec4-box-p1">${element.name}</p>
                            <p class="sec4-box-p2">${element.description}</p>
                            <p class="sec4-box-p3">$${element.price}</p>
                        </div>
                    </div>`
                })
            })
        })
}

getDataApi();

