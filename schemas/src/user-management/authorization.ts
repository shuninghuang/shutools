export type MODEL = "factor" | "project" | "user" | "decision";
export enum ACTIONS {
    READ,
    UPDATE,
    DELETE,
    ARCHIVE
}
export type Rule = {
    name: string;
    desc: string;
    
} 
export type Permission = {
    [model in keyof MODEL]: ACTIONS[]
}