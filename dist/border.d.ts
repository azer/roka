import Rows from "./rows";
export interface IOptions {
    top?: string;
    left?: string;
    right?: string;
    radius?: string;
    bottom?: string;
    around?: string;
    color?: string;
}
export default function border(rows: Rows, options: IOptions): void;
