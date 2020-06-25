export type MODEL = "factor" | "project" | "user" | "decision";
export enum ACTIONS {
    READ,
    CREATE,
    UPDATE,
    DELETE,
    ARCHIVE
}
export type Permission = {
    [model in keyof MODEL]: ACTIONS[]
}