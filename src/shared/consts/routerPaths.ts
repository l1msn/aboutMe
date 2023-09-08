enum AppRoutes {
    MAIN = 'main',
    CSS = 'CSS',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

class RoutePaths {
    static getRouteMain() {
        return '/';
    }
    static getRouteCss() {
        return '/css';
    }
    static getRouteForbidden() {
        return '/forbidden';
    }
}

const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [RoutePaths.getRouteMain()]: AppRoutes.MAIN,
    [RoutePaths.getRouteCss()]: AppRoutes.CSS,
    [RoutePaths.getRouteForbidden()]: AppRoutes.FORBIDDEN,
};

export { AppRoutes, RoutePaths, AppRouteByPathPattern };
