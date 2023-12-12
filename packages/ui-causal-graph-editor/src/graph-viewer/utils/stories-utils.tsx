/**
 * Copyright 2023 Impulse Innovations Limited
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { NotificationWrapper, useNotifications } from '@darajs/ui-notifications';

import { CausalGraph, EdgeType, VariableType } from '../../types';
import { CausalGraphEditorProps, default as CausalGraphViewerComponent } from '../causal-graph-editor';

export const Template = (args: CausalGraphEditorProps): JSX.Element => {
    const { pushNotification } = useNotifications();

    return (
        <>
            <CausalGraphViewerComponent {...args} onNotify={pushNotification} style={{ margin: 0 }} />
            <NotificationWrapper style={{ bottom: 0 }} />
        </>
    );
};

export const causalGraph: CausalGraph = {
    edges: {
        input1: {
            input4: {
                destination: {
                    identifier: 'input4',
                    meta: {},
                    variable_type: VariableType.UNSPECIFIED,
                },
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {
                    rendering_properties: {
                        color: 'red',
                        description:
                            'my super long description text that spans a few lines, is super descriptive and goes in depth into the explanation of why this edge exists in the first place and this is some extra text that will be behind a scrollbar',
                        tooltip: {
                            key1: 'some value 1',
                            key2: 'some value 2',
                        },
                    },
                },
                source: {
                    identifier: 'input1',
                    meta: {},
                    variable_type: VariableType.UNSPECIFIED,
                },
            },
            target: {
                destination: {
                    identifier: 'target',
                    meta: {},
                    variable_type: VariableType.UNSPECIFIED,
                },
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
                source: {
                    identifier: 'input1',
                    meta: {},
                    variable_type: VariableType.UNSPECIFIED,
                },
            },
        },
        input2: {
            target: {
                destination: {
                    identifier: 'target',
                    meta: {},
                    variable_type: VariableType.UNSPECIFIED,
                },
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {
                    rendering_properties: {
                        description:
                            'my super long description text that spans a few lines, is super descriptive and goes in depth into the explanation of why this edge exists in the first place. It is actually so long that it does not fit by default and triggers overflow to scroll because of the max-height set to 5 lines',
                        tooltip: 'some plaintext description',
                    },
                },
                source: {
                    identifier: 'input2',
                    meta: {
                        rendering_properties: {
                            label: 'input2 renamed multi word node name',
                        },
                    },
                    variable_type: VariableType.UNSPECIFIED,
                },
            },
        },
        input3: {
            target: {
                destination: {
                    identifier: 'target',
                    meta: {},
                    variable_type: VariableType.UNSPECIFIED,
                },
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
                source: {
                    identifier: 'input3',
                    meta: {},
                    variable_type: VariableType.UNSPECIFIED,
                },
            },
        },
        input4: {
            target: {
                destination: {
                    identifier: 'target',
                    meta: {},
                    variable_type: VariableType.UNSPECIFIED,
                },
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: { rendering_properties: {} },
                source: {
                    identifier: 'input4',
                    meta: {},
                    variable_type: VariableType.UNSPECIFIED,
                },
            },
        },
    },
    nodes: {
        input1: {
            identifier: 'input1',
            meta: {
                rendering_properties: {
                    label: 'input1 renamed',
                },
            },
            variable_type: VariableType.UNSPECIFIED,
        },
        input2: {
            identifier: 'input2',
            meta: {
                rendering_properties: {
                    label: 'input2 renamed multi word node name',
                },
            },
            variable_type: VariableType.UNSPECIFIED,
        },
        input3: {
            identifier: 'input3',
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        input4: {
            identifier: 'input4',
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        target: {
            identifier: 'target',
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
    },
    version: '2.0',
};

export const pagCausalGraph = {
    ...causalGraph,
    edges: {
        ...causalGraph.edges,
        input1: {
            ...causalGraph.edges.input1,
            input4: {
                ...causalGraph.edges.input1.input4,
                edge_type: EdgeType.UNDIRECTED_EDGE,
            },
        },
    },
};

export const nodeTiersCausalGraph = {
    ...causalGraph,
    nodes: {
        ...causalGraph.nodes,
        input1: {
            ...causalGraph.nodes.input1,
            group: 'group1',
            meta: {
                ...causalGraph.nodes.input1.meta,
                rendering_properties: {
                    ...causalGraph.nodes.input1.meta.rendering_properties,
                    another: 'group3',
                },
                test: 'group2',
            },
        },
        input2: {
            ...causalGraph.nodes.input2,
            group: 'group1',
            meta: {
                ...causalGraph.nodes.input2.meta,
                rendering_properties: {
                    ...causalGraph.nodes.input2.meta.rendering_properties,
                    another: 'group3',
                },
                test: 'group2',
            },
        },
        input3: {
            ...causalGraph.nodes.input3,
            group: 'group2',
            meta: {
                ...causalGraph.nodes.input3.meta,
                rendering_properties: {
                    ...causalGraph.nodes.input3.meta.rendering_properties,
                    another: 'group3',
                },
                test: 'group1',
            },
        },
        input4: {
            ...causalGraph.nodes.input4,
            group: 'group2',
            meta: {
                ...causalGraph.nodes.input4.meta,
                rendering_properties: {
                    ...causalGraph.nodes.input4.meta.rendering_properties,
                    // another: 'group3',
                },
                test: 'group1',
            },
        },

        target: {
            ...causalGraph.nodes.target,
            group: 'group3',
            meta: {
                ...causalGraph.nodes.target.meta,
                rendering_properties: {
                    ...causalGraph.nodes.target.meta.rendering_properties,
                    another: 'group1',
                },
                test: 'group3',
            },
        },
    },
};

export const nodeTiersList = [['target'], ['input1', 'input2'], ['input3', 'input4']];
