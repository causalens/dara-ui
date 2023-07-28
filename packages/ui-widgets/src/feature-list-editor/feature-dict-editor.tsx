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
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dispatch } from 'react';

import styled from '@darajs/styled-components';
import { ComboBox, Input, Item, NumericInput } from '@darajs/ui-components';
import { ArrowDown, ArrowUp, Cross, Plus } from '@darajs/ui-icons';

import { FeatureDict } from '../types';
import { FeatureListAction, FeatureListActions } from './state';
import { ButtonRow, IconButton } from './utils';

const FeatureListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FeatureDictProperties = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    width: 100%;
    margin-bottom: 1px;
    padding: 1rem;

    background-color: ${(props) => props.theme.colors.grey1};
    border-radius: 0.25rem;
`;

const OperationsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    background-color: ${(props) => props.theme.colors.grey1};
    border-radius: 0.25rem;
`;

const OperationsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-size: ${(props) => props.theme.font.size};
        font-weight: normal;
    }
`;

const ArrowUpButton = styled(ArrowUp)<{ $disabled: boolean }>`
    cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
    color: ${(props) => (props.$disabled ? props.theme.colors.grey3 : props.theme.colors.grey5)};

    :hover {
        color: ${(props) => (props.$disabled ? props.theme.colors.grey3 : props.theme.colors.grey6)};
    }
`;

const ArrowDownButton = styled(ArrowDown)<{ $disabled: boolean }>`
    cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
    color: ${(props) => (props.$disabled ? props.theme.colors.grey3 : props.theme.colors.grey5)};

    :hover {
        color: ${(props) => (props.$disabled ? props.theme.colors.grey3 : props.theme.colors.grey6)};
    }
`;

const OperationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;

    padding: 1rem;

    background-color: ${(props) => props.theme.colors.blue1};
    border-radius: 0.5rem;
`;

const OperationEntries = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;

    width: 100%;
`;

const OperationHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 1rem;

    border-bottom: 2px dashed ${(props) => props.theme.colors.grey3};
`;

const OperationControls = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const OperationParamRow = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
`;

const OperationParam = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`;

const KeyValueWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    label {
        flex: 0;
        min-width: 50px;
    }
