import {
    AddCartButton,
    CardFooter,
    CoffeeCardContainer,
    CoffeeCardContent,
    Price,
    TagsContainer,
} from "./style";
import svg from "../../../../../assets/CoffeeList/Type=Expresso.svg";
import { Tag } from "../CoffeeTag";
import { CountButton } from "../../../../../components/CountButton";
import { ShoppingCartSimple } from "phosphor-react";
import { CoffeeListType } from "../../../../../data/coffee";

export function CoffeeCard({
    name,
    description,
    price,
    tags,
    imgName,
}: CoffeeListType) {
    const imgSrc =
        import.meta.env.BASE_URL + `src/assets/CoffeeList/Type=${imgName}.svg`;
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
                    <CountButton />
                    <AddCartButton>
                        <ShoppingCartSimple weight="fill" size={21} />
                    </AddCartButton>
                </CardFooter>
            </CoffeeCardContent>
        </CoffeeCardContainer>
    );
}
