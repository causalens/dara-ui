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
import { Meta } from '@storybook/react';
import Graph from 'graphology';
import clusters from 'graphology-generators/random/clusters';
import deepCopy from 'lodash/cloneDeep';
import set from 'lodash/set';
import { useEffect, useState } from 'react';

import { FRAUD, SHIPPED_UNITS } from '../../tests/mocks/graphs';
import {
    CircularLayout,
    CustomLayout,
    FcoseLayout,
    ForceAtlasLayout,
    MarketingLayout,
    PlanarLayout,
    SpringLayout,
} from '../shared/graph-layout';
import { LayeringAlgorithm } from '../shared/graph-layout/planar-layout';
import { CausalGraph, EdgeConstraintType, EdgeType, EditorMode, VariableType } from '../types';
import { CausalGraphEditorProps, default as CausalGraphViewerComponent } from './causal-graph-editor';
import {
    Template,
    causalGraph,
    nodeTiersCausalGraph,
    nodeTiersList,
    pagCausalGraph,
    planarLayoutCausalGraph,
    timeSeriesCausalGraph,
} from './utils/stories-utils';

export default {
    component: CausalGraphViewerComponent,
    title: 'CausalGraphEditor/GraphEditor',
} as Meta;

export const Interactive = (args: CausalGraphEditorProps): JSX.Element => {
    const [nodeNumber, setNodeNumber] = useState(3);
    const [useStrenghts, setUseStrengths] = useState(false);
    const [initialGraphData, setInitialGraphData] = useState<CausalGraph>({
        edges: {},
        nodes: {},
        version: '2.0',
    });

    function updateInitialGraph(val: number): void {
        const updatedGraph = { ...initialGraphData, edges: {}, nodes: {} };

        let firstKey: string | null = null;

        for (let i = 0; i < val; i++) {
            const newKey = `node-${i}`;

            updatedGraph.nodes[newKey] = {
                meta: { rendering_properties: {} },
                variable_type: VariableType.UNSPECIFIED,
            };

            if (firstKey) {
                updatedGraph.edges[firstKey][newKey] = {
                    edge_type: EdgeType.DIRECTED_EDGE,
                    meta: { rendering_properties: {} },
                };

                if (useStrenghts) {
                    updatedGraph.edges[firstKey][newKey].meta.rendering_properties.thickness = i;
                    updatedGraph.edges[firstKey][newKey].meta.rendering_properties.tooltip = `Thickness: ${i}`;
                }
            } else {
                firstKey = newKey;
                updatedGraph.edges[firstKey] = {};
            }
        }

        setInitialGraphData(updatedGraph);
    }

    useEffect(() => {
        updateInitialGraph(nodeNumber);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nodeNumber, useStrenghts]);

    function onUpdate(data): void {
        setInitialGraphData(data);
    }

    if (Object.keys(initialGraphData.nodes).length === 0) {
        return <span>No nodes</span>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div>
                <span>Number of nodes: </span>
                <select onChange={(e) => setNodeNumber(Number(e.target.value))} value={nodeNumber}>
                    {Array(20)
                        .fill(0)
                        .map((_, idx) => (
                            <option key={idx} value={idx}>
                                {idx}
                            </option>
                        ))}
                </select>
                <span>use thickness: </span>
                <input checked={useStrenghts} onChange={() => setUseStrengths((x) => !x)} type="checkbox" />
            </div>
            <CausalGraphViewerComponent
                {...args}
                graphData={initialGraphData}
                onUpdate={onUpdate}
                style={{ margin: 0 }}
            />
        </div>
    );
};
Interactive.args = {
    editable: true,
    graphLayout: PlanarLayout.Builder.build(),
};

// /** Arrow to show at end of line */
// arrowType?: 'none' | 'normal' | 'filled' | 'empty' | 'soft';
// /** Symbol to show in the center of the arrow */
// centerSymbol?: 'none' | 'cross' | 'question' | 'bidirected';
// /** color to represent */
// color?: keyof DefaultTheme['colors'];
// /** dashArray SVG path property - line will be dashed if specified */
// dashArray?: string;
// /** legend label */
// label?: string;
// /** Show empty spot instead of a legend line */
// spacer?: boolean;

export const MarketingBottom = Template.bind({});
MarketingBottom.args = {
    additionalLegends: [
        {
            label: 'test arrow',
            type: 'edge',
        },
        {
            type: 'none',
        },
        {
            label: 'test node',
            type: 'node',
        },
    ],
    editable: true,
    graphData: causalGraph,
    graphLayout: MarketingLayout.Builder.build(),
    zoomThresholds: {
        edge: 0.5,
        label: 0.5,
        shadow: 0.5,
        symbol: 0.5,
    },
};

