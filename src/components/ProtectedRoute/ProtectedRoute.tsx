import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedProps {
    isLoggedIn: boolean;
    children: ReactNode;
}

export function Protected({ isLoggedIn, children }: ProtectedProps) {
    if (!isLoggedIn) {
        return <Navigate to="/checkout" replace={true} />;
    }

    return <>{children}</>;
}
