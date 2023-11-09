---
title: Changelog
---

## NEXT

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
