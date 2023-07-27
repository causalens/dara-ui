/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import debounce from 'lodash/debounce';
import { useCallback, useMemo, useState } from 'react';

import styled from '@darajs/styled-components';
import { Textarea } from '@darajs/ui-components';

import { useSettings } from '@shared/settings-context';
import { GraphApi } from '@shared/use-causal-graph-editor';
import { SimulationEdge } from '@types';

import { ColumnWrapper, SectionTitle } from '../../styled';

const EdgeNote = styled(Textarea)`
    width: 100%;

    div,
    textarea {
        width: 100%;
    }

    & > div::after {
        background-color: ${(props) => props.theme.colors.blue1};
    }

    textarea {
        resize: vertical;
        max-height: 8rem;
        background-color: ${(props) => props.theme.colors.blue1};

        &:disabled {
            color: ${(props) => props.theme.colors.grey3};
        }
    }
`;

interface DescriptionEditorProps {
    /** Graph API */
    api: GraphApi;
    /**
     * Selected edge attributes
     */
    edge: SimulationEdge;
    /** Selected edge */
    selectedEdge: [string, string];
}

function DescriptionEditor(props: DescriptionEditorProps): JSX.Element {
    const { editable } = useSettings();
    const [note, setNote] = useState(() => props.edge['meta.rendering_properties.description'] || '');

    const updateNote = useCallback(
        (newDesc: string) => {
            props.api.updateEdgeNote(props.selectedEdge, newDesc);
        },
        [props.api, props.selectedEdge]
    );
    const debouncedUpdateNote = useMemo(() => debounce(updateNote, 300), [updateNote]);

    function onNoteChange(newDesc: string): void {
        setNote(newDesc);
        debouncedUpdateNote(newDesc);
    }

    return (
        <ColumnWrapper>
            <SectionTitle>Note</SectionTitle>
            <EdgeNote
                disabled={!editable}
                onChange={(newDesc) => onNoteChange(newDesc)}
                placeholder="Add a note."
                value={note}
            />
        </ColumnWrapper>
    );
}

export default DescriptionEditor;
