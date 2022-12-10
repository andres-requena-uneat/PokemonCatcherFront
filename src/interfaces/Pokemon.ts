export default interface Pokemon {
    _id: string,
    ability: string,
    dex: number,
    type1: string,
    type2: string | null | undefined,
    name: string,
    image: string,
    sprite: string
}
