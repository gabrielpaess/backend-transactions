"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "debug": "ts-node-dev --inspect --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "start": "node ./dist/index.js"
  },