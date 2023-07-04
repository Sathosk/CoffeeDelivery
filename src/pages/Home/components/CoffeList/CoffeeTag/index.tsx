import { TagContainer } from "./style";

interface TagProps {
    tag: string;
}

export function Tag({ tag }: TagProps) {
    return <TagContainer>{tag}</TagContainer>;
}
