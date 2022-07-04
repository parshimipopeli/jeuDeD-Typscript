export class Joueur {

    private _name: string = "";
    private _Score: number = 0;

    constructor(_name: string) {
        this._name = _name
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get Score(): number {
        return this._Score;
    }
    public set Score(value: number) {
        this._Score = value;
    }

    public joueurGob() {

    }

    public afficher_score() {
    }

}