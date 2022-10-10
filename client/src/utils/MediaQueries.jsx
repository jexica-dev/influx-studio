import { useMediaQuery } from "react-responsive";

export const mediaXl = useMediaQuery({ query: "(min-width: 1280px)" });
export const mediaLg = useMediaQuery({ query: "(min-width: 1024px)" });
export const mediaMd = useMediaQuery({ query: "(max-width: 768px)" });
export const mediaSm = useMediaQuery({ query: "(max-width: 640px)" });
