import Rows from "./rows";
export interface IOptions {
    flex?: boolean;
    block?: boolean;
    inlineBlock?: boolean;
    inline?: boolean;
    height?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    minHeight?: string;
    maxHeight?: string;
    overflow?: string;
}
export default function box(rows: Rows, options: IOptions): void;
