# svg-paper

[![Travis (.com)](https://img.shields.io/travis/com/ttskch/svg-paper.svg?style=flat-square)](https://travis-ci.com/ttskch/svg-paper)
[![npm version](https://img.shields.io/npm/v/svg-paper.svg?style=flat-square)](https://www.npmjs.com/package/svg-paper)
[![npm](https://img.shields.io/npm/dm/svg-paper?label=npm&style=flat-square)](https://www.npmjs.com/package/svg-paper)
[![](https://data.jsdelivr.com/v1/package/npm/svg-paper/badge)](https://www.jsdelivr.com/package/npm/svg-paper)

The world's most maintainable way to create paper-printable documents 🖨💘

![](https://user-images.githubusercontent.com/4360663/121766151-f6b64d80-cb8a-11eb-8736-3a28b4c03d70.png)

## Workflows

You can print beautiful and maintainable paper documents by following steps:

1. Design the document with [Adobe XD](https://www.adobe.com/products/xd.html), [Figma](https://www.figma.com/), or something
1. Export it as SVG
1. Embed SVG into your HTML and fix it with **svg-paper**
1. That's it 💥

To learn more please see [this doc](docs/workflows/README.md) 📝

## Installation

### CDN

You can get built assets from [jsDelivr](https://www.jsdelivr.com/package/npm/svg-paper).

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svg-paper@x.x.x/dist/svg-paper.min.css">

<script src="https://cdn.jsdelivr.net/npm/svg-paper@x.x.x/dist/svg-paper.min.js"></script>
```

### npm

Of course you can install via [npm](https://www.npmjs.com/package/svg-paper).

```bash
$ npm install svg-paper
```

## Basic usage

You can replace or adjust SVG contents in HTML easily with svg-paper like following.

```js
import SvgPaper from 'svg-paper'
// or
// const SvgPaper = require('svg-paper')

const paper = new SvgPaper()

paper
  // replace placeholder to actual value
  .replace('%placeholder1%', 'Actual value 1')
  // ... and more

  // set max width to 1000
  // in the other words, if actual width of the content is bigger than 1000 it shrinks automatically
  .adjustText('#selector1', 1000)

  // set max width to 800 and brings the element #_caseName to the center of 800 width area   
  .adjustText('#selector2', 800, 'middle')

  // of course you can bring it to the end
  .adjustText('#selector3', 800, 'end')

  // automatically wrap or shrink actual content so that it fits within the specified area (600 x 300)
  .adjustTetxarea('#selector4', 600, 300)

  // you can pass some additional args
  .adjustTextarea('#selector5',
    600,  // width 
    300,  // height
    1.2,  // lineHeight : default is 1.2 times font-size
    0.5,  // paddingX   : default is 0.5 times font-size
    0.5,  // paddingY   : default is 0.5 times font-size
    false // nowrap     : default is false. if true, content will not be wrapped
  )

  // finally, apply all replacing and adjusting to DOM
  .apply()
```

To beautify preview screen, you should add only 3 lines to your HTML 👍

```html
<head>
  ...
  <link rel="stylesheet" href="svg-paper.min.css"> <!-- here -->
  <style>@page { size: A4 }</style> <!-- here -->
</head>

<body class="A4"> <!-- here -->
  <svg>...</svg>
</body>
```

Just load `svg-paper.min.css` (or `svg-paper.css`), in `<head>` set [@page size](https://developer.mozilla.org/en-US/docs/Web/CSS/@page/size), and set the class of `<body>` to specify page size.

Available page sizes are:

* `A3` `A3 landscape`
* `A4` `A4 landscape`
* `A5` `A5 landscape`
* `letter` `letter landscape`
* `legal` `legal landscape`

To learn more about usage please see [this doc](docs/workflows/README.md) or [some test codes](js/tests/real-world.test.js).

## Tips

### Hiding content before placeholders are replaced

svg-paper replaces placeholders and adjust text/textarea after DOM loaded, so the content before replaced and adjusted will be shown on the screen for a moment 🤔

This problem is very easy to solve just by adding some "blinder" layer on the content and disappear it after `.apply()` 👍

```html
<body>
  <div id="blinder" style="width:100vw; height:100vh; background-color:#ccc"></div>
  <svg>...</svg>
</body>
```

```js
paper.apply()

document.querySelector('#blinder').style.display = 'none'
```

## With non Node.js back-end

Even if your back-end isn't Node.js, of course you can use svg-paper 👍

The most easy ways is just passing replacements and text/textarea adjustment parameters to front-end as JSON string.

### e.g. PHP and Twig

```php
// Controller
public function paper(YourModel $model, YourPaperDefinition $paper)
{
    return $this->render('paper.html.twig', [
        'svg' => $paper->getSvg(),
        'replacements' => $paper->getReplacements($model),
        'textAdjustments' => $paper->getTextAdjustments(),
        'textAreaAdjustments' => $paper->getTextAreaAdjustments(),
    ]);
}
```

```php
// YourPaperDefinition
class YourPaperDefinition
{
    public function getSvg()
    {
        return file_get_contents('/path/to/paper.svg');
    }
    
    public function getReplacements(YourModel $model): array
    {
        return [
            '%placeholder1%' => 'Actual value 1',
            // ... and more
        ];
    }
    
    public function getTextAdjustments(): array
    {
        return [
            // selector => [args for SvgPaper.adjustText()]
            '#selector1' => [1000],
            '#selector2' => [800, 'middle'],
            '#selector3' => [800, 'end'],
        ];
    }

    public function getTextareaAdjustments(): array
    {
        // selector => [args for SvgPaper.adjustTextarea()]
        return [
            '#selector2' => [600, 300], 
            // ... and more
        ];
    }
}
```

```twig
{# paper.html.twig #}
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="svg-paper.min.css">
  <style>@page { size: A4 }</style>
</head>

<body class="A4">
  {{ svg|raw }}
  <div data-replacements="{{ replacements|json_encode }}"></div>
  <div data-text-adjustments="{{ textAdjustments|json_encode }}"></div>
  <div data-textarea-adjustments="{{ textAdjustments|json_encode }}"></div>
  <script src="svg-paper.min.js"></script>
  <script src="your-script.js"></script>
</body>
</html>
```

```js
// your-script.js
const replacements = $('[data-replacements]').data('replacements')
const textAdjustments = $('[data-adjustments]').data('text-adjustments')
const textareaAdjustments = $('[data-adjustments]').data('textarea-adjustments')

const paper = new SvgPaper()

for (let [search, replacement] of Object.entries(replacements)) {
  paper.replace(search, replacement)
}

for (let [selector, args] of Object.entries(textAdjustments)) {
  paper.adjustText(selector, ...args)
}

for (let [selector, args] of Object.entries(textareaAdjustments)) {
  paper.adjustTextarea(selector, ...args)
}

paper.apply()
```

## PDF Generation

You can easily print to PDF directly by using [electron-pdf](https://github.com/fraserxu/electron-pdf).

```bash
$ npm install --global electron-pdf
$ electron-pdf your-document.html your-document.pdf
```

Enjoy! ✨
