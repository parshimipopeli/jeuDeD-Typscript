
import { De } from './de';

export class Gobelet {

    private _des: De[] = [];

    constructor( _des: De[]) {
       let nbre_de = 0;
        

        for (let i = 0; i < nbre_de; i++) {
            this.des.push(new De());  
        }
        console.log( this.des + "lllllll");
        
    }

    public get des(): De[] {
        return this._des;
    }
    public set des(value: De[]) {
        this._des = value;
    }


    public afficher_score(valeur: number) {
        let scoreDe = valeur;
        return scoreDe;
    }
}