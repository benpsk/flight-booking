import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    avatar: string
}

export interface Flash {
    success: string,
    error: string
}
export interface Auth {
    user: User;
    guard: string,
}

export interface MenuItem {
    href: string;
    active: string;
    label: string;
    isNested: boolean;
    ul?: MenuItem[];
    open?: string[];
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: Auth,
    ziggy: Config & { location: string };
    flash: Flash
};
