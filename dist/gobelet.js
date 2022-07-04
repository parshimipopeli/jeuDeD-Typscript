"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gobelet = void 0;
const de_1 = require("./de");
class Gobelet {
    constructor(_des) {
        this._des = [];
        let nbre_de = 0;
        let min = 1;
        let max = 4;
        nbre_de = Math.floor(Math.random() * (max - min) + min);
        for (let i = 0; i < nbre_de; i++) {
            this.des.push(new de_1.De());
        }
        console.log(this.des + "lllllll");
    }
    get des() {
        return this._des;
    }
    set des(value) {
        this._des = value;
    }
    afficher_score(valeur) {
        let scoreDe = valeur;
        return scoreDe;
    }
}
exports.Gobelet = Gobelet;
