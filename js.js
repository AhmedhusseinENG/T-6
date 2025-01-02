const linksArray = document.links;
function active(id) {
    const liID = id + 1;
    let idx = id;
    const linkID = idx;
    const res = linksArray[linkID].classList.add("active")
}
function notActive(id) {
    let idx = id
    const linkID = idx;
    const res = linksArray[linkID].classList.contains("active")
    if (res) {
        if ((id + 1) === 2) {
            li_2_ChangeMinWidth.classList.remove("change-min-width")
        }
        if ((id + 1) === 3) {
            li_3_ChangeMinWidth.classList.remove("change-min-width")
        }
        if ((id + 1) === 4) {
            li_4_ChangeMinWidth.classList.remove("change-min-width")

        }
        linksArray[linkID].classList.remove("active")
    }
}
const form = document.getElementById('loginForm');
const oldBtn = document.getElementById('nav-btn');
const clonedBtn = oldBtn.cloneNode(true)
clonedBtn.id = "nav-btn-1";
function openLoginPopup() {
    document.getElementById('loginPopup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLoginPopup() {
    document.getElementById('loginPopup').style.display = 'none';
    document.body.style.overflow = 'auto';
}
function validateForm(event) {
    event.preventDefault();
    window.location.reload();
    return true;
}
document.getElementById('nav-btn').addEventListener('click', openLoginPopup);
document.getElementById('slider-btn-1').addEventListener('click', openLoginPopup);
document.getElementById('slider-btn-2').addEventListener('click', openLoginPopup);
document.getElementById('slider-btn-3').addEventListener('click', openLoginPopup);
document.getElementById('loginPopup').addEventListener('click', function (e) {
    if (e.target === this) {
        closeLoginPopup();
    }
});
const password = document.getElementById('password')
const email = document.getElementById('email')
const passwordLable = document.getElementById('password-lable')
const emailLable = document.getElementById('email-lable')
email.addEventListener('input', () => {
    if (email.value) {
        emailLable.classList.add("input-effect")
    } else {
        emailLable.classList.remove("input-effect")
    }
});

password.addEventListener('input', () => {
    if (password.value) {
        passwordLable.classList.add("input-effect")
    } else {
        passwordLable.classList.remove("input-effect")
    }
});


const oldNAv = document.getElementById('new-nav');
const clonedNav = oldNAv.cloneNode(true)

const oldLogoName = document.getElementById('logo-name');
const leftSide = oldLogoName.cloneNode(true)
// 
const oldLogoImage = document.getElementById('logo-image');
const rightSide = oldLogoImage.cloneNode(true)
// 
// 
const oldLogoBox = document.getElementById('logo-box');
const clonedLogoBox = oldLogoBox.cloneNode(true)
// 
const header = document.getElementById("header")
let smallMobileScreen = window.matchMedia("(max-width: 767px)")
const parentNavLinks = document.getElementById("parent-nav-links")
const sidesContainer = document.createElement("div");
const parentHeaders = document.createElement("div");
const mobileDesign = document.createElement("div");
rightSide.className = "r-s";
leftSide.className = "l-s";
clonedBtn.className = "cloned-btn";
parentHeaders.className = "parent";
sidesContainer.className = "sides-container";
mobileDesign.className = "mobile-design";
clonedNav.classList.add("diff");
rightSide.style.width = "50px";
rightSide.style.height = "50px";
//
// new strcture in small mobile screen
sidesContainer.append(leftSide);
sidesContainer.append(rightSide);
// 
parentHeaders.append(sidesContainer);
parentHeaders.append(clonedBtn);
// 
mobileDesign.append(parentHeaders);
mobileDesign.append(clonedNav);
function myFunction(smallMobileScreen) {
    if (smallMobileScreen.matches) {
        parentNavLinks.remove()
        header.append(mobileDesign)
        const mobileLogin = document.getElementById('nav-btn-1').addEventListener('click', openLoginPopup);
    } else {
        mobileDesign.remove()
        header.prepend(parentNavLinks)
    }
}
myFunction(smallMobileScreen);
smallMobileScreen.addEventListener("change", function () {
    myFunction(smallMobileScreen);
});
let li_2_ChangeMinWidth = document.querySelector(".p-link-2");
let li_3_ChangeMinWidth = document.querySelector(".p-link-3");
let li_4_ChangeMinWidth = document.querySelector(".p-link-4");



