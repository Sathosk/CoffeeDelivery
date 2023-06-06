import {
    HeroContainer,
    HeroContentWrapper,
    HeroContentImg,
    HeroContentDesc,
    HeroHeading,
    HeroBulletPoint,
} from "./styles";

import coffeeImg from "../../../../assets/CoffeeNoBG.png";
import { ListIcon } from "./components/ListIcon";

export function HeroSection() {
    return (
        <HeroContainer>
            <HeroContentWrapper className="container">
                <HeroContentDesc>
                    <HeroHeading>
                        <h1>
                            Find the perfect coffee for any time of the day.
                        </h1>
                        <p>
                            With Coffee Delivery, you receive your coffee
                            wherever you are, at any time.
                        </p>
                    </HeroHeading>
                    <HeroBulletPoint>
                        <ListIcon
                            icon="ShoppingCart"
                            color="yellow-dark"
                            text="Simple and secure shopping."
                        />
                        <ListIcon
                            icon="Package"
                            color="base-text"
                            text="Packaging keeps the coffee intact."
                        />
                        <ListIcon
                            icon="Timer"
                            color="yellow"
                            text="Fast and tracked delivery."
                        />
                        <ListIcon
                            icon="Coffee"
                            color="purple"
                            text="The coffee arrives fresh to you."
                        />
                    </HeroBulletPoint>
                </HeroContentDesc>
                <HeroContentImg>
                    <img src={`${coffeeImg}`} alt="" />
                </HeroContentImg>
            </HeroContentWrapper>
        </HeroContainer>
    );
}
