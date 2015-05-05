# Node-based CodeKit compiler
> A very simple wrapper of node-kit for building CodeKit files on the command line

Hacked together on [popular demand](https://github.com/jeremyworboys/node-kit/issues/15) :p

You will probably be better off with the more sofisticated [pykitlangc](https://github.com/gjo/python-codekitlang)
compiler, but if you require identical output as node-kit, then this will be your fix.

## Installation
`npm install -g fatso83/node-kit-cmd`

This installs the script in your PATH as `node-kit`. 

Dropping the `-g` flag will put the command in your local `node_modules/.bin` folder instead.

## Usage
`node-kit input.kit output.html`

Support all the stuff node-kit does.
