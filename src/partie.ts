import { Joueur } from './joueur';
export class Partie extends Joueur {


    // private _Joueur: string = "";

    private _nb_tour: number = 0;
    private _gobelet: number = 0;


  constructor(Joueur: string , nb_tour: number , gobelet: number ) {
    super(Joueur);
    this.gobelet = gobelet;
    this.nb_tour = nb_tour
  }
    
    public get nb_tour(): number {
        return this._nb_tour;
    }
    public set nb_tour(value: number) {
        this._nb_tour = value;
    }

    public get gobelet(): number {
        return this._gobelet;
    }
    public set gobelet(value: number) {
        this._gobelet = value;
    }

    public initialiser(Joueur: string) {
        
    }

    public lancer() {

    }

    public afficher_gagnant() {

    }

}