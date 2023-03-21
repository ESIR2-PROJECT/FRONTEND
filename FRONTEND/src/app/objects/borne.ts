export class Borne{
    constructor(
        public id: number,
        public nomEnseigne: string,
        public station: Station,
        public priseType: Prise[],
        public horaires: string,
        public miseEnService: Date | null,
        public coordonnees: Coordonnees,
        public ville: Ville,
    ){}
}
export class BornePoint{
  constructor(
    public id: number,
    public latitude: number,
    public longitude: number,
    public date: Date | null
  ) {
  }
}
export class Station{
    constructor(
        public id: number,
        public nom: string,
        public address: string
    ){}
}
export class Prise{
  constructor(
    public id: number,
    public name: string,
    public code: string
  ) {
  }
}
export class Coordonnees {
    constructor(
        public id: number,
        public longitude: number,
        public latitude: number
    ){}
}
export class Ville {
    constructor(
      public id: number,
      public commune: string,
      public code_postale: string
    ){}
}
