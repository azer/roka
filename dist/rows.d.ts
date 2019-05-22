interface EmotionCSS {
    [key: string]: string | EmotionCSS;
}
export declare const listEnabledFor: {
    [prop: string]: boolean;
};
export default class Rows {
    raw: {
        [key: string]: string | string[] | Rows;
    };
    constructor();
    compile(): EmotionCSS;
    concat(rows: Rows): void;
    set(key: string, value: string | Rows): void;
}
export {};
