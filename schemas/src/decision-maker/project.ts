import { Factor } from "./decision";
import { SchemaCommonFields } from "../schema";
export type Thumbnail = string;
export type Project = {
    id: string;
    name: string;
    desc: string;
    thumbnail: Thumbnail;
    color: string;
    contributors: [string, ...string[]];

    factors: [Factor, ...Factor[]];
    options: [Option, ...Option[]];
} & SchemaCommonFields
export type Option = {
    id: string;
    name: string;
    desc: string;
    color: string;
    img: string;
    score: Score;
    scores: (Score|undefined)[]; // map to factors
} 
export type Score = {
    manual: boolean;
    score: number;
    updatedAt: Date;
};