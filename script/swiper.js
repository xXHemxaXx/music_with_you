let Laura = `19b3d652a3msh4937caeed36c230p1b3c54jsn1da2ad719459`
let Hemza = `57f45402fdmshf4aae5ddcf4cc46p157993jsn931effea4595`
let number = 2


// fetch(`https://deezerdevs-deezer.p.rapidapi.com/genre/${number}?rapidapi-key=${Hemza}&rapidapi-host=deezerdevs-deezer.p.rapidapi.com`)
//     .then(response => response.json())
//     .then(datas => {
//         console.log(datas);
//     })
//     .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })

// swiper-banner
var swiperBanner = new Swiper(".mySwiper-banner", {
    slidesPerView: 3,
    spaceBetween: 20,
    width: 950,
    pagination: {
        clickable: true,
    },
});

// swiper-album
var swiperAlbum = new Swiper(".mySwiper-album", {
    slidesPerView: 3,
    spaceBetween: 20,
    width: 500,
    pagination: {
        clickable: true,
    },
});

var swiperAlbum = new Swiper(".mySwiper-mini-album", {
    slidesPerView: 4,
    width: 1000,
    pagination: {
        clickable: true,
    },
});