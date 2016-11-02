# Guarantee Rate Game

## Launch

Point your `HttpServer` to `app/`. Alternitavely, just open `app/index.html` in your browser.

## Notes

App persists it's state in `localStorage` so you won't loose progress on page reload. You can reset the `current cards` by clicking on the red `reset` button. It won't reset anything besides `cards`. The `highScore` will show up after the first game session finished.

## Difficulty

To adjust dificulty, change `DIFFICULTY` constant in `app/js/constants`. Could be in range of `[0...10]`.

## Cheats

The app implements `momento` design pattern which mean you can have `undo`/`redo` functionality. To get the `god mode cheat`, type the next `Konami` code:

```
up up down down left right left right b a
```

The appropriate buttons will show up on the right of the `red reset button`.

## Development

In your terminal:

```
[sudo] npm install
```

Then launch webpack:

```
webpack
```

It will take care about `building` the app and assets.

If you want to use [LiveReload](https://github.com/livereload/LiveReload) instead of `webpack-dev-server`, run in your terminal:

```
gulp
```

Note that you need [LiveReload Browser Extention](http://livereload.com/extensions/) for autoreloads on code changes.

## License

(The MIT License)

Copyright (c) Oleg Solomka [@LegoMushroom](https://twitter.com/legomushroom) [legomushroom@gmail.com](mailto:legomushroom@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
