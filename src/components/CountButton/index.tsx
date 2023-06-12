import { Minus, Plus } from "phosphor-react";
import { AddRemoveButton, CountContainer } from "./style";

export function CountButton() {
    return (
        <CountContainer>
            <AddRemoveButton>
                <Minus weight="bold" />
            </AddRemoveButton>
            <span>1</span>
            <AddRemoveButton>
                <Plus weight="bold" />
            </AddRemoveButton>
        </CountContainer>
    );
}
