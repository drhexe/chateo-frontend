type Writable<T> = T extends object
    ? { -readonly [K in keyof T]: Writable<T[K]> }
    : T;
type OmitNever<T> = {
    [K in keyof T as T[K] extends never ? never : K]: T[K] extends object
        ? OmitNever<T[K]>
        : T[K];
};

type routeGen<routes, T extends string = '/'> = {} & {
    index: typeof index extends keyof routes
        ? routes[typeof index] extends false
            ? never
            : T
        : T;
} & {
    [key in keyof Omit<routes, 'index'>]: T extends string
        ? key extends string
            ? routes[key] extends boolean
                ? `${T}${key}/`
                : routeGen<routes[key], `${T}${key}/`>
            : never
        : never;
};
export interface RoutesType {
    [key: symbol]: boolean;
    [key: string]: RoutesType | boolean;
}
interface RoutesResType {
    [key: symbol]: boolean;
    [key: string]: RoutesResType | boolean | string;
}
export type routeToPrivateRouteType<T> = {
    [key in keyof T]+?: boolean | routeToPrivateRouteType<T[key]>;
} & {
    [defaultPath]?: boolean;
};
export interface PrivateRoutesType {
    [key: string]: boolean | PrivateRoutesType | undefined;
    [key: symbol]: boolean | PrivateRoutesType | undefined;
}

function join(a: string, b: string) {
    if (a.endsWith('/')) return a + b;
    return a + '/' + b;
}
export const index = Symbol('index');
export const defaultPath = Symbol('default');
export function generateRoutes<T extends RoutesType>(
    routes: T,
    rootPath = '/'
): OmitNever<routeGen<Writable<T>>> {
    let res: RoutesResType = {};
    if (routes[index] !== false) {
        res.index = rootPath;
    }
    Object.entries(routes).forEach(([key, val]) => {
        if (val === true) {
            res[key] = join(rootPath, key);
        } else if (typeof val === 'object') {
            res[key] = generateRoutes(val, join(rootPath, key));
        }
    });
    return res as any;
}
