const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]


// Récupérer les éléments du DOM
const banner = document.getElementById('banner');
const leftArrow = banner.querySelector('.arrow_left');
const rightArrow = banner.querySelector('.arrow_right');


// Création de points(Dot)
let dotsHtml = document.getElementsByClassName("dots")[0]
for (let pas = 0; pas < slides.length; pas++) {
    let newDiv = document.createElement("div");
    dotsHtml.prepend(newDiv)
    newDiv.classList.add("dot")
}

//Mise à jour des points
const dots = document.querySelectorAll(".dot");
function updatedots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add("dot_selected"); //ajouter la classe pour actualiser les points
        } else {
            dot.classList.remove("dot_selected");//Supprimer la classe pour les autres points
        }
    });
}
//Appelles à la fonction updatedots
let selected_dot = 0
updatedots(selected_dot)

function updateSlider() {
    const bannerImg = document.querySelector(".banner-img");

    //Mise à jour de l'image 
    const imagePh = `assets/images/slideshow/${slides[selected_dot].image}`;
    bannerImg.src = imagePh;
    console.log(banner);
    bannerImg.alt = `Slide ${selected_dot}`;

    //Mise à jour de textes 
    const tagLine =slides[selected_dot].tagLine;
    document.querySelector("p").innerHTML = tagLine;
    console.log(`click sur la fleche ${direction}`);
}

// Ajouter un écouteur d'événement sur les flèches
leftArrow.addEventListener('click', () => {
    if (selected_dot === 0) {
        selected_dot = slides.length - 1;
    }
    else {
        selected_dot = (selected_dot - 1);
    }
    updatedots(selected_dot)
    updateSlider()
    console.log('Flèche gauche cliquée');
});

rightArrow.addEventListener('click', () => {
    if (selected_dot === slides.length - 1) {
        selected_dot = 0;
    }
    else {
        selected_dot = (selected_dot + 1);
    }

    
    updatedots(selected_dot)
    updateSlider()
    console.log('Flèche droite cliquée');
});