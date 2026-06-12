 function createSlider(sliderClass, images){

const slider = document.querySelector(sliderClass);

const img = slider.querySelector("img");

const prev = slider.querySelector(".prev");

const next = slider.querySelector(".next");

let current = 0;

function updateImage(){

    img.style.opacity = "0";

    setTimeout(() => {

        img.src = images[current];

        img.style.opacity = "1";

    },200);

}

next.addEventListener("click", () => {

    current++;

    if(current >= images.length){
        current = 0;
    }

    updateImage();

});

prev.addEventListener("click", () => {

    current--;

    if(current < 0){
        current = images.length - 1;
    }

    updateImage();

});

}

/* Electrical Images */

createSlider(".electrical-slider",[
"images/e1.jpg",
"images/e2.jpg",
"images/e3.jpg",
"images/e4.jpg",
"images/e5.jpg",
"images/e6.jpg",
"images/e7.jpg",
"images/e8.jpg",
"images/e9.jpg",
"images/e10.jpg",
"images/e11.jpg",
"images/e12.jpg",
"images/e13.jpg"
]);

/* TNEB Images */

createSlider(".tneb-slider",[
"images/t1.jpg",
"images/t2.jpg",
"images/t3.jpg",
"images/t4.jpg",
"images/t5.jpg",
"images/t6.jpg"
]);

/* Computer Images */

createSlider(".computer-slider",[
"images/c1.jpg",
"images/c2.jpg",
"images/c3.jpg",
"images/c4.jpg",
"images/c5.jpg"
]);

const cards =
document.querySelectorAll(".info-card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform =
"translateY(-5px) scale(1.02)";

});

card.addEventListener("mouseleave", () => {

card.style.transform =
"translateY(0) scale(1)";

});

});


const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const button =
document.querySelector("button");

button.innerHTML =
"✓ Message Sent";

button.style.background =
"green";

setTimeout(() => {

button.innerHTML =
"Send Message";

button.style.background =
"#0a2540";

form.reset();

},3000);

});

 
 

  