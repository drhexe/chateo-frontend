import {
    PrivateRoutesType,
    RoutesType,
    generateRoutes,
    routeToPrivateRouteType,
    index,
    defaultPath,
} from './_routes';

/**
 * specify app routes by assigning the value `true` to them.
 * if you want to disable the index page of a route,
 * use the `index` symbol. example:
 * ```
 *  user: {
 *      [index]: false,
 *      // ...
 * }
 * ```
 */
const routes = generateRoutes({
    user: {
        [index]: false,
        login: true,
        signup: true,
    },
} satisfies RoutesType);

/**
 * mark certain parts of routes as private. routes are public by default.
 * you can specify default visibility for a path, with the symbol `defaultPath`
 * example:
 * ```
 * {
 *  [defaultPath]: true,
 *  user: {
 *      [defaultPath]: false,
 *      index: true
 *  }
 * }
 * ```
 */
const privateRoutes = {
    [defaultPath]: false,
} satisfies routeToPrivateRouteType<typeof routes>;

/**
 *
 * returns true if a route is private.
 * example:
 * ```
 * console.log(
 *  isRoutePrivate(routes.user.index)
 * ) //true
 * ```
 */
export function isRoutePrivate(route: string) {
    const splitted_route = route.split('/').filter((value) => !!value);
    let current_route: PrivateRoutesType | boolean = privateRoutes;
    while (typeof current_route !== 'boolean') {
        const tmp = splitted_route.shift() ?? defaultPath;
        current_route =
            current_route[tmp] ?? (current_route[defaultPath] || false);
    }
    return current_route;
}

export default routes;
