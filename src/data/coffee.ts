export interface CoffeeListType {
    name: string;
    description: string;
    price: string;
    tags: string[];
    imgName: string;
}

export const coffeeList: CoffeeListType[] = [
    {
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: "9,90",
        tags: ["TRADICIONAL"],
        imgName: "Expresso",
    },

    {
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: "9,90",
        tags: ["TRADICIONAL"],
        imgName: "Americano",
    },

    {
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: "9,90",
        tags: ["TRADICIONAL"],
        imgName: "ExpressoCremoso",
    },

    {
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: "9,90",
        tags: ["TRADICIONAL", "GELADO"],
        imgName: "CafeGelado",
    },

    {
        name: "Expresso com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: "9,90",
        tags: ["TRADICIONAL", "COM LEITE"],
        imgName: "CafeComLeite",
    },

    {
        name: "Latte",
        description:
            "Uma dose de café expresso com dobro de leite e espuma cremosa",
        price: "9,90",
        tags: ["TRADICIONAL", "COM LEITE"],
        imgName: "Latte",
    },

    {
        name: "Capuccino",
        description:
            "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: "9,90",
        tags: ["TRADICIONAL", "COM LEITE"],
        imgName: "Capuccino",
    },

    {
        name: "Macchiato",
        description:
            "Café expresso misturado com um pouco de leite quente e espuma",
        price: "9,90",
        tags: ["TRADICIONAL", "COM LEITE"],
        imgName: "Macchiato",
    },

    {
        name: "Mochaccino",
        description:
            "Café expresso com calda de chocolate, pouco leite e espuma",
        price: "9,90",
        tags: ["TRADICIONAL", "COM LEITE"],
        imgName: "Mochaccino",
    },

    {
        name: "Chocolate Quente",
        description:
            "Bebida feita com chocolate dissolvido no leite quente e café",
        price: "9,90",
        tags: ["ESPECIAL", "COM LEITE"],
        imgName: "ChocolateQuente",
    },

    {
        name: "Cubano",
        description:
            "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: "9,90",
        tags: ["ESPECIAL", "ALCOÓlICO", "GELADO"],
        imgName: "Cubano",
    },

    {
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: "9,90",
        tags: ["ESPECIAL"],
        imgName: "Havaiano",
    },

    {
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: "9,90",
        tags: ["ESPECIAL"],
        imgName: "Arabe",
    },

    {
        name: "Irlandês",
        description:
            "Bebida a base de café, uísque irlandês, açúcar e chantily",
        price: "9,90",
        tags: ["ESPECIAL", "ALCOÓlICO"],
        imgName: "Irlandes",
    },
];
