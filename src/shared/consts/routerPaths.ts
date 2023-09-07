enum AppRoutes {
    MAIN = 'main',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

class RoutePaths {
    static getRouteMain() {
        return '/';
    }
    static getRouteForbidden() {
        return '/forbidden';
    }
}

const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [RoutePaths.getRouteMain()]: AppRoutes.MAIN,
    [RoutePaths.getRouteForbidden()]: AppRoutes.FORBIDDEN,
};

export { AppRoutes, RoutePaths, AppRouteByPathPattern };
