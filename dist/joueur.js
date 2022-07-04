"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joueur = void 0;
class Joueur {
    constructor(_name) {
        this._name = "";
        this._Score = 0;
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get Score() {
        return this._Score;
    }
    set Score(value) {
        this._Score = value;
    }
    joueurGob() {
    }
    afficher_score() {
    }
}
exports.Joueur = Joueur;
