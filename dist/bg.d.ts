import Rows from "./rows";
export interface IOptions {
    color?: string;
    image?: string;
    transparent?: boolean;
    cover?: boolean;
    contain?: boolean;
    center?: boolean;
    norepeat?: boolean;
    repeat?: string;
    position?: string;
    size?: string;
}
export default function bg(rows: Rows, options: IOptions): void;
