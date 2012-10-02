# My meddlings with Typescript

I've been messing around with typescript. Here are my experiments. They're messy :)

## Getting started

To install TypeScript:

```sh
npm install -g typescript
```

## Compiling

```sh
tsc file.ts
```

Adding `-e` executes it too.

## Compiling for the browser

You gotta do things slightly differently for the browser:

```sh
tsc file.ts --module amd
```

And then add [require.js](http://requirejs.org/) to your page so that `require(...)` works.

Take a look at `web/` to see an example.

### License

Copyright © 2012 Tom Ashworth

Do no

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The Software shall be used for Good, not Evil.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.