`;

function opToItem(op: string): Item {
    return {
        label: op,
        value: op,
    };
}

export interface FeatureDictEditorProps {
    /**
     * All available operations
     */
    availableOperations: string[];
    /**
     * Dispatch callback for the reducer
     */
    dispatch: Dispatch<FeatureListActions>;
    /**
     * Feature Dictionary being edited
     */
    featureDict: FeatureDict;
    /**
     * UID of the feauture dict edited
     */
    uid: string;
}

function FeatureDictEditor(props: FeatureDictEditorProps): JSX.Element {
    function updateFdProperty(key: Exclude<keyof FeatureDict, 'ops'>, value: string): void {
        props.dispatch({ key, type: FeatureListAction.UPDATE_FD_PROPERTY, uid: props.uid, value });
    }

    function moveOperation(operationIndex: number, direction: 'up' | 'down'): void {
        props.dispatch({ direction, operationIndex, type: FeatureListAction.MOVE_OPERATION, uid: props.uid });
    }

    function updateOperationPropertyValue(operationIndex: number, key: string, value: string | number): void {
        props.dispatch({
            key,
            operationIndex,
            type: FeatureListAction.UPDATE_OPERATION_PROPERTY_VALUE,
            uid: props.uid,
            value,
        });
    }

    function updateOperationPropertyKey(operationIndex: number, previousKey: string, newKey: string): void {
        props.dispatch({
            newKey,
            operationIndex,
            previousKey,
            type: FeatureListAction.UPDATE_OPERATION_PROPERTY_KEY,
            uid: props.uid,
        });
    }

    function removeOperationProperty(operationIndex: number, key: string): void {
        props.dispatch({
            key,
            operationIndex,
            type: FeatureListAction.DELETE_OPERATION_PROPERTY,
            uid: props.uid,
        });
    }

    function addOperation(): void {
        props.dispatch({
            operationType: props.availableOperations[0],
            type: FeatureListAction.ADD_OPERATION,
            uid: props.uid,
        });
    }

    function removeOperation(idx: number): void {
        props.dispatch({
            operationIndex: idx,
            type: FeatureListAction.DELETE_OPERATION,
            uid: props.uid,
        });
    }

    function addOperationProperty(operationIndex: number): void {
        props.dispatch({
            operationIndex,
            type: FeatureListAction.ADD_OPERATION_PROPERTY,
            uid: props.uid,
        });
    }

    return (
        <FeatureListWrapper>
            <FeatureDictProperties>
                <KeyValueWrapper>
                    <label>Column</label>
                    <Input initialValue={props.featureDict.column} onChange={(v) => updateFdProperty('column', v)} />
                </KeyValueWrapper>
                <KeyValueWrapper>
                    <label>Name</label>
                    <Input initialValue={props.featureDict.name} onChange={(v) => updateFdProperty('name', v)} />
                </KeyValueWrapper>
            </FeatureDictProperties>
            <OperationsWrapper>
                <OperationsHeader>
                    <h3>Operations:</h3>
                    <IconButton onClick={addOperation}>
                        <Plus />
                        Add Operation
                    </IconButton>
                </OperationsHeader>
                {props.featureDict.ops.map((op, idx) => (
                    <OperationWrapper key={`${op.type}-${idx}`}>
                        <OperationHeader>
                            <KeyValueWrapper>
                                <label>type</label>
                                <ComboBox
                                    initialValue={opToItem(props.featureDict.ops[idx].type)}
                                    items={props.availableOperations.map((o) => opToItem(o))}
                                    onSelect={(it) => updateOperationPropertyValue(idx, 'type', it.value)}
                                    style={{ minWidth: '200px' }}
                                />
                            </KeyValueWrapper>
                            <OperationControls>
                                <ArrowUpButton
                                    $disabled={idx === 0}
                                    asButton
                                    onClick={() => moveOperation(idx, 'up')}
                                    size="lg"
                                />
                                <ArrowDownButton
                                    $disabled={idx === props.featureDict.ops.length - 1}
                                    asButton
                                    onClick={() => moveOperation(idx, 'down')}
                                    size="lg"
                                />
                                <Cross asButton onClick={() => removeOperation(idx)} size="lg" />
                            </OperationControls>
                        </OperationHeader>
                        <OperationEntries>
                            {Object.entries(op)
                                .filter(([k]) => k !== 'type')
                                .map(([key, val], paramIdx) => (
                                    <OperationParamRow key={paramIdx}>
                                        <OperationParam>
                                            <KeyValueWrapper>
                                                <label>key</label>
                                                <Input
                                                    onChange={(v) => updateOperationPropertyKey(idx, key, v)}
                                                    value={key}
                                                />
                                            </KeyValueWrapper>
                                            {/* Explicitly set key to rerender and re-create the callback with correct key if updated  */}
                                            <KeyValueWrapper key={key}>
                                                <label>value</label>
                                                <NumericInput
                                                    initialValue={Number(val)}
                                                    onChange={(v) => updateOperationPropertyValue(idx, key, v)}
                                                />
                                            </KeyValueWrapper>
                                        </OperationParam>
                                        <Cross asButton onClick={() => removeOperationProperty(idx, key)} size="lg" />
                                    </OperationParamRow>
                                ))}
                            <ButtonRow>
                                <IconButton onClick={() => addOperationProperty(idx)}>
                                    <Plus />
                                    Add Parameter
                                </IconButton>
                            </ButtonRow>
                        </OperationEntries>
                    </OperationWrapper>
                ))}
            </OperationsWrapper>
        </FeatureListWrapper>
    );
}

export default FeatureDictEditor;
