import {
    AddCartButton,
    CardFooter,
    CoffeeCardContainer,
    CoffeeCardContent,
    Price,
    TagsContainer,
} from "./style";
// import svg from "../../../../../assets/CoffeeList/Type=Expresso.svg";
import { Tag } from "../CoffeeTag";
import { CountButton } from "../../../../../components/CountButton";
import { ShoppingCartSimple } from "phosphor-react";
import { CoffeeListType } from "../../../../../data/coffee";
import { useState, useContext } from "react";
import { CartContext } from "../../../../../contexts/CartContext";
import { CoffeeType } from "../../../../../reducers/cart/reducer";
import { USDollar } from "../../../../../utils/priceFormatter";

export function CoffeeCard({
    name,
    description,
    price,
    tags,
    imgName,
}: CoffeeListType) {
    const [coffeeQuantity, setCoffeeQuantity] = useState(0);
    const { createNewCoffee } = useContext(CartContext);

    const imgSrc =
        import.meta.env.BASE_URL + `src/assets/CoffeeList/Type=${imgName}.svg`;

    function handleChangeQuantity(number: number) {
        setCoffeeQuantity(number);
    }

    function handleAddToCart() {
        if (coffeeQuantity === 0) return;

        const coffeeData: CoffeeType = {
            name: name,
            price: price,
            imgName: imgName,
            quantity: coffeeQuantity,
            totalPrice: price * coffeeQuantity,
        };

        createNewCoffee(coffeeData);
    }

    return (
        <CoffeeCardContainer>
            <CoffeeCardContent>
                <img src={imgSrc} alt="" />
                <TagsContainer>
                    {tags.map((tag) => (
                        <Tag tag={tag} />
                    ))}
                </TagsContainer>

                <h4>{name}</h4>
                <p className="description">{description}</p>

                <CardFooter>
                    <Price>
                        <span>$</span>
                        {USDollar.format(price)}
                    </Price>
                    <CountButton
                        quantity={coffeeQuantity}
                        changeQuantity={handleChangeQuantity}
                    />
                    <AddCartButton onClick={() => handleAddToCart()}>
                        <ShoppingCartSimple weight="fill" size={21} />
                    </AddCartButton>
                </CardFooter>
            </CoffeeCardContent>
        </CoffeeCardContainer>
    );
}
