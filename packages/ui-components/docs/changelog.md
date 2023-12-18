---
title: Changelog
---

## 1.4.3

-   Pinned fortawesome to `~6.4.0`

## 1.4.1

-   Exposed the Tippyjs delay prop on the `Tooltip` component.

## 1.2.3

-   Fixed an issue where `RadioGroup`'s state was updated twice.

## 1.2.1

-   Fixed an issue where `NumericInput` width could not be changed.
-   Fixed an issue where `NumericInput` overflowed when hovered.
-   Fixed an issue where `NumericInput` input did not take full space available to it.
-   Fixed an issue where `Datepicker` could be overlapped by other components in a horizontal container.
-   Fixed an issue where `Multiselect`'s input took too much space

## 1.1.0

-   Fixed an issue where `Datepicker` in controlled mode would sometimes end up in an infinite loop.
-   Fixed an issue where `Datepicker` if range was given did not show end year in the select.
-   Fixed an issue where `Table` column resizing would not affect cell width.
-   Fixed an issue where `Multiselect` items would overflow when fixed height was given.

## 1.0.1

-   Fixed an issue where `CarouselItem` component could overflow into next component.
-   Fixed an issue where text was not wrapped in `Carousel` component.
-   Fixed an issue where `Switch` component did not respect the root font size

## 1.0.0

-   Initial release
-   Memoize `Table` rows to improve performance.
