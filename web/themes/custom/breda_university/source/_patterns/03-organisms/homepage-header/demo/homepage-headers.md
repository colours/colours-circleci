---
title: homepage-header
---
Component: homepage-header

```
{% include '@organisms/homepage-header.twig' %}
```

Available variables for homepage_header:
* homepage_header.picture.img_element [object]: Fallback image used in the header.
* homepage_header.picture.sources [object]: Sources for responsive image used in the header.
* homepage_header.primary_links [Object]: Three cards (card-simple)
* homepage_header.link_list [Object]: One card (card-link-list)

**primary_links**
This consist of three card-simple component. For each card this component can be used:

```
{% include '@molecules/_card-simple.twig' %}
```
With these variables:

* card_category [String]: Category title of the card
* card_link [String]: Link on the card
* card_link_text [String]: Link text on the card
* card_text [String]: Text in the card


**link_list**
This consist of a card with a list of links. 

```
{% include '@molecules/_card-link-list.twig' %}
```

With these variables:

* card_category [String]: Category title of the card
* card_title [String]: Card title
* card_link_items [String]: List of link items which get added to the @molecules/_link-list.twig
