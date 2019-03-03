export declare const listEnabledFor: {
    [prop: string]: boolean;
};
export default class Rows {
    raw: {
        [key: string]: string | string[] | Rows;
    };
    constructor();
    compile(): string;
    set(key: string, value: string | Rows): void;
}
