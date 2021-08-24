//Navbar fetch
async function navBar() {
    const response = await fetch("json/nav.json");
    const data = await response.json();
    //console.log(data[1].name)
    let container = document.querySelector("nav");
    let html = "";
    html = `
        <ul class="nav_list">
            <li class="navbar_exit"><i class="fas fa-times"></i></li>
    `;
    for(let i in data) {
        html += `
        <li class="${data[i].class}">${data[i].name}</li>
    `;
    }
    html += `</ul>`;
    html += `
        
        <div class="navbar_heart">
            <i class="far fa-heart"><span>0</span></i>
        </div>
        <div class="navbar_bars">
            <i class="fas fa-bars"></i>
        </div>
    `;
    container.innerHTML = html;

    //Function to see menu list on phone screen
    let navbarIcon = document.querySelector(".fa-bars");
    let list = document.querySelector(".nav_list");
    let exitBtn = document.querySelector(".fa-times");
    navbarIcon.onclick = () => {
        list.style.left = "0%"
    }
    exitBtn.onclick = () => {
        list.style.left = "-100%";
    }
}
navBar();

//Fetch Header 
async function header() {
    const response = await fetch("json/header.json");
    const data = await response.json();
    let container = document.querySelector("header");
    let html = "";
    html = `
        <div class="header_text">
            <h1>Get gone on Your Travel</h1>
            <p>${data[0].text}</p>
            <button>Reserve your vacation</button>
        </div>
    `;
    container.innerHTML = html;
}
header();
