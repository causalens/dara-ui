---
title: Changelog
---

## NEXT

-   Fixed an issue where if a word was too long, such as in an url, the `Chat` message would overflow instead of wrap.

## 1.7.1

-   Added a new `Chat` component.

## 1.7.0

-   Fixed an issue with `NumericInput` where one could not enter decimal numbers ending in 0.
-   Fixed an issue where one was not able to type a negative number in `NumericInput` in controlled mode unless they started with the number before the sign.

## 1.6.1

-   `UploadDropzone` now has `enablePaste` prop to conditionally activate paste functionality, allowing for more customizable behavior. By default, pasting text directly into the `UploadDropzone` is now disabled, requiring explicit activation via the `enablePaste` prop.

## 1.6.0

-   `ContextMenu` component is now offset a few pixels from the cursor to prevent the first item from being accidentally selected when the context menu is opened.

## 1.5.2

-   Fixed an issue where if selecting the start or end date in a `Datepicker` always resulted in the user selecting the whole range instead of the selected input.
-   Fixed an issue where the filled button in the dark theme was using the wrong color, now it uses `blue1` color.

## 1.4.4

-   Added `onKeyDown` prop to NumericInput to bubble up keydown events
-   Added the `onChange` property to the `onChange` callback dependency

## 1.4.3

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
