enum AppRoutes {
    MAIN = 'main',
    JS = 'js',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

class RoutePaths {
    static getRouteMain() {
        return '/';
    }
    static getRouteJs() {
        return '/js';
    }
    static getRouteForbidden() {
        return '/forbidden';
    }
}

const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [RoutePaths.getRouteMain()]: AppRoutes.MAIN,
    [RoutePaths.getRouteJs()]: AppRoutes.JS,
    [RoutePaths.getRouteForbidden()]: AppRoutes.FORBIDDEN,
};

export { AppRoutes, RoutePaths, AppRouteByPathPattern };
