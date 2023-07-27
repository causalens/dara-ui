/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import * as React from 'react';

import styled from '@darajs/styled-components';
import { useDimensions } from '@darajs/ui-utils';

import Treemap, { Node } from './treemap';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

interface HierarchyViewerProps {
    /** Allow leaf nodes to be clicked */
    allowLeafClick?: boolean;
    /** Allow parent nodes to be clicked */
    allowParentClick?: boolean;
    /** Standard classname prop */
    className?: string;
    /** The data that get passed to the component.
     * Each node must contain atleast the label and id while the leaf nodes should contain the weights
     * */
    data: Node;
    /** onClick handler for clicking on nodes of the treemap */
    onClick?: (node: Node) => void | Promise<void>;
    /** Optional style that can be passed to the wrapper */
    style?: React.CSSProperties;
}

/**
 * The Hierarchy component that takes the data and converts it into a nested treemap.
 * The component takes up the full width and height of the parent container.
 * The component shows a tooltip that shows the weight of the node.
 *
 * @param {HierarchyViewerProps} params - the component props
 */
function HierarchyViewer(props: HierarchyViewerProps): JSX.Element {
    const [ref, dimensions] = useDimensions<HTMLDivElement>();
    return (
        <Wrapper className={props.className} id="hierarchy-viewer-root" ref={ref} style={props.style}>
            <Treemap
                allowLeafClick={props.allowLeafClick}
                allowParentClick={props.allowParentClick}
                data={props.data}
                height={dimensions.height}
                onClick={props.onClick}
                width={dimensions.width}
            />
        </Wrapper>
    );
}

export default HierarchyViewer;
