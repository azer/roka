interface IEmotionCSS {
    [key: string]: string | IEmotionCSS;
}
export declare type ICondFn = (props: {
    [name: string]: any;
}) => boolean;
export declare type IPropFn = (props: {
    [name: string]: any;
}) => Rows;
export interface IProperty {
    condfn?: ICondFn;
    key?: string;
    value?: string | string[] | Rows | IPropFn;
}
export declare const listEnabledFor: {
    [prop: string]: boolean;
};
export default class Rows {
    raw: IProperty[];
    constructor();
    compile(props: {
        [name: string]: any;
    }, _result?: IEmotionCSS): IEmotionCSS;
    concat(rows: Rows): void;
    add(property: IProperty): void;
    set(key: string, value: string | Rows): void;
}
export {};
