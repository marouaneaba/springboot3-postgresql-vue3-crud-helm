# demo-vuejs-3

This template should help get you started developing with Vue 3 in Vite.

## Start with docker file

Build docker image
```
 docker build -t demo-vuejs-3:1.0 .
```

Run docker image & redirect port
```
docker run -p 80:80 demo-vuejs-3:1.0
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Install TypeScript:

```sh
npm install --save-dev typescript vue-tsc @types/node
```