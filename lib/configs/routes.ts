import {
    PrivateRoutesType,
    RoutesType,
    generateRoutes,
    routeToPrivateRouteType,
    index,
} from './_routes';

const routes = generateRoutes({
    user: {
        [index]: false,
        login: true,
    },
} satisfies RoutesType);

const privateRoutes: routeToPrivateRouteType<typeof routes> = {
    default: false,
} satisfies PrivateRoutesType;

export function isRoutePrivate(route: string) {
    const splitted_route = route.split('/').filter((value) => !!value);
    let current_route: PrivateRoutesType | boolean = privateRoutes;
    while (typeof current_route !== 'boolean') {
        const tmp = splitted_route.shift() ?? 'default';
        current_route =
            current_route[tmp] ?? (current_route['default'] || false);
    }
    return current_route;
}

export default routes;