export const MarketingCenter = Template.bind({});
MarketingCenter.args = {
    editable: true,
    graphData: causalGraph,
    graphLayout: MarketingLayout.Builder.targetLocation('center').build(),
};

export const MarketingTiers = Template.bind({});
const marketingLayout = SpringLayout.Builder.build();
marketingLayout.tiers = nodeTiersList;

MarketingTiers.args = {
    editable: true,
    graphData: nodeTiersCausalGraph,
    graphLayout: marketingLayout,
};

export const PlanarVertical = Template.bind({});
PlanarVertical.args = {
    editable: true,
    graphData: { ...causalGraph, edges: { input2: causalGraph.edges.input2 } },
    graphLayout: PlanarLayout.Builder.orientation('vertical').build(),
};

export const PlanarHorizontal = Template.bind({});
PlanarHorizontal.args = {
    editable: true,
    graphData: SHIPPED_UNITS,
    graphLayout: PlanarLayout.Builder.build(),
};

export const PlanarLayoutAlgos = (): JSX.Element => {
    const planarSimplex = PlanarLayout.Builder.build();
    planarSimplex.layeringAlgorithm = LayeringAlgorithm.SIMPLEX;

    const planarLongestPath = PlanarLayout.Builder.build();
    planarLongestPath.layeringAlgorithm = LayeringAlgorithm.LONGEST_PATH;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <span>Simplex:</span>
            <CausalGraphViewerComponent
                graphData={planarLayoutCausalGraph}
                graphLayout={planarSimplex}
                style={{ margin: 0 }}
            />
            <span>Longest Path:</span>
            <CausalGraphViewerComponent
                graphData={planarLayoutCausalGraph}
                graphLayout={planarLongestPath}
                style={{ margin: 0 }}
            />
        </div>
    );
};

export const PlanarTiers = Template.bind({});
const planarLayout = PlanarLayout.Builder.build();
planarLayout.tiers = { group: 'meta.test', order_nodes_by: 'order' };
// planarLayout.tiers = nodeTiersList;
// planarLayout.tiers = { group: 'meta.group', rank: ['a', 'b', 'c', 'd', 'e'] };

PlanarTiers.args = {
    editable: true,
    graphData: nodeTiersCausalGraph,
    // graphData: FRAUD,
    graphLayout: planarLayout,
};

export const Spring = Template.bind({});
Spring.args = {
    editable: true,
    graphData: causalGraph,
    graphLayout: SpringLayout.Builder.build(),
};

export const SpringTiersArray = Template.bind({});
const springArrayLayout = SpringLayout.Builder.build();
springArrayLayout.tiers = nodeTiersList;

SpringTiersArray.args = {
    editable: true,
    graphData: nodeTiersCausalGraph,
    graphLayout: springArrayLayout,
};

export const SpringTiers = Template.bind({});
const springLayout = SpringLayout.Builder.build();
springLayout.tiers = { group: 'meta.group', order_nodes_by: 'meta.order', rank: ['a', 'b', 'c', 'd', 'e'] };
springLayout.tierSeparation = 300;

SpringTiers.args = {
    editable: true,
    graphData: FRAUD,
    graphLayout: springLayout,
};

export const Circular = Template.bind({});
Circular.args = {
    editable: true,
    graphData: causalGraph,
    graphLayout: CircularLayout.Builder.build(),
};

export const Pag = Template.bind({});
Pag.args = {
    editable: true,
    graphData: pagCausalGraph,
    graphLayout: FcoseLayout.Builder.build(),
};

