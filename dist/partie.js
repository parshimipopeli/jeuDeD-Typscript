"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partie = void 0;
const joueur_1 = require("./joueur");
class Partie extends joueur_1.Joueur {
    constructor(Joueur, nb_tour, gobelet) {
        super(Joueur);
        // private _Joueur: string = "";
        this._nb_tour = 0;
        this._gobelet = 0;
        this.gobelet = gobelet;
        this.nb_tour = nb_tour;
    }
    get nb_tour() {
        return this._nb_tour;
    }
    set nb_tour(value) {
        this._nb_tour = value;
    }
    get gobelet() {
        return this._gobelet;
    }
    set gobelet(value) {
        this._gobelet = value;
    }
    initialiser(Joueur) {
    }
    lancer() {
    }
    afficher_gagnant() {
    }
}
exports.Partie = Partie;
