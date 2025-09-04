import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    ...prefix("mock-recruitment-app", [
        index("routes/search.tsx")
    ])
] satisfies RouteConfig;
