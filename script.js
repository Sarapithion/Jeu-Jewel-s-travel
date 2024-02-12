class Cards {
    constructor(cheminImage, conteneur, img, images) {
        this.cheminImage = cheminImage
        this.conteneur = conteneur
        this.img = img
        this.images = images
    }
    createCards() {
        let cheminImage = "./medias/images-ok/Carte.png";
        let conteneur = document.getElementById("conteneur-images");
        for (let i = 0; i < 8; i++) {
            let img = document.createElement("img");
            img.src = cheminImage;
            img.style.width = "200px";
            img.style.height = "200px";
            img.classList.add(`img-${i}`)
            img.addEventListener(`click`, function () {
                img.src = images[i]
                let nombreDeCartesRetournees = 0;
                let tableauImages = document.querySelectorAll('#conteneur-images img');
                let cartesRetournees = [];
                tableauImages.forEach(Carte => {
                    if (!Carte.src.includes("Carte.png")) {
                        nombreDeCartesRetournees++;
                        cartesRetournees.push(Carte.src);
                    }
                    if (nombreDeCartesRetournees >= 2) {
                        console.log('Au moins deux cartes sont retournées')
                        for (let i = 1; i <= (images.length / 2); i++) {
                            let verif = 0;
                            cartesRetournees.forEach(carteRetournee => {
                                if (carteRetournee.includes(`Carte${i}.png`)) {
                                    verif ++;
                                }
                            })
                            if (verif === 2) {
                                console.log(`une paire avec carte ${i} est faite`)
                            } else {
                                
                                // enlever la src de l'image carteI.png et mettre carte.png à la place

                            }
                        }
                    }
                })
            })
            conteneur.appendChild(img);
        }
    }
}

let MonObjet = new Cards();
MonObjet.createCards();
let images = ["./medias/images-ok/Carte1.png", "./medias/images-ok/Carte2.png", "./medias/images-ok/Carte1.png", "./medias/images-ok/Carte3.png", "./medias/images-ok/Carte4.png", "./medias/images-ok/Carte2.png", "./medias/images-ok/Carte4.png", "./medias/images-ok/Carte3.png"]

// images.forEach((images) => {
//     if (images.includes("Carte1")) {
//         console.log("ok")
//     } else {
//         console.log("pas ok")
//     }

// })
