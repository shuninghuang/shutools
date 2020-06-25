import { Permission } from './authorization';

export type User = {
    id: number;
    email: string;
    name: string;
    desc: string;
    role: Role;
}
export type Role = {
    id: number;
    name: string;
    desc: string;
    permissions: Permission[]
}