import * as PIXI from 'pixi.js';

import { DefaultTheme } from '@darajs/styled-components';

import { EdgeConstraint, EdgeType, EditorMode } from '../../../types';

export interface PixiEdgeStyle {
    /** Whether edge is accepted by domain expert */
    accepted?: boolean;
    /** Optional color override */
    color?: string;
    /** Constraint attached to the edge, used in EdgeEncoder mode */
    constraint?: EdgeConstraint;
    /** Current editor mode */
    editorMode: EditorMode;
    /** Whether edge is forced by domain knowledge */
    forced?: boolean;
    /** Whether there is an edge currently selected */
    isEdgeSelected: boolean;
    /** Edge points; if provided, edge will be drawn as a curve along the points */
    points?: Array<PIXI.IPointData>;
    /** Current edge state */
    state: EdgeState;
    /** Strength definition to be used if provided */
    strength?: EdgeStrengthDefinition;
    /** Current theme object */
    theme: DefaultTheme;
    /** Optional thickness override */
    thickness?: number;
    /** Edge type */
    type: EdgeType;
}

/**
 * Current edge state
 */
export interface EdgeState {
    hover: boolean;
    selected: boolean;
}

export interface EdgeStrengthDefinition {
    /**
     * Number of dots to show
     */
    dots: 0 | 1 | 2 | 3 | 4;
    /**
     * Opacity 0-1
     */
    opacity: number;
    /**
     * Edge thickness
     */
    thickness: 2 | 3 | 4;
}

/**
 * Define strength visuals based on bins
 */
export const EDGE_STRENGTHS: Array<EdgeStrengthDefinition> = [
    {
        dots: 0,
        opacity: 0.3,
        thickness: 2,
    },
    {
        dots: 1,
        opacity: 0.4,
        thickness: 2,
    },
    {
        dots: 2,
        opacity: 0.5,
        thickness: 3,
    },
    {
        dots: 3,
        opacity: 0.6,
        thickness: 4,
    },
    {
        dots: 4,
        opacity: 0.7,
        thickness: 4,
    },
];
