import Rows from "./rows";
export interface IOptions {
    align?: string;
    family?: string[];
    size?: string;
    weight?: string;
    height?: string;
    line?: string;
    letterSpacing?: string;
    color?: string;
    uppercase?: boolean;
    lowercase?: boolean;
    capitalize?: boolean;
    ellipsis?: boolean;
    nodecoration?: boolean;
}
export default function type(rows: Rows, options: IOptions): void;
