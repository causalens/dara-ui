import { CausalGraph, EdgeType, VariableType } from '../src/types';

export const MockCausalGraph: CausalGraph = {
    edges: {
        input1: {
            target1: { edge_type: EdgeType.DIRECTED_EDGE, meta: {} },
            target2: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: { original: 'metadata', rendering_properties: { color: '#7510F7', thickness: 10 } },
            },
        },
        input2: {
            target1: { edge_type: EdgeType.BACKWARDS_DIRECTED_EDGE, meta: {} },
            target2: { edge_type: EdgeType.DIRECTED_EDGE, meta: {} },
        },
    },
    nodes: {
        input1: {
            meta: {
                original: 'metadata',
                rendering_properties: {
                    label: 'input1 label',
                },
            },
            variable_type: VariableType.UNSPECIFIED,
        },
        input2: {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        target1: {
            meta: { rendering_properties: { label_size: 25, size: 60 } },
            variable_type: VariableType.UNSPECIFIED,
        },
        target2: { meta: {}, variable_type: VariableType.UNSPECIFIED },
    },
    version: '2',
};
