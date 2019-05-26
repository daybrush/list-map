
import builder from "@daybrush/builder";

export default builder([
    {
        name: "ListMap",
        input: "src/index.umd.ts",
        output: "./dist/listmap.js",
    },
    {
        name: "ListMap",
        input: "src/index.umd.ts",
        output: "./dist/listmap.min.js",
        uglify: true,

    },
    {
        name: "ListMap",
        input: "src/index.umd.ts",
        output: "./dist/listmap.pkgd.js",
        resolve: true,
    },
    {
        name: "ListMap",
        input: "src/index.umd.ts",
        output: "./dist/listmap.pkgd.min.js",
        resolve: true,
        uglify: true,
    },
    {
        input: "src/index.ts",
        output: "./dist/listmap.esm.js",
        exports: "named",
        format: "es",
    },
    {
        input: "src/index.ts",
        output: "./dist/listmap.cjs.js",
        exports: "named",
        format: "cjs",
    },
]);
