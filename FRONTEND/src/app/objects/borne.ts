export class Borne{
    constructor(
        public nomEnseigne: string,
        public station: Station,
        public priseType: string,
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
export class Horaire{
    constructor(
        public debut: Date,
        public fin: Date
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
