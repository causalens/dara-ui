import cloneDeep from 'lodash/cloneDeep';

import { causalGraphParser } from '../src/shared/parsers';
import { serializeGraphEdge, serializeGraphNode } from '../src/shared/serializer';
import { EdgeType } from '../src/types';
import { MockCausalGraph } from './utils';

describe('CausalGraphParser', () => {
    it('should parse a causal graph in a lossless fashion', () => {
        const parsedGraph = causalGraphParser(MockCausalGraph);
        expect(parsedGraph.nodes()).toEqual(Object.keys(MockCausalGraph.nodes));

        // Default = dag mode
        expect(parsedGraph.type).toEqual('directed');

        // check parse-serialize is lossless
        parsedGraph.forEachEdge((id, attrs, source, target) => {
            const expectedEdge = cloneDeep(MockCausalGraph.edges[source][target]);

            // Add rendering properties
            if (Object.keys(expectedEdge.meta).length === 0) {
                expectedEdge.meta.rendering_properties = {};
            }

            if (expectedEdge.edge_type === EdgeType.BACKWARDS_DIRECTED_EDGE) {
                expectedEdge.edge_type = EdgeType.DIRECTED_EDGE;
            }

            expect(serializeGraphEdge(attrs)).toEqual(expectedEdge);
        });

        parsedGraph.forEachNode((id, attrs) => {
            const expectedNode = cloneDeep(MockCausalGraph.nodes[id]);

            if (!expectedNode.meta.rendering_properties) {
                expectedNode.meta.rendering_properties = {};
            }
            // No available inputs provided - all nodes are not latent
            expectedNode.meta.rendering_properties.latent = false;

            expect(serializeGraphNode(attrs)).toEqual(expectedNode);
        });
    });

    it('should mark latent nodes when available inputs is present', () => {
        // input1 is an input
        const parsedGraph = causalGraphParser(MockCausalGraph, ['input1']);

        const expectedLatentNodes = ['input2'];
        parsedGraph.forEachNode((id, attrs) => {
            expect(attrs['meta.rendering_properties.latent']).toEqual(expectedLatentNodes.includes(id));
        });
    });
});
