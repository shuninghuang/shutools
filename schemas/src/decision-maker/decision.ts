import { SchemaCommonFields, EntityCommonFields } from "./../schema";
import { Option } from "./project";

export type Factor = {
    name: string;
    desc: string;
    color: string;
    weight: Weight;
}
export type Weight = {
    max: number;
    min: number;
    step: number;
    color: string;
};
export type Order = [Factor, 'desc'|'asc'][];
export type Result = EntityCommonFields & {
    result: [Option, ...Option[]];
};