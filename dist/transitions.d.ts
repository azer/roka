import Rows from "./rows";
export interface ITransition {
    fn: string;
    duration: number;
    prop?: string;
    delay?: string;
}
export default function setTransitions(rows: Rows, transitions: ITransition[]): void;
export declare function define(options: ITransition): string;
