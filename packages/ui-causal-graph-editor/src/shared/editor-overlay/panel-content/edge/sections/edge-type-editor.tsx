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
import { ButtonBar } from '@darajs/ui-components';

import { GraphApi } from '@shared/use-causal-graph-editor';
import { PagSymbol, SimulationEdge, stringToSymbol, symbolToString } from '@types';

import { ColumnWrapper, SectionTitle } from '../../styled';

const symbolItems: Array<{ label: string; value: PagSymbol }> = [
    { label: 'Directed', value: PagSymbol.ARROW },
    { label: 'Wildcard', value: PagSymbol.CIRCLE },
    { label: 'Undirected', value: PagSymbol.EMPTY },
];

interface EdgeTypeEditorProps {
    /** Graph API */
    api: GraphApi;
    /** The edge meta data */
    edge: SimulationEdge;
    /** The id of the source node */
    source: string;
    /** The id of the target node */
    target: string;
}

function EdgeTypeEditor(props: EdgeTypeEditorProps): JSX.Element {
    const [tailString, headString] = props.edge.edge_type;

    const head = stringToSymbol(headString, 'head');
    const tail = stringToSymbol(tailString, 'tail');

    function onSymbolUpdate(symbol: PagSymbol, position: 'head' | 'tail'): void {
        const newHead = position === 'head' ? symbolToString(symbol, 'head') : props.edge.edge_type[1];
        const newTail = position === 'tail' ? symbolToString(symbol, 'tail') : props.edge.edge_type[0];

        props.api.updateEdgeType([props.source, props.target], newTail + newHead);
    }

    return (
        <ColumnWrapper>
            <SectionTitle>Tail Symbol</SectionTitle>
            <ButtonBar
                initialValue={symbolItems.find((i) => i.value === tail)}
                items={symbolItems}
                onSelect={(i) => onSymbolUpdate(i.value, 'tail')}
                styling="secondary"
            />
            <SectionTitle>Head Symbol</SectionTitle>
            <ButtonBar
                initialValue={symbolItems.find((i) => i.value === head)}
                items={symbolItems}
                onSelect={(i) => onSymbolUpdate(i.value, 'head')}
                styling="secondary"
            />
        </ColumnWrapper>
    );
}

export default EdgeTypeEditor;
