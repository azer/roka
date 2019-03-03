import Rows from "./rows";
export interface IOptions {
    absolute?: boolean;
    relative?: boolean;
    fixed?: boolean;
    sticky?: boolean;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}
export default function position(rows: Rows, options: IOptions): void;
