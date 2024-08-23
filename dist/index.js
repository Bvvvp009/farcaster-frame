"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const jsx_runtime_1 = require("frog/jsx/jsx-runtime");
const node_server_1 = require("@hono/node-server");
const serve_static_1 = require("@hono/node-server/serve-static");
const frog_1 = require("frog");
const dev_1 = require("frog/dev");
exports.app = new frog_1.Frog({
    title: 'My First Farcaster Frame',
});
exports.app.use('/*', (0, serve_static_1.serveStatic)({ root: './public' }));
exports.app.frame('/', (c) => {
    const { buttonValue } = c;
    return c.res({
        image: ((0, jsx_runtime_1.jsx)("div", { style: {
                alignItems: 'center',
                background: 'linear-gradient(to right, #432889, #17101F)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
            }, children: (0, jsx_runtime_1.jsx)("div", { style: {
                    color: 'white',
                    fontSize: 60,
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.4,
                    padding: '0 120px',
                    whiteSpace: 'pre-wrap',
                }, children: buttonValue ? `You clicked: ${buttonValue}` : 'Welcome to my Farcaster Frame!' }) })),
        intents: [
            (0, jsx_runtime_1.jsx)(frog_1.Button, { value: "Click me!", children: "Click me!" }),
        ],
    });
});
const port = 3000;
console.log(`Server is running on port ${port}`);
(0, dev_1.devtools)(exports.app, { serveStatic: serve_static_1.serveStatic });
(0, node_server_1.serve)({
    fetch: exports.app.fetch,
    port,
});
