export class Borne{
    constructor(
        public nomEnseigne: string,
        public station: Station,
        public priseType: String[],
        public horaires: string,
        public miseEnService: Date,
        public coordonnees: Coordonnees,
        public ville: Ville,
    ){}
}
export class Station{
    constructor(
        public nom: string,
        public address: string
    ){}
}

export class Coordonnees {
    constructor(
        public longitude: number,
        public latitude: number
    ){}
}
export class Ville {
    constructor(
        commune: string,
        code_postale: string
    ){}
}
