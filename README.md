# Vite Mode Issue

This example is built on the
[Vanilla Vite Application](https://vitejs.dev/guide/#trying-vite-online)
from the quick start guide.

This is a minimal example showing that Vite build with `--mode=developemnt` doesn't
seem to be correctly identifying as development. The `import.meta.env.DEV` is `false`
and `import.meta.env.PROD` is `true` when it should be the opposite. The
`import.meta.env.MODE` is correctly showing the value that was passed in the mode
argument.

To run this example:

```shell
npm install
npm start
```

This will run a vite build with `--mode=development` that can be opened from the created
dist folder. Watch is enabled so any changes to the source files will trigger a rebuild.
