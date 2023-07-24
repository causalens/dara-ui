import { enableMapSet, produce } from 'immer';

import { FeatureListAction, FeatureListReducer as FeatureListImmerReducer } from '../src/feature-list-editor/state';
import { FeatureDict } from '../src/types';

const initialStateArray: Array<[string, FeatureDict]> = [
    ['uid1', { column: 'col1', name: 'name1', ops: [{ k1: 0, k2: 1, type: 'type1' }] }],
    [
        'uid2',
        {
            column: 'col2',
            name: 'name2',
            ops: [
                { k1: 0, k2: 1, type: 'type1' },
                { k3: 0, k4: 1, type: 'type2' },
            ],
        },
    ],
    ['uid3', { column: 'col3', name: 'name3', ops: [{ k1: 0, k2: 1, type: 'type1' }] }],
];
const initialState = new Map<string, FeatureDict>(Array.from(initialStateArray));

enableMapSet();
const Reducer = produce(FeatureListImmerReducer);

describe('FeatureListEditor reducer', () => {
    it('add FeaureDict', () => {
        const state = Reducer(initialState, {
            type: FeatureListAction.ADD_FD,
        });

        expect(state.size).toEqual(4);

        const [, newValue] = Array.from(state)[3];

        expect(newValue).toEqual({
            column: 'new_column',
            name: 'new_name',
            ops: [],
        });
    });

    it('delete FeatureDict', () => {
        const state = Reducer(initialState, {
            type: FeatureListAction.DELETE_FD,
            uid: 'uid2',
        });

        expect(state.size).toEqual(2);
        const newKeys = Array.from(state.keys());
        expect(newKeys).toEqual(['uid1', 'uid3']);
    });

    it('update FeautureDict', () => {
        const state = Reducer(initialState, {
            key: 'column',
            type: FeatureListAction.UPDATE_FD_PROPERTY,
            uid: 'uid2',
            value: 'new_col',
        });

        expect(state.get('uid1')).toEqual(initialState.get('uid1'));
        expect(state.get('uid3')).toEqual(initialState.get('uid3'));

        expect(state.get('uid2')).toEqual({
            ...initialState.get('uid2'),
            column: 'new_col',
        });
    });

    it('add operation', () => {
        const state = Reducer(initialState, {
            operationType: 'new_op',
            type: FeatureListAction.ADD_OPERATION,
            uid: 'uid2',
        });

        expect(state.get('uid1')).toEqual(initialState.get('uid1'));
        expect(state.get('uid3')).toEqual(initialState.get('uid3'));

        expect(state.get('uid2')).toEqual({
            ...initialState.get('uid2'),
            ops: [...initialState.get('uid2').ops, { type: 'new_op' }],
        });
    });

    it('delete operation', () => {
        const state = Reducer(initialState, {
            operationIndex: 0,
            type: FeatureListAction.DELETE_OPERATION,
            uid: 'uid2',
        });

        expect(state.get('uid1')).toEqual(initialState.get('uid1'));
        expect(state.get('uid3')).toEqual(initialState.get('uid3'));

        expect(state.get('uid2')).toEqual({
            ...initialState.get('uid2'),
            ops: [initialState.get('uid2').ops[1]],
        });
    });

    it('move operation down', () => {
        const state = Reducer(initialState, {
            direction: 'down',
            operationIndex: 0,
            type: FeatureListAction.MOVE_OPERATION,
            uid: 'uid2',
        });

        expect(state.get('uid2')).toEqual({
            ...initialState.get('uid2'),
            ops: [initialState.get('uid2').ops[1], initialState.get('uid2').ops[0]],
        });
    });

    it('move operation up', () => {
        const state = Reducer(initialState, {
            direction: 'up',
            operationIndex: 1,
            type: FeatureListAction.MOVE_OPERATION,
            uid: 'uid2',
        });

        expect(state.get('uid2')).toEqual({
            ...initialState.get('uid2'),
            ops: [initialState.get('uid2').ops[1], initialState.get('uid2').ops[0]],
        });
    });

    it('update operation property key', () => {
        const state = Reducer(initialState, {
            newKey: 'k1_new',
            operationIndex: 0,
            previousKey: 'k1',
            type: FeatureListAction.UPDATE_OPERATION_PROPERTY_KEY,
            uid: 'uid2',
        });

        expect(state.get('uid2')).toEqual({
            ...initialState.get('uid2'),
            ops: [
                {
                    k1_new: 0, // k1 -> k1_new
                    k2: 1,
                    type: 'type1',
                },
                initialState.get('uid2').ops[1],
            ],
        });
    });

    it('update operation property value', () => {
        const state = Reducer(initialState, {
            key: 'k1',
            operationIndex: 0,
            type: FeatureListAction.UPDATE_OPERATION_PROPERTY_VALUE,
            uid: 'uid2',
            value: 10,
        });

        expect(state.get('uid2')).toEqual({
            ...initialState.get('uid2'),
            ops: [
                {
                    k1: 10,
                    k2: 1,
                    type: 'type1',
                },
                initialState.get('uid2').ops[1],
            ],
        });
    });

    it('update operation property value throws when key not found', () => {
        expect(() => {
            Reducer(initialState, {
                key: 'k1_invalid_key',
                operationIndex: 0,
                type: FeatureListAction.UPDATE_OPERATION_PROPERTY_VALUE,
                uid: 'uid2',
                value: 10,
            });
        }).toThrowError('not found');
    });

    it('delete operation property', () => {
        const state = Reducer(initialState, {
            key: 'k1',
            operationIndex: 0,
            type: FeatureListAction.DELETE_OPERATION_PROPERTY,
            uid: 'uid2',
        });

        expect(state.get('uid2')).toEqual({
            ...initialState.get('uid2'),
            ops: [
                {
                    k2: 1,
                    type: 'type1',
                },
                initialState.get('uid2').ops[1],
            ],
        });
    });

    it('delete operation property throws when key not found', () => {
        expect(() => {
            Reducer(initialState, {
                key: 'k1_invalid_key',
                operationIndex: 0,
                type: FeatureListAction.DELETE_OPERATION_PROPERTY,
                uid: 'uid2',
            });
        }).toThrowError('not found');
    });

    it('delete operation property throws when "type" key is provided', () => {
        expect(() => {
            Reducer(initialState, {
                key: 'type',
                operationIndex: 0,
                type: FeatureListAction.DELETE_OPERATION_PROPERTY,
                uid: 'uid2',
            });
        }).toThrowError('cannot delete');
    });

    it('add operation property', () => {
        const state = Reducer(initialState, {
            operationIndex: 0,
            type: FeatureListAction.ADD_OPERATION_PROPERTY,
            uid: 'uid2',
        });

        expect(state.get('uid2')).toEqual({
            ...initialState.get('uid2'),
            ops: [
                {
                    k1: 0,
                    k2: 1,
                    key1: 0,
                    type: 'type1',
                },
                initialState.get('uid2').ops[1],
            ],
        });
    });

    it('add operation property increments key if already exists', () => {
        const modifiedStateArray: Array<[string, FeatureDict]> = [
            ['uid1', { column: 'col1', name: 'name1', ops: [{ k1: 0, k2: 1, type: 'type1' }] }],
            [
                'uid2',
                {
                    column: 'col2',
                    name: 'name2',
                    ops: [
                        { k1: 0, k2: 1, key1: 0, key2: 0, type: 'type1' },
                        { k3: 0, k4: 1, type: 'type2' },
                    ],
                },
            ],
            ['uid3', { column: 'col3', name: 'name3', ops: [{ k1: 0, k2: 1, type: 'type1' }] }],
        ];

        const state = Reducer(new Map(modifiedStateArray), {
            operationIndex: 0,
            type: FeatureListAction.ADD_OPERATION_PROPERTY,
            uid: 'uid2',
        });

        expect(state.get('uid2')).toEqual({
            ...initialState.get('uid2'),
            ops: [
                {
                    k1: 0,
                    k2: 1,
                    key1: 0,
                    key2: 0,
                    key3: 0,
                    type: 'type1',
                },
                initialState.get('uid2').ops[1],
            ],
        });
    });
});
