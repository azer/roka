import Rows from "./rows";
export interface IOptions {
    column?: string;
    columns?: string;
    inner?: string;
    innerTop?: string;
    innerRight?: string;
    innerBottom?: string;
    innerLeft?: string;
    outer?: string;
    outerTop?: string;
    outerRight?: string;
    outerBottom?: string;
    outerLeft?: string;
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    row?: string;
    around?: string;
}
export default function spacing(rows: Rows, options: IOptions): void;
