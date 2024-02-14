    //Création d'une class en POO
    class Cards {
        constructor(cheminImage, conteneur, img, images) {
            this.cheminImage = cheminImage
            this.conteneur = conteneur
            this.img = img
            this.images = images
        }
        createCards() {
        //Chemin pour la carte non retournée
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

                        //Condition pour gérer le suivi des cartes qui ont été retournées pendant l'exécution du programme.

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
                                        verif++;
                                        console.log(carteRetournee);
                                    }
                                })
                                if (verif === 2) {
                                    console.log(`une paire avec carte ${i} est faite`)
                                    // let cards = document.querySelectorAll(".img")

                                    // cards.map((card) => {


                                    //     if (card.src.includes(`Carte${i}.png`)) {
                                    //         card.remove()
                                    //     }
                                    // })


                                } else {

                                    tableauImages.forEach((Carte, j) => {
                                        if (Carte.src.includes(`Carte${i}.png`)) {
                                            setTimeout(() => Carte.src = cheminImage, 1000)
                                            tableauImages.splice(j, 1);




                                        }
                                    })
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
