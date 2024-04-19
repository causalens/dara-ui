---
title: Changelog
---

## NEXT

-   `CausalGraphEditor` now only recalculates its layout on resize of the graph window if the graph is not in focus.

## 1.7.4

-   Fixed an issue where if `EditorMode` was not defined edges were always added as undirected.

## 1.7.3

-   Fixed an issue where graph rendering would enter an infinite loop and cause crashes in some circumstances.

## 1.7.0

-   Graph layout is now recalculated after every resize of the graph window detected, preventing scenarios where the initially computed layout is not optimal for the new window size due to a sudden graph pane resize
-   Zooming the graph with mousewheel is now disabled by default and requires first focusing the graph by clicking on it. This is to prevent accidental zooming when scrolling through the page.
The previous behaviour can be restored by setting `requireFocusToZoom` prop to false.
-   Fixed issues with graph viewer tooltip appearing even over parts of the graph which are not currently visible on the screen
-   Updated so that `TimeSeriesCausalGraph` now only adds to layers nodes which have at least one other node with the same `variable_name`.
-   Updated so that is `PlanarLayout` is chosen we do not add the tiers for `TimeSeriesCausalGraph`.
-   Fixed an issue where one could not add nodes to a `TimeSeriesCausalGraph`.

## 1.6.0

-   Updated the type of `additionalLegends` to also allow defining nodes
-   Added a new prop `defaultLegends` which allows default legends to be passed based on each `EditorMode`. Consequently the default legends have been removed from this package and moved to dara.

## 1.5.2

-   Added `layeringAlgorithm` prop to `PlanarLayout`, which allows the ability to define the layering algorithm between default `SIMPLEX` or `LONGEST_PATH`

## 1.5.1

-   Added `simultaneousEdgeNodeSelection` prop to `CausalGraphEditor` which when set to true allows for both an edge and a node to be selected simultaneously.
-   If `TimeSeriesCausalGraph` object is passed to `CausalGraphEditor` and no tiers are defines, it now uses `time_lag` and `variable_name` to define the `order_nodes_by` and `group` respectively.
-   Fixed an issue where we couldn't set `tiers` to the `PlanarLayoutBuilder`.

## 1.5.0

-   Added support for tiered layout in `Fcose`, `Planar`, `Spring` and `Marketing` layouts. It allows for nodes to be placed on tiers following some hierarchy and to further define requirements of nodes positions within that tier.

## 1.4.4

-   Fix an issue where dragging nodes too quickly would cause the node drag to stop working
-   Added `Soft Directed` edge to legend of `EdgeEncoder`

## 1.4.0

-   Added a differentiated arrow for `EdgeConstraintType.SOFT_DIRECTED`
-   Added support for edge `source`/`destination` fields for `CausalGraphEditor`.

## 1.3.0

-   Updated `EdgeConstraintType` to comply to `0.3.0` of `cai-causal-graph`.
-   Updated so that if no `EditorMode` is passed to `CausalGraphEditor`, then it checks if graph is DAG, if so `EditorMode` defaults to `DEFAULT`, else defaults to `PAG_VIEWER`.

## 1.2.2

-   Updated serializers to support setting metadata in extra attributes.

## 1.2.0

-   Updated so that graph object can take extra fields in its object, and `edgeExtrasContent` was added to the editor to allow extras fields to be added to side panel.

## 1.0.0

-   Initial release
