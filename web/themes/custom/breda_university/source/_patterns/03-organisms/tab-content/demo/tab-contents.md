---
title: tab-content
---
Component: tab-content

```
{% include '@organisms/_tab-content.twig' %}
```

Available variables for tab-content:
* tab_content_title [String]: Section title.
* tab_content_links [object]: List of tabs (links).
* tab_content_text [object]: List of tabs (links).

**tab_content_links**
This consist of a list of link. For each link this component can be used:

```
{% include '@organisms/_tab-content-link.twig' %}
```

With these variables:

* title [String]: Tab title used in navigation list and as url hash
* anchor [String]: Anchor id of the tab
* isFirst [boolean]: Wether this is the first tab

**tab_content_text**
This consist of a list of tab contents. For each tab this component can be used:

```
{% include '@organisms/_tab-content-text.twig' %}
```

With these variables:

* title [String]: Tab title used in navigation list and as url hash
* anchor [String]: Anchor id of the tab
* isFirst [boolean]: Wether this is the first tab
* tab.text [String/HTML]: Content of the tab
