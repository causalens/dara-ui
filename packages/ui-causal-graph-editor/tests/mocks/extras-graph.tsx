const MockCausalGraphWithExtras = {
    defaults: { edge_activation: null, node_activation: null, node_redacted: null },
    edges: {
        A: {
            B: {
                destination: { erased: null, identifier: 'B', meta: {}, redacted: null, variable_type: 'unspecified' },
                edge_type: '->',
                erased: ['piecewise_linear', 'piecewise_linear_decreasing'],
                meta: {},
                source: { erased: null, identifier: 'A', meta: {}, redacted: null, variable_type: 'unspecified' },
            },
        },
        B: {
            C: {
                destination: { erased: null, identifier: 'C', meta: {}, redacted: null, variable_type: 'unspecified' },
                edge_type: '->',
                erased: ['linear'],
                meta: {},
                source: { erased: null, identifier: 'B', meta: {}, redacted: null, variable_type: 'unspecified' },
            },
        },
    },
    nodes: {
        A: { erased: null, identifier: 'A', meta: {}, redacted: null, variable_type: 'unspecified' },
        B: { erased: null, identifier: 'B', meta: {}, redacted: null, variable_type: 'unspecified' },
        C: { erased: null, identifier: 'C', meta: {}, redacted: null, variable_type: 'unspecified' },
        D: { erased: null, identifier: 'D', meta: {}, redacted: 'sum', variable_type: 'unspecified' },
    },
    version: '0.8.0',
};

export default MockCausalGraphWithExtras;
