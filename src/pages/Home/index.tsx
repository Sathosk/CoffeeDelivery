import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CoffeList } from "./components/CoffeList";
import { HeroSection } from "./components/Hero";
import { HomeContainer, NotificationContainer } from "./styles";
import { AddToCartNotification } from "../../components/AddToCartNotification";
import { AnimatePresence, motion } from "framer-motion";

export function Home() {
    const { addToCartNotifications } = useContext(CartContext);

    return (
        <HomeContainer>
            <HeroSection />
            <CoffeList />
            <NotificationContainer>
                <AnimatePresence>
                    {addToCartNotifications.map((_, index) => (
                        <motion.div
                            initial={{ translateX: "110%" }}
                            animate={{ translateX: "0%" }}
                            exit={{ translateX: "110%" }}
                            key={index}
                        >
                            <AddToCartNotification></AddToCartNotification>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </NotificationContainer>
        </HomeContainer>
    );
}
