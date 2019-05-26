
import builder from "@daybrush/builder";

export default builder([
    {
        name: "ListMap",
        input: "src/ListMap.ts",
        output: "./dist/list-map.js",
    },
    {
        name: "ListMap",
        input: "src/ListMap.ts",
        output: "./dist/list-map.min.js",
        uglify: true,

    },
    {
        name: "ListMap",
        input: "src/ListMap.ts",
        output: "./dist/list-map.pkgd.js",
        resolve: true,
    },
    {
        name: "ListMap",
        input: "src/ListMap.ts",
        output: "./dist/list-map.pkgd.min.js",
        resolve: true,
        uglify: true,
    },
    {
        input: "src/ListMap.ts",
        output: "./dist/list-map.esm.js",
        exports: "named",
        format: "es",
    },
    {
        input: "src/ListMap.ts",
        output: "./dist/list-map.cjs.js",
        exports: "named",
        format: "cjs",
    },
]);
