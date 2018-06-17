//C'est le fichier de la classe Objet dont hériteront les bombes et les humanoïdes
export class Objet{
    constructor(src, width, height){
        this.width = width;
        this.height = height;
        
        this.image = new Image();
        this.image.width = this.width;
        this.image.height = this.height;
        this.image.src = src;
    }
}