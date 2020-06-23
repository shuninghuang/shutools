export type SchemaCommonFields = {
    createdBy: string;
    archivedBy: string;
    updatedBy: string;
    deletedBy: string;
    createdAt: Date;
    updatedAt: Date;
    archivedAt: Date;
    deletedAt: Date;
}
export type EntityCommonFields = {
    id: number;
    name: string;
    desc: string;
} & SchemaCommonFields