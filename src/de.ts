export class De {

    private _valeur: number = 0;

  constructor() {
    this._valeur = 0;
  }

    public get valeur(): number {
        return this._valeur;
    }
    public set valeur(value: number) {
        this._valeur = value;
    }

    public lancer() {
       
        let resultat = Math.floor(Math.random() * 6 ) + 1;
        this.valeur = resultat;
        return this.valeur;
    }

}