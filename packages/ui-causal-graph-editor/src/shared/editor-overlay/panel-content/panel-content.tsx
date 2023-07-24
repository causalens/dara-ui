import { useContext } from 'react';

import PointerContext from '@shared/pointer-context';

import { PanelDiv } from '../positional-divs';
import { PanelTitle } from './panel-title';

interface PanelContentProps {
    children: React.ReactNode;
    /** Handler to remove currently selected edge; if not provided delete button should not be shown */
    onDelete?: () => void | Promise<void>;
    onMouseEnter?: () => void | Promise<void>;
    onMouseLeave?: () => void | Promise<void>;
    /** Function to select the next edge/node */
    onNext: () => void | Promise<void>;
    /** Function to select the previous edge/node */
    onPrev: () => void | Promise<void>;
    /** Panel title */
    title: string;
}

function PanelContent(props: PanelContentProps): JSX.Element {
    const { disablePointerEvents } = useContext(PointerContext);

    return (
        <PanelDiv $hide={disablePointerEvents} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <PanelTitle onDelete={props.onDelete} onNext={props.onNext} onPrev={props.onPrev} title={props.title} />
            {props.children}
        </PanelDiv>
    );
}

export default PanelContent;
