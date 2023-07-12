import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout/index.tsx";
import { Home } from "./pages/Home/index.tsx";
import { Checkout } from "./pages/Checkout/index.tsx";
import { Success } from "./pages/Success/index.tsx";
import { Protected } from "./components/ProtectedRoute/ProtectedRoute.tsx";

export function Router() {
    const location = useLocation();
    const taliberado = false;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route
                    path="/success"
                    element={
                        <Protected isLoggedIn={taliberado}>
                            <Success />
                        </Protected>
                    }
                />
            </Route>
        </Routes>
    );
}
