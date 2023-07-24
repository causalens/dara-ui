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
