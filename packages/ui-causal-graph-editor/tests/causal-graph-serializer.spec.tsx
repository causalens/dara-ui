import { causalGraphParser } from '../src/shared/parsers';
import { causalGraphSerializer } from '../src/shared/serializer';
import { EditorMode } from '../src/types';
import { MockCausalGraph } from './utils';

describe('CausalGraphSerializer', () => {
    it('should serialize the internal structure back to the original', () => {
        const parsedGraph = causalGraphParser(MockCausalGraph, EditorMode.DEFAULT);

        // Latent property is added so expectation has to be adjusted
        const expectedNodes = Object.keys(MockCausalGraph.nodes).reduce((acc, key) => {
            acc[key] = {
                ...MockCausalGraph.nodes[key],
                meta: {
                    ...MockCausalGraph.nodes[key].meta,
                    rendering_properties: {
                        ...MockCausalGraph.nodes[key].meta.rendering_properties,
                        latent: false,
                    },
                },
            };

            return acc;
        }, {});

        const expectedEdges = Object.keys(MockCausalGraph.edges).reduce((acc, sourceKey) => {
            const nestedEdges = Object.keys(MockCausalGraph.edges[sourceKey]).reduce((nestedAcc, targetKey) => {
                nestedAcc[targetKey] = {
                    ...MockCausalGraph.edges[sourceKey][targetKey],
                    meta: {
                        ...MockCausalGraph.edges[sourceKey][targetKey].meta,
                        rendering_properties: {
                            ...MockCausalGraph.edges[sourceKey][targetKey].meta.rendering_properties,
                        },
                    },
                };

                return nestedAcc;
            }, {});
            acc[sourceKey] = nestedEdges;

            return acc;
        }, {});

        expect(causalGraphSerializer({ graph: parsedGraph })).toEqual({
            edges: expectedEdges,
            nodes: expectedNodes,
            version: MockCausalGraph.version,
        });
    });
});
