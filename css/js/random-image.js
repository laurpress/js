const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];


myButton.addEventListener('click', changeImage);

function changeColor () {

    let randomIndex = Math.floor(Math.random() * images.lenght);
    image.src = "images/" [randomImage]

}