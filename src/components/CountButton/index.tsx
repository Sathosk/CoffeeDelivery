import { Minus, Plus } from "phosphor-react";
import { AddRemoveButton, CountContainer } from "./style";

export function CountButton() {
    return (
        <CountContainer>
            <AddRemoveButton>
                <Minus weight="bold" size={14} />
            </AddRemoveButton>
            <span>1</span>
            <AddRemoveButton>
                <Plus weight="bold" size={14} />
            </AddRemoveButton>
        </CountContainer>
    );
}
