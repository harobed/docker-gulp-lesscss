# Docker + Gulp + LessCSS

This is a LessCSS builder example based on:

- NodesJS
- Gulp 4
- [less](https://github.com/less/less.js)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [clean-css](https://github.com/jakubpawlowicz/clean-css)

All this stuff are executed in Docker container.


## Prerequisites

- [Docker Engine](https://docs.docker.com/engine/) (tested with version `18.09.2`)
- [Docker Compose](https://docs.docker.com/compose/) (tested with version `1.23.2`)

On *macOS* you can install prerequisites with [Brew](https://brew.sh/index_fr):


## Usage

Install NodeJS packages:

```sh
$ ./scripts/install.sh
```

Build `styles/main.less` to `static/css/`:

```sh
$ ./scripts/less.sh
```

Turn on watching:

```
$ ./scripts/watch.sh
```
