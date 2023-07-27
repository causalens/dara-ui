/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import styled from '@darajs/styled-components';

const shouldForwardProp = (prop: any): boolean => !['color', 'width'].includes(prop);

export interface BadgeProps {
    /** The label of the badge, can be any react node */
    children: React.ReactNode;
    /** The main color of the badge */
    color: string;
    /** An optional height parameter, if not provided 18px */
    height?: number;
    /** An optional param that defines whether badge shows outline instead or filled styling, if not provided defaults to false */
    outline?: boolean;
    /** An optional width parameter, if not provided the badge will scale to the content */
    width?: string;
}

/**
 * A simple badge component
 *
 * @param {BadgeProps} props - the component props
 */
const Badge = styled.span.withConfig({ shouldForwardProp })<BadgeProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: ${(props) => props.width || 'auto'};
    height: ${(props) => (props.height ? `${props.height}px` : '2rem')};
    padding: 0 0.75rem;

    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => (props.outline ? props.color : props.theme.colors.blue1)};

    background-color: ${(props) => (props.outline ? props.theme.colors.blue1 : props.color)};
    border: 1px solid ${(props) => props.color};
    border-radius: ${(props) => (props.height ? `${props.height / 2}px` : '1rem')};
`;

export default Badge;
