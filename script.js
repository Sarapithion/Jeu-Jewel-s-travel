    let cheminImage = "./medias/images-ok/Carte.png";
let conteneur = document.getElementById("conteneur-images");
for (let i = 0; i<8;i++){
    let img = document.createElement("img");
    img.src = "./medias/images-ok/Carte.png"
    img.style.width = "200px";
    img.style.height = "200px";
    img.classList.add(`img-${i}`)
    img.addEventListener(`click`,function(){
        img.src = images[i]}) 
conteneur.appendChild(img);
}
let images = ["./medias/images-ok/Carte1.png", "./medias/images-ok/Carte2.png", "./medias/images-ok/Carte1.png", "./medias/images-ok/Carte3.png", "./medias/images-ok/Carte4.png", "./medias/images-ok/Carte2.png", "./medias/images-ok/Carte4.png", "./medias/images-ok/Carte3.png"]
