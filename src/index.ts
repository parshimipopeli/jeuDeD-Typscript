import { De } from './de';
import { Joueur } from './joueur';
import { Partie } from './partie';
import { Gobelet } from './gobelet';

const de1 = new De();
console.log(de1.lancer());


const joueur1 = new Joueur("Philippe");
console.log(joueur1);
joueur1.afficher_score();

const partie1 = new Partie("Philippe", 5, 2);
console.log(partie1);

const Gobelet1 = new Gobelet();
console.log(Gobelet1);





