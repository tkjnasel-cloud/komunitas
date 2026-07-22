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
    effect: 'creative', // Mengaktifkan efek animasi kreatif
    grabCursor: true,   // Mengubah kursor jadi tangan saat di-hover/geser
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    
    // Pengaturan animasi kreatif saat digeser
    creativeEffect: {
        prev: {
            translate: ['-120%', 0, -500], // Kartu sebelumnya tergeser ke kiri dengan efek 3D
            opacity: 0.5,
        },
        next: {
            translate: ['120%', 0, -500],  // Kartu berikutnya bersiap di kanan dengan efek 3D
            opacity: 0.5,
        },
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides: false,
            effect: 'slide', // Kembali normal (geser biasa) jika di laptop/desktop
        }
    }
});
