# How to prepare SVG template

## Using [Adobe XD](https://www.adobe.com/products/xd.html)

If you are a user of Adobe XD, you are lucky. Prepare SVG Template by using Adobe XD is strongly recommended.

Because if you put some placeholders in the artboard like `%placeholder1%` or `%serialPlaceholder[0]%`, Adobe XD assigns `id`s to `<text>` elements in SVG like `_placeholder1_` or `_serialPlaceholder_0_`
automatically.

From this, you can embed the exported SVG into your HTML without any modification even if you use some `id`-unsafe characters.

And as a result, you can replace only placeholder to actual value without replacing `id` 👍

### Concrete procedure

Design the document.

![](https://user-images.githubusercontent.com/4360663/121792479-2ff4c900-cc30-11eb-97cd-882620123a42.png)

Export it as SVG.

![](https://user-images.githubusercontent.com/4360663/121792386-05eed700-cc2f-11eb-9874-b98e832815bd.png)

At this time, note that `Save images` option must be set as `Embed` and `Path Options` option must NOT be checked.

![](https://user-images.githubusercontent.com/4360663/121792394-29198680-cc2f-11eb-8e09-7fa29a7b65e1.png)

Then, you've got a template SVG file like [this](../js/tests/resources/real-world-paper-xd.svg) 👍

## Using [Figma](https://www.figma.com/)

To be honest, Figma is not very good for this use case.

Figma doesn't automatically replace `id` including some unsafe characters like Adobe XD does.

So you have to replace `id` by hand like as following.

```bash
$ sed -E 's/id="%([^%]+)%"/id="_\1_"/' /path/to/exported-from-figma.svg \
| sed -E 's/id="_(.+)\[(.+)\]_"/id="_\1_\2_"/' > /path/to/exported-from-figma-tweaked.svg
```

This command converts `id`s to safe format.

And one more thing. With Figma, you should not use multi-byte characters as placeholder.

If you use multi-byte characters, Figma converts them into [XML character reference](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_reference_overview) when exporting. This is very inconvenient for replacing or specifying as `id`.

### Concrete procedure

Design the document.

![](https://user-images.githubusercontent.com/4360663/121792484-4a2ea700-cc30-11eb-8ab9-9b479065ef8c.png)

Export it as SVG. At this time, not that `Content only` and `Include "id" Attribute` options must be checked and `Outline Text` option must NOT be checked.

![](https://user-images.githubusercontent.com/4360663/121792512-c1643b00-cc30-11eb-8372-279337d570b4.png)

Then, you've got an SVG file like [this](../js/tests/resources/real-world-paper-figma.svg).

After that, convert `id`s to safe format string by following command.

```bash
$ sed -E 's/id="%([^%]+)%"/id="_\1_"/' /path/to/exported-from-figma.svg \
| sed -E 's/id="_(.+)\[(.+)\]_"/id="_\1_\2_"/' > /path/to/exported-from-figma-tweaked.svg
```

Finally, you've got a template SVG file like [this](../js/tests/resources/real-world-paper-figma-tweaked.svg) 👍

## Using some other tools

The exported SVG has to meet the following conditions.

* Text isn't outlined. (`<path>` isn't used for text but `<text>` is)
* Can specify `<text>` elements including placeholders with CSS selector. (like `#some-id`)

> If you use svg-paper with SVG output by other tools, please [send me a PR](https://github.com/ttskch/svg-paper/edit/main/docs/workflows/README.md) 😇
