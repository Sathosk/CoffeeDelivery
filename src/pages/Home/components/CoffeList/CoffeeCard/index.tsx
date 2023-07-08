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
import { useReducer, useState } from "react";
import { cartReducer } from "../../../../../reducers/cart/reducer";
import { addNewCoffeeAction } from "../../../../../reducers/cart/actions";

export function CoffeeCard({
    name,
    description,
    price,
    tags,
    imgName,
}: CoffeeListType) {
    const [coffeeQuantity, setCoffeeQuantity] = useState(0);
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart: [],
    });
    const imgSrc =
        import.meta.env.BASE_URL + `src/assets/CoffeeList/Type=${imgName}.svg`;

    function handleChangeQuantity(number: number) {
        setCoffeeQuantity(number);
    }

    function createNewCoffee() {
        const coffeeData = {
            name: name,
            imgName: imgName,
            price: price,
            quantity: coffeeQuantity,
        };

        dispatch(addNewCoffeeAction(coffeeData));
    }

    console.log("render", cartState);

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
                        <span>R$</span>
                        {price}
                    </Price>
                    <CountButton
                        quantity={coffeeQuantity}
                        changeQuantity={handleChangeQuantity}
                    />
                    <AddCartButton onClick={() => createNewCoffee()}>
                        <ShoppingCartSimple weight="fill" size={21} />
                    </AddCartButton>
                </CardFooter>
            </CoffeeCardContent>
        </CoffeeCardContainer>
    );
}
