---
title: text-with-media
---

**Component: text-with-media**

Used on: content page, program detail page

``` twig
    {% include '@organisms/_text-with-media.twig' %}
```

Available variables for two-column-grid by using the *with* statement:

Available variables for text-with-media:
 * text_with_media.heading_type [String]: h1 or h2 (h2 is default)
 * text_with_media.title [String]: Title
 * text_with_media.text [String]: Main text column
 * text_with_media.align_media_right [Boolean]: Place text left or right
 * text_with_media.media [Boolean]: Either a picture elemen or an video element.