// ==============================
// SWIPER
// ==============================

var swiper = new Swiper(".anggotaSwiper", {

    slidesPerView:3,

    spaceBetween:20,

    loop:true,

    centeredSlides:false,

    autoplay:{

        delay:2500,

        disableOnInteraction:false,

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev",

    },


    

});

const images = document.querySelectorAll(".gallery-item img");

images.forEach(img=>{
    img.onclick=()=>{
        const popup=document.createElement("div");
        popup.className="popup";

        popup.innerHTML=`
            <span>&times;</span>
            <img src="${img.src}">
        `;

        document.body.appendChild(popup);

        popup.querySelector("span").onclick=()=>{
            popup.remove();
        };

        popup.onclick=(e)=>{
            if(e.target===popup) popup.remove();
        };
    }
});

const aboutSwiper = new Swiper('.aboutSwiper', {
    slidesPerView: 1.15,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
