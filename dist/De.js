"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.De = void 0;
class De {
    constructor() {
        this._valeur = 0;
        this._valeur = 0;
    }
    get valeur() {
        return this._valeur;
    }
    set valeur(value) {
        this._valeur = value;
    }
    lancer() {
        let min = 1;
        let max = 6;
        let resultat = Math.floor(Math.random() * (max - min) + min);
        this.valeur = resultat;
        return this.valeur;
    }
}
exports.De = De;
