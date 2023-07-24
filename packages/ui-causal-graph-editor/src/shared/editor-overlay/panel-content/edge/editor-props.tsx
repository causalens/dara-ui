import { GraphApi } from '@shared/use-causal-graph-editor';
import { EdgeConstraintItem, SimulationEdge } from '@types';

export interface EdgeEditorProps {
    /** Graph API */
    api: GraphApi;
    /** The edge meta data */
    edge: SimulationEdge;
    /** Edge constraint for the specific edge */
    edgeConstraint: EdgeConstraintItem;
    /** Handler called when the type of the constraint is updated */
    onUpdateConstraint: (constraint: EdgeConstraintItem) => void | Promise<void>;
    /** The id of the source node */
    source: string;
    /** The id of the target node */
    target: string;
}
