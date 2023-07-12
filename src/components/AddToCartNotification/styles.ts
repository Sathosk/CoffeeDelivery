import { styled, keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const NotificationContainer = styled.div`
    animation: ${fadeIn} 0.3s ease-in, ${fadeOut} 0.3s ease-in 2s;
`;