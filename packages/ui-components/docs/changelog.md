---
title: Changelog
---
## 0.2.1

-   Simplified `Textarea` component, it no longer has custom resizer but widths/heights are now obeyed. 
-   Added new prop `resize` to `Textarea` component allowing to set whether the textarea is resizable, and if so, in which directions.
-   Added `TriStateCheckbox` to the list of components exported at top level.
-   Fix for `Table` alignment of columns.
-   Fix for `Table` `maxWidth`'s column not being passed accurately to its cells.
-   Fixed an issue where `TriStateCheckbox` would not appear on `Table` header.
## 0.1.0

-   Initial release, renamed from `@cl/ui-components` to `@darajs/ui-components`
-   Fix `Table` for a scenario which if a row was undefined, the table would error.
