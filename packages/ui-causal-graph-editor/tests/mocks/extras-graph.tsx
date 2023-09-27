const MockCausalGraphWithExtras = {
    defaults: { edge_activation: null, node_activation: null, node_redacted: null },
    edges: {
        A: { B: { edge_type: '->', erased: ['piecewise_linear', 'piecewise_linear_decreasing'], meta: {} } },
        B: { C: { edge_type: '->', erased: ['linear'], meta: {} } },
    },
    nodes: {
        A: { erased: null, meta: {}, redacted: null, variable_type: 'unspecified' },
        B: { erased: null, meta: {}, redacted: null, variable_type: 'unspecified' },
        C: { erased: null, meta: {}, redacted: null, variable_type: 'unspecified' },
        D: { erased: null, meta: {}, redacted: 'sum', variable_type: 'unspecified' },
    },
    version: '0.8.0',
};

export default MockCausalGraphWithExtras;
