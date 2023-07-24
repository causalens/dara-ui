import { nanoid } from 'nanoid';
import { Reducer } from 'use-immer';

import { FeatureDict } from '../types';

export enum FeatureListAction {
    ADD_FD = 'ADD_FD',
    ADD_OPERATION = 'ADD_OPERATION',
    ADD_OPERATION_PROPERTY = 'ADD_OPERATION_PROPERTY',
    DELETE_FD = 'DELETE_FD',
    DELETE_OPERATION = 'DELETE_OPERATION',
    DELETE_OPERATION_PROPERTY = 'DELETE_OPERATION_PROPERTY',
    MOVE_OPERATION = 'MOVE_OPERATION',
    UPDATE_FD_PROPERTY = 'UPDATE_FD_PROPERTY',
    UPDATE_OPERATION_PROPERTY_KEY = 'UPDATE_OPERATION_PROPERTY_KEY',
    UPDATE_OPERATION_PROPERTY_VALUE = 'UPDATE_OPERATION_PROPERTY_VALUE',
}

interface AddFeatureDictAction {
    type: FeatureListAction.ADD_FD;
}

interface DeleteFeatureDictAction {
    type: FeatureListAction.DELETE_FD;
    uid: string;
}

interface UpdateFeatureDictPropertyAction {
    key: Exclude<keyof FeatureDict, 'ops'>;
    type: FeatureListAction.UPDATE_FD_PROPERTY;
    uid: string;
    value: string;
}

interface AddOperationAction {
    operationType: string;
    type: FeatureListAction.ADD_OPERATION;
    uid: string;
}

interface DeleteOperationAction {
    operationIndex: number;
    type: FeatureListAction.DELETE_OPERATION;
    uid: string;
}

interface MoveOperationAction {
    direction: 'up' | 'down';
    operationIndex: number;
    type: FeatureListAction.MOVE_OPERATION;
    uid: string;
}

interface UpdateOperationPropertyKeyAction {
    newKey: string;
    operationIndex: number;
    previousKey: string;
    type: FeatureListAction.UPDATE_OPERATION_PROPERTY_KEY;
    uid: string;
}

interface UpdateOperationPropertyValueAction {
    key: string;
    operationIndex: number;
    type: FeatureListAction.UPDATE_OPERATION_PROPERTY_VALUE;
    uid: string;
    value: string | number;
}

interface DeleteOperationPropertyAction {
    key: string;
    operationIndex: number;
    type: FeatureListAction.DELETE_OPERATION_PROPERTY;
    uid: string;
}

interface AddOperationPropertyAction {
    operationIndex: number;
    type: FeatureListAction.ADD_OPERATION_PROPERTY;
    uid: string;
}

export type FeatureListActions =
    | AddFeatureDictAction
    | DeleteFeatureDictAction
    | UpdateFeatureDictPropertyAction
    | AddOperationAction
    | DeleteOperationAction
    | MoveOperationAction
    | UpdateOperationPropertyKeyAction
    | UpdateOperationPropertyValueAction
    | DeleteOperationPropertyAction
    | AddOperationPropertyAction;

type FeatureListReducerState = Readonly<Map<string, FeatureDict>>;

export const FeatureListReducer: Reducer<FeatureListReducerState, FeatureListActions> = (draft, action) => {
    switch (action.type) {
        case FeatureListAction.ADD_FD: {
            const newId = nanoid();

            draft.set(newId, { column: 'new_column', name: 'new_name', ops: [] });

            break;
        }

        case FeatureListAction.DELETE_FD: {
            draft.delete(action.uid);

            break;
        }

        case FeatureListAction.UPDATE_FD_PROPERTY: {
            draft.get(action.uid)[action.key] = action.value;

            break;
        }

        case FeatureListAction.ADD_OPERATION: {
            draft.get(action.uid).ops.push({
                type: action.operationType,
            });

            break;
        }

        case FeatureListAction.DELETE_OPERATION: {
            draft.get(action.uid).ops.splice(action.operationIndex, 1);

            break;
        }

        case FeatureListAction.MOVE_OPERATION: {
            if (action.operationIndex === 0 && action.direction === 'up') return;
            if (action.operationIndex === draft.size - 1 && action.direction === 'down') return;

            const newIndex = action.direction === 'up' ? action.operationIndex - 1 : action.operationIndex + 1;

            const [movedItem] = draft.get(action.uid).ops.splice(action.operationIndex, 1);
            draft.get(action.uid).ops.splice(newIndex, 0, movedItem);

            break;
        }

        case FeatureListAction.UPDATE_OPERATION_PROPERTY_KEY: {
            const featureDict = draft.get(action.uid);
            const previousValue = featureDict.ops[action.operationIndex][action.previousKey];

            delete featureDict.ops[action.operationIndex][action.previousKey];
            featureDict.ops[action.operationIndex][action.newKey] = previousValue;

            break;
        }

        case FeatureListAction.UPDATE_OPERATION_PROPERTY_VALUE: {
            if (!(action.key in draft.get(action.uid).ops[action.operationIndex])) {
                throw new Error(`Key ${action.key} not found in edited operation!`);
            }

            draft.get(action.uid).ops[action.operationIndex][action.key] = action.value;

            break;
        }

        case FeatureListAction.DELETE_OPERATION_PROPERTY: {
            if (!(action.key in draft.get(action.uid).ops[action.operationIndex])) {
                throw new Error(`Key ${action.key} not found in edited operation!`);
            }

            if (action.key === 'type') {
                throw new Error('DeleteOperationProperty action cannot delete the "type" property');
            }

            delete draft.get(action.uid).ops[action.operationIndex][action.key];

            break;
        }

        case FeatureListAction.ADD_OPERATION_PROPERTY: {
            const existingKeys = Object.keys(draft.get(action.uid).ops[action.operationIndex]);

            const newKey = 'key';
            let keySuffix = 1;

            while (existingKeys.includes(`${newKey}${keySuffix}`)) {
                keySuffix++;
            }

            draft.get(action.uid).ops[action.operationIndex][`${newKey}${keySuffix}`] = 0;

            break;
        }
    }
};