const resolverGraph: CausalGraph = {
    edges: {
        input1: {
            input4: {
                edge_type: EdgeType.BIDIRECTED_EDGE,
                meta: {
                    rendering_properties: {
                        accepted: false,
                        description:
                            'my super long description text that spans a few lines, is super descriptive and goes in depth into the explanation of why this edge exists in the first place and this is some extra text that will be behind a scrollbar',
                        forced: false,

                        tooltip: {
                            key1: 'some value 1',
                            key2: 'some value 2',
                        },
                    },
                },
            },
            target: {
                edge_type: EdgeType.UNKNOWN_DIRECTED_EDGE,
                meta: {
                    rendering_properties: {
                        accepted: false,
                        forced: false,
                    },
                },
            },
        },
        input2: {
            target: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: { rendering_properties: { accepted: false, forced: false } },
            },
        },
        input3: {
            target: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: { rendering_properties: { accepted: false, forced: true } },
            },
        },
        input4: {
            target: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: { rendering_properties: { accepted: false, forced: true } },
            },
        },
    },
    nodes: {
        input1: {
            meta: {
                rendering_properties: {
                    label: 'input1 renamed',
                },
            },
            variable_type: VariableType.UNSPECIFIED,
        },
        input2: {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        input3: {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        input4: {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        target: {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
    },
};

export const Resolver = Template.bind({});
Resolver.args = {
    editable: true,
    editorMode: EditorMode.RESOLVER,
    graphData: resolverGraph,
    graphLayout: FcoseLayout.Builder.build(),
};

function graphToCausalGraph(graph: Graph): CausalGraph {
    return {
        edges: graph.reduceEdges((acc, edge, attrs, source, target) => {
            if (!(source in acc)) {
                acc[source] = {};
            }

            acc[source][target] = {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {},
            };

            return acc;
        }, {}),
        nodes: graph.reduceNodes((acc, nodeKey) => {
            acc[nodeKey] = {
                meta: {},
                variable_type: VariableType.UNSPECIFIED,
            };

            return acc;
        }, {}),
        version: '2.0',
    };
}

export const RandomClusters = (args: CausalGraphEditorProps): JSX.Element => {
    const [numClusters, setNumClusters] = useState(2);
    const [numEdges, setNumEdges] = useState(1600);
    const [numNodes, setNumNodes] = useState(800);
    const [parsedData, setParsedData] = useState<CausalGraph>();

    useEffect(() => {
        const newGraph = clusters(Graph, {
            clusters: numClusters,
            order: numNodes,
            size: numEdges,
        });
        setParsedData(graphToCausalGraph(newGraph));
    }, [numClusters, numEdges, numNodes]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div>
                <span>Numer of Clusters</span>
                <input defaultValue={numClusters} onChange={(e) => setNumClusters(e.target.valueAsNumber)} />
                <span>Numer of Edges</span>
                <input defaultValue={numEdges} onChange={(e) => setNumEdges(e.target.valueAsNumber)} />
                <span>Numer of Nodes</span>
                <input defaultValue={numNodes} onChange={(e) => setNumNodes(e.target.valueAsNumber)} />
            </div>
            {parsedData && <CausalGraphViewerComponent {...args} graphData={parsedData} style={{ margin: 0 }} />}
        </div>
    );
};
RandomClusters.args = {
    editable: true,
    graphLayout: FcoseLayout.Builder.nodeRepulsion(100_000_000).nodeSeparation(20).build(),
};

const singleLetterGraph: CausalGraph = {
    edges: {
        'a b c': {
            b: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {
                    rendering_properties: {},
                },
            },
        },
    },
    nodes: {
        'a b c': {
            meta: {
                rendering_properties: {},
            },
            variable_type: VariableType.UNSPECIFIED,
        },
        b: {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
    },
    version: '2.0',
};
export const SingleLetter = Template.bind({});
SingleLetter.args = {
    editable: true,
    graphData: singleLetterGraph,
    graphLayout: SpringLayout.Builder.nodeFontSize(80).build(),
};

const longWordGraph: CausalGraph = {
    edges: {
        super_long_single_word_without_spaces: {
            b: {
                edge_type: EdgeType.DIRECTED_EDGE,
                meta: {
                    rendering_properties: {},
                },
            },
        },
    },
    nodes: {
        b: {
            meta: {},
            variable_type: VariableType.UNSPECIFIED,
        },
        super_long_single_word_without_spaces: {
            meta: {
                rendering_properties: {},
            },
            variable_type: VariableType.UNSPECIFIED,
        },
    },
    version: '2.0',
};

export const LongWord = Template.bind({});
LongWord.args = {
    editable: true,
    graphData: longWordGraph,
    graphLayout: SpringLayout.Builder.build(),
};

// Real world example graph to test layouts
export const Fcose = Template.bind({});
Fcose.args = {
    editable: true,
    graphData: SHIPPED_UNITS,
    // graphData: FRAUD,
    graphLayout: FcoseLayout.Builder.build(),
};

export const FcoseTiers = Template.bind({});

const layout = FcoseLayout.Builder.build();
layout.tiers = { group: 'meta.group', rank: ['a', 'b', 'c', 'd', 'e'] };
layout.tierSeparation = 300;
layout.nodeRepulsion = 10000000;

layout.orientation = 'vertical';

FcoseTiers.args = {
    editable: true,
    graphData: FRAUD,
    graphLayout: layout,
};

export const ForceAtlas = Template.bind({});
ForceAtlas.args = {
    editable: true,
    graphData: FRAUD,
    graphLayout: ForceAtlasLayout.Builder.build(),
};

const PredefinedGraph = deepCopy(SHIPPED_UNITS);
// layout stored inline, as layouts are async and we can't run async on top-level in storybook yet
const predefinedLayout = {
    layout: {
        'amg click throughs': {
            x: 1664,
            y: 0,
        },
        'amg cost calc combined': {
            x: 1615.6471841969505,
            y: 398.22126537449606,
        },
        'amg impr combined': {
            x: 1473.3988266869412,
            y: 773.2993582808308,
        },
        'ams ams clicks': {
            x: 1245.5218849567123,
            y: 1103.4361033126831,
        },
        'ams ams spend': {
            x: 945.2597385606434,
            y: 1369.4451528470443,
        },
        'ams sumimpressions': {
            x: 590.0625320387792,
            y: 1555.8670278285304,
        },
        'ara rev shipped units acfu,7': {
            x: 200.57303594485748,
            y: 1651.8675664991617,
        },
        'ara traffic glance views': {
            x: -200.57303594485728,
            y: 1651.8675664991617,
        },
        'ara traffic in stock %': {
            x: -590.062532038779,
            y: 1555.8670278285304,
        },
        'ara traffic out of stock views': {
            x: -945.2597385606431,
            y: 1369.4451528470443,
        },
        'ara traffic prime shipping views': {
            x: -1245.5218849567125,
            y: 1103.4361033126831,
        },
        'fb combined click': {
            x: -1473.3988266869408,
            y: 773.2993582808317,
        },
        'fb combined impressions': {
            x: -1615.6471841969505,
            y: 398.221265374496,
        },
        'fb combined spend': {
            x: -1664,
            y: -5.351832178123847e-13,
        },
        'neo org branded clicks': {
            x: -1615.6471841969508,
            y: -398.22126537449554,
        },
        'neo org branded impressions': {
            x: -1473.3988266869417,
            y: -773.29935828083,
        },
        'neo org unbranded clicks': {
            x: -1245.5218849567125,
            y: -1103.436103312683,
        },
        'neo org unbranded impressions': {
            x: -945.2597385606434,
            y: -1369.4451528470443,
        },
        'neo paid clicks search': {
            x: -590.0625320387798,
            y: -1555.8670278285301,
        },
        'neo paid impressions search': {
            x: -200.57303594485842,
            y: -1651.8675664991617,
        },
        'neo paid neo ps cost': {
            x: 200.5730359448578,
            y: -1651.8675664991617,
        },
        'rnr avg star rating': {
            x: 590.0625320387792,
            y: -1555.8670278285304,
        },
        'rnr total number of reviews': {
            x: 945.2597385606416,
            y: -1369.4451528470454,
        },
        'sos org org wtd impressions': {
            x: 1245.5218849567116,
            y: -1103.4361033126838,
        },
        'sos org sos org avg rank': {
            x: 1473.3988266869414,
            y: -773.2993582808306,
        },
        'sos paid pd wtd impressions': {
            x: 1615.6471841969505,
            y: -398.22126537449617,
        },
    },
};
Object.entries(predefinedLayout.layout).forEach(([nodeKey, position]) => {
    set(PredefinedGraph.nodes[nodeKey], 'meta.rendering_properties.x', position.x);
    set(PredefinedGraph.nodes[nodeKey], 'meta.rendering_properties.y', position.y);
});

export const PredefinedPositions = Template.bind({});
PredefinedPositions.args = {
    editable: true,
    graphData: PredefinedGraph,
    graphLayout: FcoseLayout.Builder.build(),
};

export const CustomPositions = Template.bind({});
CustomPositions.args = {
    editable: true,
    graphData: PredefinedGraph,
    graphLayout: CustomLayout.Builder.build(),
};

// User provided custom layout but no initial positions -> falls back to default
export const CustomLayoutNoPositions = Template.bind({});
CustomLayoutNoPositions.args = {
    editable: true,
    graphData: SHIPPED_UNITS,
    graphLayout: CustomLayout.Builder.build(),
};

export const VisualEdgeEncoder = Template.bind({});

VisualEdgeEncoder.args = {
    editable: true,
    editorMode: EditorMode.EDGE_ENCODER,
    graphData: {
        edges: {
            'first node': {
                'second node': {},
            },
        },
        nodes: {
            'first node': {},
            'second node': {},
            'third node': {},
        },
    },
    graphLayout: SpringLayout.Builder.build(),
    initialConstraints: [
        {
            source: 'first node',
            target: 'second node',
            type: EdgeConstraintType.HARD_DIRECTED,
        },
    ],
};

export const TimeSeries = Template.bind({});
TimeSeries.args = {
    editable: true,
    graphData: timeSeriesCausalGraph,
    graphLayout: MarketingLayout.Builder.build(),
};
