import { causalGraphParser } from '../src/shared/parsers';
import { causalGraphSerializer } from '../src/shared/serializer';
import { CausalGraph, CausalGraphEdge, EdgeType } from '../src/types';
import { default as MockCausalGraphWithExtras } from './mocks/extras-graph';
import { MockCausalGraph } from './utils';

const getExpectedNodes = (mockCausalGraph: CausalGraph): Record<string, any> => {
    return Object.keys(mockCausalGraph.nodes).reduce((acc, key) => {
        acc[key] = {
            ...mockCausalGraph.nodes[key],
            meta: {
                ...mockCausalGraph.nodes[key].meta,
                rendering_properties: {
                    ...mockCausalGraph.nodes[key].meta.rendering_properties,
                    latent: false,
                },
            },
        };

        return acc;
    }, {});
};

const getExpectedEdges = (mockCausalGraph: CausalGraph): Record<string, Record<string, CausalGraphEdge>> => {
    return Object.keys(mockCausalGraph.edges).reduce((acc, sourceKey) => {
        const nestedEdges = Object.keys(mockCausalGraph.edges[sourceKey]).reduce((nestedAcc, targetKey) => {
            nestedAcc[targetKey] = {
                ...mockCausalGraph.edges[sourceKey][targetKey],
                meta: {
                    ...mockCausalGraph.edges[sourceKey][targetKey].meta,
                    rendering_properties: {
                        ...mockCausalGraph.edges[sourceKey][targetKey].meta.rendering_properties,
                    },
                },
            };

            return nestedAcc;
        }, {});
        acc[sourceKey] = nestedEdges;

        return acc;
    }, {} as Record<string, Record<string, CausalGraphEdge>>);
};

describe('CausalGraphSerializer', () => {
    it('should serialize the structure back to the original', () => {
        const parsedGraph = causalGraphParser(MockCausalGraph);

        // Latent property is added so expectation has to be adjusted
        const expectedNodes = getExpectedNodes(MockCausalGraph);

        const expectedEdges = getExpectedEdges(MockCausalGraph);

        // The one backwards edge needs to be swapped
        expectedEdges.target1 = {};
        expectedEdges.target1.input2 = expectedEdges.input2.target1;
        delete expectedEdges.input2.target1;
        expectedEdges.target1.input2.edge_type = EdgeType.DIRECTED_EDGE;

        expect(causalGraphSerializer({ graph: parsedGraph })).toEqual({
            edges: expectedEdges,
            nodes: expectedNodes,
            version: MockCausalGraph.version,
        });
    });

    it('should serialize the structure containing extras back to the original', () => {
        const mockCausalGraph = MockCausalGraphWithExtras as CausalGraph;
        const parsedGraph = causalGraphParser(mockCausalGraph);

        // Latent property is added so expectation has to be adjusted
        const expectedNodes = getExpectedNodes(mockCausalGraph);

        const expectedEdges = getExpectedEdges(mockCausalGraph);

        expect(causalGraphSerializer({ graph: parsedGraph })).toEqual({
            defaults: MockCausalGraphWithExtras.defaults,
            edges: expectedEdges,
            nodes: expectedNodes,
            version: MockCausalGraphWithExtras.version,
        });
    });
});
