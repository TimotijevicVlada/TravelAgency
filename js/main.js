//Navbar fetch
async function navBar() {
    const response = await fetch("json/nav.json");
    const data = await response.json();

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
        
        <div class="navbar_icons">
            <i class="far fa-envelope" title="Message us"></i>
            <i class="far fa-heart" title="Favourite"><span>0</span></i>
            <i class="fas fa-sliders-h" title="Filters"></i>
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
    html = ` <div class="swiper mySwiper">
                <div class="swiper-wrapper">
            `;
    for(let i in data) {
    html += `       <div class="swiper-slide">
                        <div class="header_info">
                            <h1>${data[i].title}</h1>
                            <p>${data[i].desc}</p>
                            <button>See offer</button>
                        </div>
                        <img src="${data[i].image.img}" alt="${data[i].image.alt}">
                    </div>`;
    }
    html += `
                    </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-pagination"></div>
              </div>
    `;
    if(container != null) {
      container.innerHTML = html;
    
    //Constructor from swiperjs.com for image slider
    const swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  }
}
header();

//Fetch categories 
async function categories() {
    try {
    let response = await fetch("json/categories.json");
    let data = await response.json();
     
    let container = document.querySelector("main");
    let html = "";
    html = `
            <div class="categories_wrapper">
    `;
    for(let i in data) {
        html += `
            <div class="categories_card">
                <div class="image">
                    <span class="name">${data[i].name}</span>
                    <img src="${data[i].image.img}" alt="${data[i].image.alt}">
                </div>
                <div class="info">
                    <h3>${data[i].title}</h3>
                    <p>${data[i].text}</p>
                </div>
                <div class="btn">
                    <button class="view_offer">See offer <i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
    `;
    }
    html += `</div>`;

    if(container != null) {
      container.innerHTML = html;  
    }
    

    //Listeners for view offer buttons
    let offerBtn = document.getElementsByClassName("view_offer");
    for(let i of offerBtn) {
        i.addEventListener("click", viewOffer);
    }

    } catch (error) {
        console.log(error);
    };
}
categories()

//Function fatching categories destination
async function viewOffer(btn) {
    let button = btn.target;
    let parent = button.parentElement.parentElement;
    let name = parent.getElementsByClassName("name")[0].innerHTML;
    let nameLower = name.toLowerCase();
    
    let res = await fetch("json/destinations/" + nameLower + "_hotels.json");
    let data = await res.json();
    console.log(data)
    
    let container = document.querySelector(".hotel_wrapper");
    let html = "";

    for(let i in data) {
        html += `
            <div class="hotel">
                <div class="header">
                    <h3>${data[i].name}</h3>
                </div>
                <div class="info">
                    <div class="image">
                        <img src="${data[i].images.image1}" alt="${data[i].name}"/>
                    </div>
                    <div class="information">
                        <div class="info_upper">
                            <div>
                                <span class="price">Price:</span><span class="price_num">50€</span>
                            </div>
                            <div>
                                <span class="transportation">Transport:</span><span class="transport">Airplane</span>
                            </div>
                            <div>
                                <span class="num_nights">Nights:</span><span class="nights_number">10</span>
                            </div>
                        </div>
                        <button>Details</button>
                    </div>
                </div>
            </div>    
        `;
    }
    
    container.innerHTML = html;

}

