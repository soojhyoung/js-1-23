const imgs = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;

document.body.appendChild(bgImg);
