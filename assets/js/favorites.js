let id = new URLSearchParams(window.location.search).get("id");
let favorites = document.querySelector('.sec4-boxs');

function forFavorites() {
    fetch("http://localhost:3000/favorites")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                favorites.innerHTML += `
            <div class="sec4-box">
            <div class="sec4-box-forimg">
                <img src="${element.image}" alt="Image">
            </div>
            <div class="sec4-box-fortext">
                <p class="sec4-box-p1">${element.name}</p>
                <p class="sec4-box-p2">${element.description}</p>
                <p class="sec4-box-p3">$${element.price}</p>
                <button onclick = "boxDelete(${element.id})">Delete</button>
            </div>
        </div>`
            })
        })
}


forFavorites();


// Delete from favorites
function boxDelete(id) {
    axios.delete("http://localhost:3000/favorites/" + id)
        .then(res => {
            console.log(res.data);
            window.location.reload();
        })
}