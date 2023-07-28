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
import { enableMapSet } from 'immer';
import debounce from 'lodash/debounce';
import { nanoid } from 'nanoid';
import { useCallback, useEffect, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';

import styled from '@darajs/styled-components';
import { Accordion } from '@darajs/ui-components';
import { Cross, Plus } from '@darajs/ui-icons';

import { FeatureDict } from '../types';
import FeatureDictEditor from './feature-dict-editor';
import { FeatureListAction, FeatureListReducer } from './state';
import { ButtonRow, IconButton } from './utils';

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding-right: 2rem;
`;
const EditorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export interface FeatureListEditorProps {
    /**
     * List of available operations
     */
    availableOperations: string[];
    /**
     * Standard classname property
     */
    className?: string;
    /**
     * List of FeatureDicts to edit
     */
    featureList: FeatureDict[];
    /**
     * Optionally override initially open item. Accepts an index of the item.
     */
    initialOpenItem?: number;
    /**
     * Handler called whenever a part of the data is edited
     */
    onUpdate?: (featureList: FeatureDict[]) => void | Promise<void>;
    /**
     * Standard styling prop
     */
    style?: React.CSSProperties;
}

enableMapSet();

/**
 * FeatureListEditor allows user to edit a list of FeatureDicts
 */
function FeatureListEditor(props: FeatureListEditorProps): JSX.Element {
    const [data, dispatch] = useImmerReducer(
        FeatureListReducer,
        props.featureList.reduce((acc, fd) => acc.set(nanoid(), fd), new Map<string, FeatureDict>())
    );

    const debouncedUpdate = useMemo(() => (props.onUpdate ? debounce(props.onUpdate, 300) : null), [props.onUpdate]);

    function deleteFeatureDict(uid: string): void {
        dispatch({ type: FeatureListAction.DELETE_FD, uid });
    }

    function addFeatureDict(): void {
        dispatch({ type: FeatureListAction.ADD_FD });
    }

    const HeaderRenderer = useCallback((item: any) => {
        return (
            <HeaderWrapper>
                {item.content.name}
                <Cross asButton onClick={() => deleteFeatureDict(item.uid)} />
            </HeaderWrapper>
        );
    }, []);

    const InnerRenderer = useCallback(
        (item: any) => {
            return (
                <FeatureDictEditor
                    availableOperations={props.availableOperations}
                    dispatch={dispatch}
                    featureDict={item.content}
                    uid={item.uid}
                />
            );
        },
        [props.availableOperations]
    );

    // Send updates to parent
    useEffect(() => {
        debouncedUpdate?.(Array.from(data.values()));
    }, [data]);

    return (
        <EditorWrapper className={props.className} style={props.style}>
            <Accordion
                headerRenderer={HeaderRenderer}
                initialOpenItems={props.initialOpenItem ?? -1}
                innerRenderer={InnerRenderer}
                items={Array.from(data).map(([uid, fd]) => ({ content: fd, label: uid, uid }))}
            />
            <ButtonRow>
                <IconButton onClick={() => addFeatureDict()}>
                    <Plus />
                    Add Feature Dict
                </IconButton>
            </ButtonRow>
        </EditorWrapper>
    );
}

export default FeatureListEditor;
