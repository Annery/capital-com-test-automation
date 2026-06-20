import path from 'node:path';

const AUTH_DIR = path.resolve(__dirname, '../../.auth');

export const authFiles = {
    authorized: path.join(AUTH_DIR, 'authorized.json'),
    unauthorized: path.join(AUTH_DIR, 'unauthorized.json'),
} as const;

const stateStorage = {
    unregistered: undefined,
    unauthorized: authFiles.unauthorized,
    authorized: authFiles.authorized,
};

export type UserState = keyof typeof stateStorage;

export const credentials = {
    email: process.env.CAPITAL_EMAIL,
    password: process.env.CAPITAL_PASSWORD,
};

export function storageStateFor(state: UserState): string | undefined {
    return stateStorage[state];
}
