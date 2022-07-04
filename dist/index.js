"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const de_1 = require("./de");
const joueur_1 = require("./joueur");
const partie_1 = require("./partie");
const gobelet_1 = require("./gobelet");
const de1 = new de_1.De();
console.log(de1.lancer());
const joueur1 = new joueur_1.Joueur("Philippe");
console.log(joueur1);
joueur1.afficher_score();
const partie1 = new partie_1.Partie("Philippe", 5, 2);
console.log(partie1);
const Gobelet1 = new gobelet_1.Gobelet([]);
console.log(Gobelet1);