import Rows from "./rows";
export interface IOptions {
    bg?: string;
    fg?: string;
    fill?: string;
}
export default function color(rows: Rows, options: IOptions): void;
