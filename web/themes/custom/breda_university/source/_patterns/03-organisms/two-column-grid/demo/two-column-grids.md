---
title: two-column-grid
---

**Component: two-column grid**

Used on: homepage

``` twig
    {% include '@organisms/_two-column-grid.twig' %}
```

Available variables for two-column-grid by using the *with* statement:

* two_column_grid.title [String]: Introduction text that is shown lager.
* two_column_grid.call_to_action_text [String]: Call to action button text
* two_column_grid.call_to_action_url [String]: Call to action button url
* two_column_grid.cards

For each card this component and variables can be used

``` twig
    {% include '@molecules/_card-column.twig' %}
```

Variables:
* columns [int]: Numbe of column in the grid (2 or 3)
* card.title [string]: title
* card.text [string]: string
* card.layout [string]: string with one of these values
    * card--orange
    * card--white
    * card--grey
    * card--blue
    * card--grey--bi
    * card--blue--bi
* card.image [string]: image url
* button:
    * button_text [string]: Text on button
    * button_link [string]: Link on button