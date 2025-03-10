export type ValueOf<T extends Record<string, string | number | object>> = T[keyof T]
