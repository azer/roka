/// <reference types="react" />
import { IOptions as ColorOptions } from "./color";
import { IOptions as SpacingOptions } from "./spacing";
import { IOptions as GridOptions } from "./grid";
import { IOptions as PositionOptions } from "./position";
import Rows from "./rows";
import { IOptions as TypeOptions } from "./type";
import { IOptions as BorderOptions } from "./border";
import { IOptions as BoxOptions } from "./box";
import { IOptions as ListOptions } from "./list";
import { ITransition } from "./transitions";
import { IOptions as BackgroundOptions } from "./bg";
declare type ICondFn = (props: {
    [name: string]: any;
}) => boolean;
declare type IWithFn = (props: {
    [name: string]: any;
}) => Roka;
interface ICondition {
    fn: ICondFn;
    style: Roka;
}
declare class Roka {
    rows: Rows;
    conditions: ICondition[];
    withFns: IWithFn[];
    constructor();
    absolute(options?: PositionOptions): Roka;
    back(): Roka;
    bg(options: BackgroundOptions): Roka;
    block(options?: BoxOptions): Roka;
    border(options: BorderOptions): Roka;
    center(): Roka;
    circle(): Roka;
    clone(): Roka;
    color(options: ColorOptions): Roka;
    cond(fn: ICondFn, style: Roka): Roka;
    content(text: string): Roka;
    cover(image: string): Roka;
    css(): string;
    depth(options: {
        front?: boolean;
        back?: boolean;
        index?: number;
    }): Roka;
    easein(time: number, props?: string[]): Roka;
    easeout(time: number, props?: string[]): Roka;
    element(tag?: string): (props: any) => import("react").ReactElement<{
        className: string;
    }, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    fg(colorCode: string): Roka;
    fixed(options?: PositionOptions): Roka;
    front(): Roka;
    grid(options?: GridOptions): Roka;
    inline(options?: BoxOptions): Roka;
    inlineBlock(options?: BoxOptions): Roka;
    list(options: ListOptions): Roka;
    mono(options?: TypeOptions): Roka;
    noborders(): Roka;
    nooutline(): Roka;
    nooverflow(): Roka;
    pointer(): Roka;
    rotate(degree: number): Roka;
    round(radius: string): Roka;
    relative(options?: PositionOptions): Roka;
    sans(options?: TypeOptions): Roka;
    scale(...values: number[]): Roka;
    select(selector: string, roka: Roka): Roka;
    serif(options: TypeOptions): Roka;
    set(property: string, value: string): Roka;
    shadow(opacity?: number): Roka;
    size(options: BoxOptions): Roka;
    spacing(options: SpacingOptions): Roka;
    sticky(options?: PositionOptions): Roka;
    stretch(options?: BoxOptions): Roka;
    transition(options: ITransition): Roka;
    transitions(timingFn: string, duration: number, props?: string[]): Roka;
    uppercase(options?: TypeOptions): Roka;
    text(options: TypeOptions): Roka;
    transparent(): Roka;
    with(fn: IWithFn): Roka;
}
declare const _default: () => Roka;
export default _default;
