import {validateSignup} from "./contactForm.js";

//Navbar fetch
async function navBar() {
    try {
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
            <i class="far fa-heart" title="Favorite"><span>0</span></i>
            <i class="fas fa-sliders-h" title="Filters"></i>
        </div>
        <div class="navbar_bars">
            <i class="fas fa-bars"></i>
        </div>
    `;
    if(container != null) {
        container.innerHTML = html;
    }
    

    //Listener for favourite btn
    let fav = document.querySelector(".fa-heart");
    fav.onclick = () => {
        display_favorite();
    }

    //Home function
    let home = document.querySelector(".home");
    home.onclick = () => {
        document.location.href = "index.html"
    }
    //Contact function
    let contact = document.querySelector(".contact");
    contact.onclick = () => {
        fetch_form();
    }
    //Dropdown list
    let dropdown_list = document.querySelector(".fa-angle-down");
    let dropdown_content = "";
    dropdown_content = `
                <div class="more_inner">
                    <div>Lefkada</div>
                    <div>Egypt</div>
                    <div>Italy</div>
                    <div>Hong Kong</div>
                </div>
    `;
    dropdown_list.innerHTML = dropdown_content;
    //More info in navbar
    let more_info = document.querySelector(".more_inner");
    let display_dropdown = document.querySelector(".more");
    display_dropdown.onmouseover = () => {
        more_info.style.display = "block";
    }
    display_dropdown.onmouseout = () => {
        more_info.style.display = "none";
    }

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
    } catch (err) {
        console.log(err);
    }
}
navBar();

//Fetch Form
const fetch_form = async () => {
    try {
    const response = await fetch("json/form.json");
    const data = await response.json();

    const res = await fetch("json/login.json");
    const dataLogin = await res.json();

    let wrapper = document.querySelector(".contact_wrapper");
    let html = "";
    html = `
            <form class="contact_form">
                <i class="fas fa-times"></i>
                <div class="header">
                    <h2>Signup</h2>
                </div>
                <div class="inputs_wrapper">
                    <div class="inputs">
    `;
    for(let i in data) {
        html += `
                        <div>
                            <input class="${data[i].class}" type="${data[i].type}" placeholder="${data[i].placeholder}" />
                            <span class="${data[i].error}"></span>
                        </div>
            `;
    }
    html += `
                        <span class="go_to_login">Go to login form</span>
                    </div>
                    <div class="btn">
                        <button class="signup_btn">Signup</button>
                    </div>
                </div>
            </form>
            
            <form class="login_form">
                <i class="fas fa-times"></i>
                <div class="header_login">
                    <h2>Login</h2>
                </div>
                <div class="inputs_wrapper">
                    <div class="inputs_login">
    `;
    for(let i in dataLogin) {
    html += `
                        <div>
                            <input type="${dataLogin[i].type}" placeholder="${dataLogin[i].placeholder}" />
                        </div>
    `;    
    }
    html += `
                        <span class="go_to_signup">Go to signup form</span>
                    </div>
                    <div class="btn">
                        <button class="login_btn">Login</button>
                    </div>
                </div>
            </form>
    `;

    if(wrapper != null) {
        wrapper.innerHTML = html;
    }
    wrapper.style.marginLeft = "0%";
    document.body.style.overflow = "hidden"; 

    //Form display-hide buttons
    let goLoginBtn = document.getElementsByClassName("go_to_login")[0];
    let goSignupBtn = document.getElementsByClassName("go_to_signup")[0];
    let signupPage = document.getElementsByClassName("contact_form")[0];
    let loginPage = document.getElementsByClassName("login_form")[0];
    goLoginBtn.onclick = () => {
        signupPage.style.display = "none";
        loginPage.style.display = "block";
    }
    goSignupBtn.onclick = () => {
        signupPage.style.display = "block";
        loginPage.style.display = "none";
    }

    //Listeners for regex 
    let signupbtn = document.querySelector(".signup_btn");
    let loginbtn = document.querySelector(".login_btn");
    let nameInput = document.querySelector(".name_input");
    let emailInput = document.querySelector(".email_input");
    let numberInput = document.querySelector(".number_input");
    let passInput = document.querySelector(".pass_input");
    let passConfInput = document.querySelector(".confirm_pass_input");
    let nameErr = document.querySelector(".name_error");
    let emailErr = document.querySelector(".email_error");
    let numberErr = document.querySelector(".number_error");
    let passErr = document.querySelector(".pass_error");
    let passConfErr = document.querySelector(".pass_confirm_error");
    
    signupbtn.onclick = (e) => {
        e.preventDefault();
        validateSignup(nameInput, emailInput, numberInput, passInput, passConfInput, nameErr, emailErr, numberErr, passErr, passConfErr);
    }
    loginbtn.onclick = () => {
        validateLogin();
    }

    //Exit form buttons
    let exit = document.querySelectorAll(".fa-times");
    for(let i in exit) {
        exit[i].addEventListener("click", () => {
            wrapper.style.marginLeft = "-100%";
            document.body.style.overflow = "auto"; 
        })
    }

    } catch (err) {
        console.log(err);
    }
}

//Favourite window
const display_favorite = () => {
    let container = document.querySelector(".favorite_wrapper");
    let html = "";
    html = `
        <div class="exit_space">
            <i class="fas fa-times"></i>
        </div>
        <div>
            <h3>Favorite apartments</h3>
        </div>
        <div>
            Here will be content..
        </div>
    `;
    if(container != null) {
        container.innerHTML = html;
    }
    
    container.style.right = "0px";

    let exit = document.querySelector(".fa-times");
    exit.onclick = () => {
        container.style.right = "-500px";
    }
}

//Fetch Header 
async function header() {
    try {
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
    }
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
    } catch (err) {
        console.log(err);
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
            <h2>Choose your destination</h2>
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
    try {
       let button = btn.target;
        let parent = button.parentElement.parentElement;
        let name = parent.getElementsByClassName("name")[0].innerHTML;
        let nameLower = name.toLowerCase();
    
        let res = await fetch("json/destinations/" + nameLower + "_hotels.json");
        let data = await res.json();

        set_categories(data);
        
        display_hotels();
        

    } catch (err) {
        console.log(err);
    }
}

//Function for display category on the category.html
const display_hotels = () => {
        let hotels = get_categories();
        let container = document.querySelector(".hotel_wrapper");
        let html = "";

        html = `
            <div>
                <h2>${hotels[0].destination}</h2>
            </div>
            <div class="hotel_container">
        `;
        for(let i in hotels) {
        html += `
            <div class="hotel">
                <div class="header">
                    <h3>${hotels[i].name}</h3>
                </div>
                <div class="info">
                    <div class="image">
                        <img src="${hotels[i].images.image1}" alt="${hotels[i].name}"/>
                    </div>
                    <div class="information">
                        <div class="info_upper">
                            <div>
                                <span class="price">Price:</span><span><span class="price_num">${hotels[i].price}</span><span class="currency">€</span></span>
                            </div>
                            <div>
                                <span class="transportation">Transport:</span><span class="transport">${hotels[i].transport}</span>
                            </div>
                            <div>
                                <span class="num_nights">Inclusive:</span><span class="nights_number">${hotels[i].inclusive}</span>
                            </div>
                        </div>
                        <button class="view_details">Details</button>
                    </div>
                </div>
            </div>    
        `;
        }
        html += `</div>`;

    if(container != null) {
        container.innerHTML = html;
    }
    

    let details_btn = document.getElementsByClassName("view_details");
    for(let i in details_btn) {
        details_btn[i].addEventListener("click", display_details);
    }
}

//Function that set the JSON-s in local storage
const set_categories = (object) =>{
    localStorage.setItem("category", JSON.stringify(object));
}

//Function that get the JSON-s from local storage
const get_categories = () => {
    return JSON.parse(localStorage.getItem("category"));
}


const display_details = () => {
    alert("USPELO")
}
