/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { useDrag } from 'react-dnd';

import styled, { useTheme } from '@darajs/styled-components';
import { Tooltip } from '@darajs/ui-components';

import { getTooltipContent } from '../shared/utils';
import { DEFAULT_NODE_SIZE, DragItem, NODE, NodeItem, NodeSizeProp } from './shared';

const NodeCircle = styled.div<NodeSizeProp & { $isDragging?: boolean; $isMatch: boolean; $viewOnly?: boolean }>`
    cursor: ${(props) => {
        if (props.$viewOnly) {
            return 'inherit';
        }

        return props.$isDragging ? 'grabbing' : 'grab';
    }};

    transform: translate(0, 0);

    display: flex;
    align-items: center;
    justify-content: center;

    width: ${(props) => `${props.$nodeSize ?? DEFAULT_NODE_SIZE}px`};
    height: ${(props) => `${props.$nodeSize ?? DEFAULT_NODE_SIZE}px`};
    padding: 1rem;

    color: ${(props) => props.theme.colors.text};

    opacity: ${(props) => (props.$isDragging ? 0.8 : 1)};
    background-color: ${(props) => props.theme.colors.blue4};
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.4));
    border-color: ${(props) => props.theme.colors.primary};
    border-style: solid;
    border-width: ${(props) => (props.$isMatch ? '4px' : '1px')};
    border-radius: 50%;

    &:hover {
        filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.4));
    }
`;

const NodeText = styled.span<{ $labelSize?: number; $wrapNodeText?: boolean }>`
    ${(props) =>
        props.$wrapNodeText
            ? `
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow-wrap: anywhere;
    `
            : `
        text-overflow: ellipsis;
        white-space: nowrap;
    `};

    user-select: none;
    overflow: hidden;
    font-size: ${(props) => (props.$labelSize ? `${props.$labelSize}px` : props.theme.font.size)};
`;

interface NodeProps {
    /** Index of the node  */
    index: number;
    /** Node to render */
    node: NodeItem;
    /** Optional node font size */
    nodeFontSize?: number;
    /** Optional node size */
    nodeSize?: number;
    /** Don't allow edits to be made */
    viewOnly?: boolean;
    /** Optional whether to wrap text within nodes */
    wrapNodeText?: boolean;
}

/**
 * The Node component represents a single Node circle which can be dragged between layers and within them
 */
function Node(props: NodeProps): JSX.Element {
    const theme = useTheme();
    const [{ isDragging }, dragRef] = useDrag({
        canDrag: !props.viewOnly,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        item: (): DragItem => ({
            ...props.node,
            index: props.index,
        }),
        type: NODE,
    });

    return (
        <Tooltip
            content={getTooltipContent(props.node?.name, props.node?.meta?.tooltip, theme, props.node?.meta?.label)}
        >
            <NodeCircle
                $isDragging={isDragging}
                $isMatch={props.node.selected}
                $nodeSize={props.nodeSize}
                $viewOnly={props.viewOnly}
                ref={dragRef}
            >
                <NodeText
                    $labelSize={props.node?.meta?.label_size ?? props.nodeFontSize}
                    $wrapNodeText={props.node?.meta?.wrap_text ?? props.wrapNodeText}
                >
                    {props.node?.meta?.label ?? props.node.name}
                </NodeText>
            </NodeCircle>
        </Tooltip>
    );
}

export default Node;
