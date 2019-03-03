import Rows from "./rows";
export interface IOptions {
    columns?: string;
    rows?: string;
    align?: string;
    justify?: string;
}
export default function grid(rows: Rows, options: IOptions): void;
