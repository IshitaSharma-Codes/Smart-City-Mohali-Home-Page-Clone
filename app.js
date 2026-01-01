let modalDiv = document.querySelector(".modal")
let closeBtn = document.querySelector(".modal span")
let btn = document.querySelector(".headerBtn1")
btn.addEventListener("click", () => {
    modalDiv.style.top = "10%"
})
closeBtn.addEventListener("click", () => {
    modalDiv.style.top = "-1000px"
})
let mIcon = document.querySelector(".mIcon")
let navElement = document.querySelector(".headerRight nav")
let menuStatus = true
mIcon.addEventListener("click", () => {
    navElement.classList.toggle('showMenu')
    if (menuStatus == true) {
        mIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        menuStatus = false
    }
    else {
        mIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`
        menuStatus = true
    }
})
let highlightBtn = document.querySelector(".highlightBtn")
highlightBtn.addEventListener("click", () => {
    modalDiv.style.top = "10%"
})
closeBtn.addEventListener("click", () => {
    modalDiv.style.top = "-1000px"
})
let sitePlanBtn = document.querySelector(".sitePlanMid button")
sitePlanBtn.addEventListener("click", () => {
    modalDiv.style.top = "10%"
})
closeBtn.addEventListener("click", () => {
    modalDiv.style.top = "-1000px"
})
let galleryMid = document.querySelector(".GalleryMid")
let GalleryOverlayElement = document.querySelector(".GalleryOverlay")
let lightBoxMid = document.querySelector(".lightBoxMid")
let mainImg = document.querySelector(".lightBoxMid img")
galleryMid.addEventListener("click", (e) => {
    let currentSrc = e.target.src
    if (currentSrc) {
        GalleryOverlayElement.classList.add('GalleryOverlayShow');
        lightBoxMid.classList.add('lightBoxMidShow');
        mainImg.src = currentSrc
    }
})
let hideLightBox = () => {
    GalleryOverlayElement.classList.remove("GalleryOverlayShow");
    lightBoxMid.classList.remove('lightBoxMidShow');
}
let galleryCloseBtn = document.querySelector(".lightBoxMid span")
galleryCloseBtn.addEventListener("click", hideLightBox)




let AllLandMark = document.querySelectorAll(".LandMarkMid h4")
AllLandMark.forEach(
    (element, index) => {
        element.addEventListener("click", () => {
        AllLandMark.forEach((q,i)=>{
            if(index!=i){
                q.firstElementChild.innerHTML="+"
                q.nextElementSibling.classList.remove("LandMarkAns")
            }
        }
    )    
                if(element.firstElementChild.innerHTML=="+"){
             element.firstElementChild.innerHTML="-"
             }
             else{
                 element.firstElementChild.innerHTML="+"
             }
             element.nextElementSibling.classList.toggle("LandMarkAns")
})

    }
)
let AllFAQ = document.querySelectorAll(".FAQMid h4")
AllFAQ.forEach(
    (question, index) => {
        question.addEventListener("click", () => {
        AllFAQ.forEach((v,p)=>{
            if(index!=p){
                v.firstElementChild.innerHTML="+"
                v.nextElementSibling.classList.remove("FAQAns")
            }
        }
    )    
                if(question.firstElementChild.innerHTML=="+"){
             question.firstElementChild.innerHTML="-"
             }
             else{
                 question.firstElementChild.innerHTML="+"
             }
             question.nextElementSibling.classList.toggle("FAQAns")
})

    }
)


/* Site Plan Section*/
let sitePlanMid = document.querySelector(".sitePlanMid")
let sitePlanOverlay = document.querySelector(".GalleryOverlay")
let siteLightBoxMid = document.querySelector(".lightBoxMid")
let siteImg = document.querySelector(".lightBoxMid img")
sitePlanMid.addEventListener("click",(e) => {
    let siteCurrentSrc = e.target.src
    if(siteCurrentSrc) {
        sitePlanOverlay.classList.add('GalleryOverlayShow')
        siteLightBoxMid.classList.add('lightBoxMidShow')
        siteImg.src = siteCurrentSrc
    }

})
let siteHideLightBox = () => {
    sitePlanOverlay.classList.remove("GalleryOverlayShow");
    siteLightBoxMid.classList.remove('lightBoxMidShow');
}
let siteCloseBtn = document.querySelector(".lightBoxMid span")
siteCloseBtn.addEventListener("click", hideLightBox)

/* Location Section */
let locationMid = document.querySelector(".locationMid")
let locationOverlay = document.querySelector(".GalleryOverlay")
let locationLightBoxMid = document.querySelector(".lightBoxMid")
let locationImg = document.querySelector(".lightBoxMid img")
locationMid.addEventListener("click",(e) => {
    let locationCurrentSrc = e.target.src
    if(locationCurrentSrc) {
        locationOverlay.classList.add('GalleryOverlayShow')
        locationLightBoxMid.classList.add('lightBoxMidShow')
        locationImg.src = locationCurrentSrc
    }

})
let locationHideLightBox = () => {
    locationOverlay.classList.remove("GalleryOverlayShow");
    locationLightBoxMid.classList.remove('lightBoxMidShow');
}
let locationCloseBtn = document.querySelector(".lightBoxMid span")
locationCloseBtn.addEventListener("click", hideLightBox)


/*slider*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
})
